import { FaTrash, FaEdit } from "react-icons/fa";

import { useDispatch } from "react-redux";

import { deleteTask, setEditState } from "../features/tasks/taskSlice";

function TodoListItem({ task }) {
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(deleteTask(task.id));
  };

  const editHandler = () => {
    dispatch(setEditState(task));
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
