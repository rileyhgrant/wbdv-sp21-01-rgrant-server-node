const quizService = require("../services/quiz-service");

module.exports = (app) => {
  const findAllQuizzes = (req, res) => {
    quizService.findAllQuizzes().then((quizzes) => {
      res.send(quizzes);
    });
    // const quizzes = quizService.findAllQuizzes();
    // res.send(quizzes);
    // res.send(quizService.findAllQuizzes());
  };

  const findQuizById = (req, res) => {
    const quizId = req.params["quizId"];
    quizService.findQuizById(quizId).then((quiz) => {
      res.send(quiz);
    });
    // const quiz = quizService.findQuizById(quizId);
    // res.json(quiz);
  };

  app.get("/api/quizzes", findAllQuizzes);
  app.get("/api/quizzes/:quizId", findQuizById);
};
