const Task = require("../models/taskModel");

// Get Tasks
const getTasks = async (req, res) => {
  try {
    if (!req.user) {
      res.status(400).json({
        message: "User not found!",
      });
    }

    const tasks = await Task.find({
      user: req.user.id,
    });

    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add Task
const addTask = async (req, res) => {
  try {
    if (!req.user) {
      res.status(400).json({
        message: "User not found!",
      });
    }

    if (!req.body.text) {
      res.status(400).json({
        message: "Please add a text field",
      });
    }

    const task = await Task.create({
      text: req.body.text,
      user: req.user.id,
    });

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete Task
const deleteTask = async (req, res) => {
  try {
    if (!req.user) {
      res.status(400).json({
        message: "User not found!",
      });
    }

    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(400).json({
        message: "Task not found!",
      });
    }

    if (task.user.toString() !== req.user.id) {
      return res.status(400).json({
        message: "Not authorized.",
      });
    }

    await task.remove();

    res.status(200).json({ id: req.params.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Task
const updateTask = async (req, res) => {
  try {
    if (!req.user) {
      res.status(400).json({
        message: "User not found!",
      });
    }

    const task = await Task.findById(req.params.id);

    if (!task) {
      res.status(400);

      return res.status(400).json({
        message: "Task not found!",
      });
    }

    if (task.user.toString() !== req.user.id) {
      return res.status(400).json({
        message: "Not authorized.",
      });
    }

    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete all Tasks
const deleteAllTasks = async (req, res) => {
  try {
    if (!req.user) {
      res.status(400).json({
        message: "User not found!",
      });
    }

    await Task.deleteMany({ user: req.user.id });

    res.status(200).json({
      message: "All Tasks Deleted",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getTasks,
  addTask,
  deleteTask,
  deleteAllTasks,
  updateTask,
};
