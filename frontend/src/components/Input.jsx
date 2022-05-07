import { FaPlus, FaPencilAlt } from "react-icons/fa";
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { addTask, editTask } from "../features/tasks/taskSlice";
import { Link } from "react-router-dom";

function Input() {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const { editState, editItem } = useSelector((state) => state.task);

  useEffect(() => {
    setText(editState ? editItem.text : "");
  }, [editItem, editState]);

  const addTaskHandler = () => {
    dispatch(addTask(text));

    setText("");
  };

  const editTaskHandler = () => {
    const editedTask = {
      text,
      id: editItem._id,
    };

    dispatch(editTask(editedTask));
  };

  return (
    <div className="home-input">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
        name=""
        id=""
        placeholder="Add your new todo"
      />
      {!editState ? (
        <Link to="/" onClick={addTaskHandler}>
          <FaPlus />
        </Link>
      ) : (
        <Link to="/" onClick={editTaskHandler}>
          <FaPencilAlt />
        </Link>
      )}
    </div>
  );
}

export default Input;
