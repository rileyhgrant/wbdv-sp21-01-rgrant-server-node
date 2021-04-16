// let questions = require("./questions.json");
// const questionsModel = require("../models/questions/questions-model");
// const questionModel = require("../models/questions/questions-model");

const questionsDAO = require("../daos/questions-dao");

// const createQuestion = () => {};
// const createQuestionForQuiz = () => {};
// const findAllQuestions = () => {
//   return questions;
// };
// const findQuestionById = (questionId) => {
//   return questions.filter((question) => question._id === questionId);
// };
// const updateQuestion = () => {};
// const deleteQuestion = () => {};
// const findQuestionsForQuiz = (quizId) => {
//   return questions.filter((question) => question.quizId === quizId);
// };

// const findAllQuestions = () => {
//   return questionModel.find();
// };

// const findQuestionById = (questionId) => {
//   return questionModel.findById();
// };

// const findQuestionsForQuiz = (qzId) => {
//   return questionsModel.find({ quizId: qzId });
// };

const findAllQuestions = () => {
  return questionsDAO.findAllQuestions();
};

const findQuestionById = (questionId) => {
  return questionsDAO.findQuestionById(questionId);
};

const findQuestionsForQuiz = (quizId) => {
  return questionsDAO.findQuestionsForQuiz(quizId);
};

module.exports = {
  findAllQuestions,
  findQuestionById,
  findQuestionsForQuiz,
};
