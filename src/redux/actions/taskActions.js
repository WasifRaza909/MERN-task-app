import {
  GET_TASKS,
  DELETE_TASK,
  ADD_TASK,
  SET_EDIT_STATE,
  EDIT_TASK,
  RESET_EDIT_STATE,
} from "../constants/taskConstants";

// Get Tasks
export const getTasks = () => async (dispatch) => {
  try {
    const res = await fetch("http://localhost:3000/tasks");

    const data = await res.json();

    dispatch({
      type: GET_TASKS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

// Add Task
export const addTask = (text) => async (dispatch) => {
  const newTask = {
    text,
  };

  try {
    const res = await fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    });

    const data = await res.json();

    dispatch({
      type: ADD_TASK,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

// Set Edit State
export const setEditState = (task) => async (dispatch) => {
  dispatch({
    type: SET_EDIT_STATE,
    payload: task,
  });
};

//   Edit Task
export const editTask = (editedTask) => async (dispatch) => {
  try {
    const res = await fetch(`http://localhost:3000/tasks/${editedTask.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedTask),
    });

    const data = await res.json();

    dispatch({
      type: EDIT_TASK,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }

  dispatch({
    type: RESET_EDIT_STATE,
  });
};

// Delete Task
export const deleteTask = (id) => async (dispatch) => {
  try {
    const res = await fetch(`http://localhost:3000/tasks/${id}`, {
      method: "DELETE",
    });

    const data = await res.json();

    dispatch({
      type: DELETE_TASK,
      payload: id,
    });
  } catch (error) {
    console.log(error);
  }
};

// Clear All Tasks
export const clearTasks = () => async (dispatch) => {
  dispatch({
    type: "CLEAR_TASKS",
  });
};
