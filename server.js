const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");

require("dotenv").config();
require("./config/database");

const app = express();

app.use(logger("dev"));
app.use(express.json());

app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));

app.use(require("./config/checkToken"));

const port = process.env.PORT || 3001;

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});

app.use(express.static(path.join(__dirname, "build")));

app.use("/api/users", require("./routes/api/users"));

const ensureLoggedIn = require("./config/ensureLoggedIn");
app.use(
  "/api/classroomInstructions",
  ensureLoggedIn,
  require("./routes/api/classroomInstructions")
);
app.use("/api/firstFives", ensureLoggedIn, require("./routes/api/firstFives"));
app.use(
  "/api/exitTickets",
  ensureLoggedIn,
  require("./routes/api/exitTickets")
);
app.use(
  "/api/lessonPlans",
  ensureLoggedIn,
  require("./routes/api/lessonPlans")
);
app.use("/api/subPlans", ensureLoggedIn, require("./routes/api/subPlans"));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
