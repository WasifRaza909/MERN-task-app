const path = require("path");
const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const cors = require("cors");
const { errorHandler } = require("./middlewares/errorHandler");

const app = express();

const port = process.env.PORT || 5000;

connectDB();

app.use(cors());

app.use(express.json());

app.use("/api/tasks", require("./routes/taskRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "build", "index.html")
    );
  });
} else {
  app.get("/", (req, res) => res.send("Please set to production"));
}

app.listen(port, (req, res) => {
  console.log(`Server is running on port ${port}`.green.underline);
});
