import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./features/tasks/taskSlice";
import authSlice from "./features/auth/authSlice";

const store = configureStore({
  reducer: {
    task: taskSlice,
    auth: authSlice,
  },
});

export default store;
