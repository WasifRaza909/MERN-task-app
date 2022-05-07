import Input from "../components/Input";
import TodoList from "../components/TodoList";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { getTasks, clearTasks } from "../features/tasks/taskSlice";

function Home() {
  const dispatch = useDispatch();

  const { tasks } = useSelector((state) => state.task);

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

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
            <a href="/" onClick={() => dispatch(clearTasks())}>
              Clear All
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
