const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express();
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1/TODOdb", {})
.then(() => console.log("Mongodb connected"))
.catch(err => console.error(err));

const todoSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    title: String,
    done: Boolean
})

const Task = mongoose.model("tasks", todoSchema);

app.get("/api/tasks", async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: err.message })
    }
});

app.post('/api/task', async (req, res) => {
    try {
        const task = new Task(req.body);
        await task.save();
        res.json(task);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
} )

app.put('/api/task/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json(task);
    } catch (err) {
        res.status(500).json({ error: err.message});        
    }
});

app.delete("/api/task/:id", async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        res.json(task);
    } catch (error) {
        res.status(500).json({error: error.message })
    }
});


app.get('/health', (req, res) => {
    res.send({ message: "This api works perfectly"})
})

app.listen(3000, () => console.log("Server started..."))