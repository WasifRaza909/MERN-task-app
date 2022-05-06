const Task = require("../models/taskModel");

// Get Tasks
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();

    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add Task
const addTask = async (req, res) => {
  try {
    if (!req.body.text) {
      res.status(400).json({
        message: "Please add a text field",
      });
    }

    const task = await Task.create({
      text: req.body.text,
    });

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete Task
const deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(400).json({
        message: "Task not found!",
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
    const task = await Task.findById(req.params.id);

    if (!task) {
      res.status(400);

      return res.status(400).json({
        message: "Task not found!",
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
    await Task.deleteMany();

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
