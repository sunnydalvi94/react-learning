import { useState,useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function AddTask() {
  const [taskText, setTaskText] = useState("");
  const {addTask} = useContext(TaskContext)
  function handleSubmit(e) {
    e.preventDefault();
    addTask(taskText);
    setTaskText(" ");
  }

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => {
            setTaskText(e.target.value);
          }}
          value={taskText}
          placeholder="Enter Task.."
        />{" "}
        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default AddTask;
