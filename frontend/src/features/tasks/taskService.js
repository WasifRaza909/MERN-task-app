// Get Tasks
const getTasks = async () => {
  const token = JSON.parse(localStorage.getItem("user"));

  const res = await fetch("http://localhost:5000/api/tasks", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  console.log(res);

  const data = await res.json();

  return data;
};

// Add Task
const addTask = async (newTask) => {
  const token = JSON.parse(localStorage.getItem("user"));

  const res = await fetch("http://localhost:5000/api/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(newTask),
  });

  const data = await res.json();

  return data;
};

// Edit Task
const editTask = async (editedTask) => {
  const token = JSON.parse(localStorage.getItem("user"));

  const res = await fetch(`http://localhost:5000/api/tasks/${editedTask.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(editedTask),
  });

  const data = await res.json();

  return data;
};

// Delete Task
const deleteTask = async (id) => {
  const token = JSON.parse(localStorage.getItem("user"));

  const res = await fetch(`http://localhost:5000/api/tasks/${id}`, {
    method: "DELETE",
    Authorization: `Bearer ${token}`,
  });

  const data = await res.json();

  return data.id;
};

const clearTasks = async () => {
  const token = JSON.parse(localStorage.getItem("user"));

  const res = await fetch(`http://localhost:5000/api/tasks`, {
    method: "DELETE",
    Authorization: `Bearer ${token}`,
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
