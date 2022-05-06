const express = require("express");
const {
  getTasks,
  addTask,
  deleteTask,
  deleteAllTasks,
  updateTask,
} = require("../controllers/taskController");

const router = express.Router();

router.route("/").get(getTasks).post(addTask).delete(deleteAllTasks);

router.route("/:id").put(updateTask).delete(deleteTask);

module.exports = router;
