const express = require("express");
const path = require("path");
const fs = require("fs");
const util = require("util");
const { readFromFile, readAndAppend } = require("./helpers/fsUtils");

const tipsRouter = require("./routes/tipsRouter");
const feedbackRouter = require("./routes/feedbackRouter");

// Helper method for generating unique ids


const PORT = 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.use("/api/tips", tipsRouter);
app.use("/api/feedback", feedbackRouter);

// GET Route for homepage
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

// GET Route for feedback page
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/pages/feedback.html"))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
