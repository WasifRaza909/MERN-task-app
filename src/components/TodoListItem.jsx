import { FaTrash, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import TaskContext from "../context/tasks/taskContext";

function TodoListItem({ task }) {
  const taskContext = useContext(TaskContext);

  const { deleteTask, editTask } = taskContext;

  const deleteHandler = () => {
    deleteTask(task.id);
  };

  const editHandler = () => {
    editTask(task);
  };

  return (
    <div className="todolist-item">
      <div className="todolist-item-flex">
        <p className="text">{task.text}</p>
        <div>
          <a onClick={editHandler} className="btn-edit">
            <FaEdit />
          </a>
          <a onClick={deleteHandler} className="btn-del">
            <FaTrash />
          </a>
        </div>
      </div>
    </div>
  );
}

export default TodoListItem;
