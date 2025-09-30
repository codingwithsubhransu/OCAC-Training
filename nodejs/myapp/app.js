const express = require("express");
const mongoose = require("mongoose")
const { default: mongoose } = require("mongoose");
const app = express();

app.get('/', (req, res) => {
    res.send("Hii Guys i am live");
});

app.listen(3000, () => {
    console.log("Server connected")
})

mongoose.connect("")
.then(() => 
    console.log("DB connected")
)
.catch(err => console.log(err))

