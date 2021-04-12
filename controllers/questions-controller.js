const questionService = require("../services/question-service");

module.exports = (app) => {
  const findAllQuestions = (req, res) => {
    res.json(questionService.findAllQuestions());
  };

  const findQuestionById = (req, res) => {
    const questionId = req.params["questId"];
    const question = questionService.findQuestionById(questionId);
    res.json(question);
  };

  const findQuestionsForQuiz = (req, res) => {
    const quizId = req.params["quizId"];
    const questions = questionService.findQuestionsForQuiz(quizId);
    res.json(questions);
  };

  app.get("/api/questions", findAllQuestions);
  app.get("/api/questions/:questId", findQuestionById);
  app.get("/api/quizzes/:quizId/questions", findQuestionsForQuiz);
};
