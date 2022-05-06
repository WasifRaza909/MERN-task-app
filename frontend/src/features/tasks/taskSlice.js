import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import taskService from "./taskService";

const initialState = {
  tasks: [],
  editItem: {},
  editState: false,
};

// Get Tasks
export const getTasks = createAsyncThunk("tasks/getAll", async (thunkAPI) => {
  try {
    return await taskService.getTasks();
  } catch (error) {
    console.log(error);
  }
});

// Add Task
export const addTask = createAsyncThunk("tasks/add", async (text, thunkAPI) => {
  const newTask = {
    text,
  };

  try {
    return await taskService.addTask(newTask);
  } catch (error) {
    console.log(error);
  }
});

// Set Edit State
export const setEditState = createAsyncThunk("tasks/setEditState", (task) => {
  return task;
});

// Edit Task
export const editTask = createAsyncThunk("tasks/edit", async (editedTask) => {
  try {
    return await taskService.editTask(editedTask);
  } catch (error) {
    console.log(error);
  }
});

// Delete Task
export const deleteTask = createAsyncThunk(
  "tasks/delete",
  async (id, thunkAPI) => {
    try {
      return await taskService.deleteTask(id);
    } catch (error) {
      console.log(error);
    }
  }
);

// Clear All Tasks
export const clearTasks = createAsyncThunk("tasks/clearTasks", async () => {
  try {
    return await taskService.clearTasks();
  } catch (error) {
    console.log(error);
  }
});

export const taskSlice = createSlice({
  name: "tasks",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getTasks.fulfilled, (state, action) => {
        state.tasks = action.payload;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter((task) => task._id !== action.payload);
      })
      .addCase(clearTasks.fulfilled, (state) => {
        state.tasks = [];
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.tasks = [...state.tasks, action.payload];
      })
      .addCase(setEditState.fulfilled, (state, action) => {
        state.editItem = action.payload;
        state.editState = true;
      })
      .addCase(editTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.map((task) =>
          task._id === action.payload._id ? action.payload : task
        );
        state.editItem = {};
        state.editState = false;
      });
  },
});

export default taskSlice.reducer;
