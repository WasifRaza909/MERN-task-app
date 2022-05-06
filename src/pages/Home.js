import Input from "../components/Input";
import TodoList from "../components/TodoList";
import { useState, useEffect, useContext } from "react";

import TaskContext from "../context/tasks/taskContext";

function Home() {
  const taskContext = useContext(TaskContext);

  const { getTasks, clearTasks, tasks } = taskContext;

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="home">
      <div className="home-flex">
        <div className="home-flex-content">
          <h1>Task App</h1>
          <div>
            <Input />
            <div>
              <TodoList />
            </div>
          </div>
          <div className="todolist-pending">
            <p>You have {tasks.length} pending tasks</p>
            <a onClick={clearTasks}>Clear All</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
