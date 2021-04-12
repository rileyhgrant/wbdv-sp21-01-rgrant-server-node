let questions = require("./questions.json");
// const createQuestion = () => {};
// const createQuestionForQuiz = () => {};
const findAllQuestions = () => {
  return questions;
};
const findQuestionById = (questionId) => {
  return questions.filter((question) => question._id === questionId);
};
// const updateQuestion = () => {};
// const deleteQuestion = () => {};
const findQuestionsForQuiz = (quizId) => {
  return questions.filter((question) => question.quizId === quizId);
};
module.exports = {
  findAllQuestions,
  findQuestionById,
  findQuestionsForQuiz,
};
