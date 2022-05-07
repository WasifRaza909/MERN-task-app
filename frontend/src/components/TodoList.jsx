import TodoListItem from "./TodoListItem";

import { useSelector } from "react-redux";

function TodoList() {
  const { tasks } = useSelector((state) => state.task);

  return (
    <>
      <div className="todolist">
        {tasks.length > 0 &&
          tasks.map((task, index) => <TodoListItem key={index} task={task} />)}
      </div>
    </>
  );
}

export default TodoList;
