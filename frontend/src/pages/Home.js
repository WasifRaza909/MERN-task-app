import Input from "../components/Input";
import TodoList from "../components/TodoList";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { getTasks, clearTasks } from "../features/tasks/taskSlice";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { tasks } = useSelector((state) => state.task);

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user || !user.name) {
      navigate("/register");
    }

    dispatch(getTasks());
  }, [dispatch, user]);

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
            <Link to="/" onClick={() => dispatch(clearTasks())}>
              Clear All
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
