const express = require("express");
const {
  getTasks,
  addTask,
  deleteTask,
  deleteAllTasks,
  updateTask,
} = require("../controllers/taskController");

const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router
  .route("/")
  .get(protect, getTasks)
  .post(protect, addTask)
  .delete(protect, deleteAllTasks);

router.route("/:id").put(protect, updateTask).delete(protect, deleteTask);

module.exports = router;
