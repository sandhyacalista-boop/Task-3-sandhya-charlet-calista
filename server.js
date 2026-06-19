const express = require("express");
const mongoose = require("mongoose");
const Student = require("./models/student");

const app = express();

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/studentdb")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// CREATE
app.post("/students", async (req, res) => {
    const student = await Student.create(req.body);
    res.json(student);
});

// READ
app.get("/students", async (req, res) => {
    const students = await Student.find();
    res.json(students);
});
//UPDATE
app.put("/students/:id", async (req, res) => {
    const student = await Student.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    res.json(student);
});
//DELETE
app.delete("/students/:id", async (req, res) => {

    await Student.findByIdAndDelete(req.params.id);

    res.json({
        message: "Student Deleted"
    });

});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});