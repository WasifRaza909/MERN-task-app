import { FaPlus, FaPencilAlt } from "react-icons/fa";
import { useEffect, useState, useContext } from "react";
import TaskContext from "../context/tasks/taskContext";

function Input({ setEditItem }) {
  const [text, setText] = useState("");

  const taskContext = useContext(TaskContext);

  const { addTask, setStateTasks, editState, editItem } = taskContext;

  useEffect(() => {
    setText(editState ? editItem.text : "");
  }, [editItem, editState]);

  const addTaskHandler = () => {
    addTask(text);

    setText("");
  };

  const editTaskHandler = () => {
    const editedTask = {
      text,
      id: editItem.id,
    };

    setStateTasks(editedTask);
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
        <a onClick={addTaskHandler}>
          <FaPlus />
        </a>
      ) : (
        <a onClick={editTaskHandler}>
          <FaPencilAlt />
        </a>
      )}
    </div>
  );
}

export default Input;
