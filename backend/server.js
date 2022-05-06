const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(express.json());

app.use("/api/tasks", require("./routes/taskRoutes"));

const PORT = 5000;

app.listen(PORT, (req, res) => {
  console.log(`Server is running on port ${PORT}`.green.underline);
});
