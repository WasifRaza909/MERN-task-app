import TodoListItem from "./TodoListItem";

import TaskContext from "../context/tasks/taskContext";
import { useContext } from "react";

function TodoList() {
  const taskContext = useContext(TaskContext);

  const { tasks } = taskContext;

  return (
    <>
      <div className="todolist">
        {tasks.map((task, index) => (
          <TodoListItem key={index} task={task} />
        ))}
      </div>
    </>
  );
}

export default TodoList;
