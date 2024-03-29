const mongoose = require("mongoose");

const questionsSchema = mongoose.Schema(
  {
    _id: String,
    title: String,
    quizId: String,
    question: String,
    correct: String,
    type: {
      type: String,
      enum: ["TRUE_FALSE", "MULTIPLE_CHOICE", "FILL_BLANKS"],
    },
    choices: [String], // optional!!
    answer: String, // useful for permanent record
  },
  { collection: "questions" }
);

module.exports = questionsSchema;
