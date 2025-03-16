import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskItem({ task }) {
  const [editFlag, setEditFlag] = useState(false);
  const [editText, setEditText] = useState(task.text);
  const { onToggleComplete, deleteTask, updateTask } = useContext(TaskContext);

  function editTask(id) {
    if (!editFlag) {
      setEditFlag(!editFlag);
    } else {
      updateTask(id, editText);
      setEditFlag(!editFlag);
    }
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <li
          style={{ textDecoration: task.completed ? "line-through" : "none" }}
          onClick={() => onToggleComplete(task.id)}
        >
          <span hidden={editFlag}>{task.text}</span>
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            type="text"
            hidden={!editFlag}
          />
        </li>
        <div style={{ display: "flex" }}>
          <button onClick={() => editTask(task.id)}>
            {!editFlag ? "Edit" : "Update"}
          </button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
      </div>
    </>
  );
}

export default TaskItem;
