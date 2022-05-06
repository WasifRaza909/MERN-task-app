import React from "react";
import TaskState from "./context/tasks/TaskState";
import { Counter } from "./features/counter/Counter";
import Home from "./pages/Home";

function App() {
  return (
    <TaskState>
      <div>
        <Home />
      </div>
    </TaskState>
  );
}

export default App;
