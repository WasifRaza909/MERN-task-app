import { useReducer } from "react";
import { ADD_TASK, DELETE_TASK, GET_TASKS } from "../types";
import TaskContext from "./taskContext";
import TaskReducer from "./taskReducer";

const TaskState = ({ children }) => {
  const initialState = {
    tasks: [],
    editItem: {},
    editState: false,
  };

  const [state, dispatch] = useReducer(TaskReducer, initialState);

  // Get Tasks
  const getTasks = async () => {
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
  const addTask = async (text) => {
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

  const deleteTask = async (id) => {
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
  const clearTasks = async () => {
    dispatch({
      type: "CLEAR_TASKS",
    });
  };

  // Edit Task
  const editTask = (task) => {
    dispatch({
      type: "EDIT_TASK",
      payload: task,
    });
  };

  const setStateTasks = async (editedTask) => {
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
        type: "SET_TASKS",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }

    dispatch({
      type: "RESET_EDIT_STATES",
    });
  };

  return (
    <TaskContext.Provider
      value={{
        getTasks,
        addTask,
        deleteTask,
        clearTasks,
        editTask,
        setStateTasks,
        editItem: state.editItem,
        editState: state.editState,
        tasks: state.tasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskState;
