const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


mongoose.connect("mongodb://127.0.0.1:27017/newProject", {
}).then(() => console.log("MongoDb Connected"))
.catch(err => console.log(err));

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});

const project = mongoose.model("Project", userSchema);

app.post("/api/v1/send_project_request", async (req, res) => {
    try{
        const {name, email, message} = req.body;
        if(!name || !email || !message) {
            return res.status(400).json({ message: "All fields are required" })
        }

        const projects = new project({name, email, message})
        await projects.save();
        res.status(201).json({message: "Request saved Successfully"});
    }
    catch(err) {
        res.status(400).json({message: err.message})
    }
})

app.listen(3000, () => {
    console.log("Yess Server connected");
})

app.get('/', (req, res) => {
    res.send("Hii Guys we are live")
})