const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Connect MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/quizDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Question Schema
const Question = mongoose.model("Question", {
  question: String,
  options: [String],
  answer: String
});

// API to get questions
app.get("/questions", async (req, res) => {
  const questions = await Question.find();
  res.json(questions);
});

// API to check answers
app.post("/submit", async (req, res) => {
  const { answers } = req.body;
  const questions = await Question.find();

  let score = 0;

  questions.forEach((q, index) => {
    if (q.answer === answers[index]) {
      score++;
    }
  });

  res.json({ score });
});

app.listen(5000, () => console.log("Server running on port 5000"));