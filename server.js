const express = require("express");
const app = express();

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/whiteboard-01", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, X-Requested-With, Origin"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  next();
});

// const quizController = require("./controllers/quizzes-controller");
// quizController(app);
require("./controllers/quizzes-controller")(app);

// const questionsController = require("./controllers/questions-controller");
// questionsController(app);
require("./controllers/questions-controller")(app);

app.listen(3000);
app.listen(process.env.PORT || 3001);
