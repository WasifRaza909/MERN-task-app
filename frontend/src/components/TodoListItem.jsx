import { FaTrash, FaEdit } from "react-icons/fa";

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { deleteTask, setEditState } from "../features/tasks/taskSlice";

function TodoListItem({ task }) {
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(deleteTask(task._id));
  };

  const editHandler = () => {
    dispatch(setEditState(task));
  };

  return (
    <div className="todolist-item">
      <div className="todolist-item-flex">
        <p className="text">{task.text}</p>
        <div>
          <Link to="/" onClick={editHandler} className="btn-edit">
            <FaEdit />
          </Link>
          <Link to="/" onClick={deleteHandler} className="btn-del">
            <FaTrash />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TodoListItem;
