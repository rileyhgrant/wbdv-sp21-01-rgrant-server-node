const mongoose = require("mongoose");
const quizAttemptsSchema = require("./quizzes-attempts-schema");

const quizAttemptsModel = mongoose.model("QuizAttemptsModel", quizAttemptsSchema);

module.exports = quizAttemptsModel;
