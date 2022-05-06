// Get Tasks
const getTasks = async () => {
  const res = await fetch("http://localhost:5000/api/tasks");

  const data = await res.json();

  return data;
};

// Add Task
const addTask = async (newTask) => {
  const res = await fetch("http://localhost:5000/api/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTask),
  });

  const data = await res.json();

  return data;
};

// Edit Task
const editTask = async (editedTask) => {
  const res = await fetch(`http://localhost:5000/api/tasks/${editedTask.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(editedTask),
  });

  const data = await res.json();

  return data;
};

// Delete Task
const deleteTask = async (id) => {
  const res = await fetch(`http://localhost:5000/api/tasks/${id}`, {
    method: "DELETE",
  });

  const data = await res.json();

  return data.id;
};

const clearTasks = async () => {
  const res = await fetch(`http://localhost:5000/api/tasks`, {
    method: "DELETE",
  });

  const data = await res.json();

  return data.id;
};

const taskService = {
  getTasks,
  deleteTask,
  addTask,
  editTask,
  clearTasks,
};

export default taskService;
