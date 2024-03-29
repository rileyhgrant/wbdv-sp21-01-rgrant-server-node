const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// TODO: REMOVE ME
const uri = process.env.MONGODB_URI;

const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/whiteboard-01", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
mongoose.connect(uri, {
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

require("./controllers/quizzes-controller")(app);
require("./controllers/questions-controller")(app);
require("./controllers/quiz-attempts-controller")(app);

// app.listen(3000);
// app.listen(process.env.PORT || 3001);
require('dotenv').config();
app.listen(process.env.PORT || 3000);
