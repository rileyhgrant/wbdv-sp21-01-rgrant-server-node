// const quizzes = require("./quizzes.json");
// const quizzesModel = require("../models/quizzes/quizzes-model");

const quizzesDao = require("../daos/quizzes-dao");

// OLD - old ones from the JSON array of quizzes
// const createQuiz = () => {}
// const findAllQuizzes = () => quizzes;
// const findQuizById = (quizId) => quizzes.find((quiz) => quiz._id === quizId);
// const updateQuiz = () => {}
// const deleteQuiz = () => {}

// const findAllQuizzes = () => {
//   return quizzesModel.find();
// };

// const findQuizById = (quizId) => {
//   return quizzesModel.findById(quizId).populate("questions").exec();
// };

const findAllQuizzes = () => {
  return quizzesDao.findAllQuizzes();
};

const findQuizById = (quizId) => {
  return quizzesDao.findQuizById(quizId);
};

module.exports = {
  findAllQuizzes,
  findQuizById,
};
