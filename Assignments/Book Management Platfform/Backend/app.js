const express = require("express")
const http = require("http")
const { Server } = require("socket.io")
const mongoose = require("mongoose")
const cors = require("cors")
const { Socket } = require("dgram")

const app = express()
const server = http.createServer(app)

//Socket.IO

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173"
    }
})


app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/bookDB")
.then(() => console.log("DB Connected"))
.catch((err) => console.error("Db error",err))


const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    price: Number,
    createdAt: {type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);


app.post("/api/book", async (req, res) => {
    try {
        const { title, author, price } = req.body;
        const newBook = new Book({ title, author, price});
        const savedBook = await newBook.save();

        io.emit("newBook", savedBook);
        res.status(201).json({ message: "Book added Successfully", book: newBook });

    } catch (error) {
        console.error(error.message)
        res.status(500).json({ message: "Failed to add book" });
    }
});

app.get("/api/books", async (req, res) => {
    try {
        const books = await Book.find().sort({ createdAt: -1})
        res.json(books);
    } catch (error) {
        res.status(500).json({error: "Failed to fetch books"})
    }
});

io.on("connection", (socket) => {
    console.log("Client Connected", socket.id);
});



server.listen(3000, () => {
    console.log(`Server Run`)
})