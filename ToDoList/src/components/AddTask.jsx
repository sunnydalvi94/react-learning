import { useState } from "react";

function AddTask(props) {
  const [taskText, setTaskText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddTask(taskText);
    setTaskText(" ");
  }

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => {
            setTaskText(e.target.value);
          }} value={taskText}
          placeholder="Enter Task.."
        />{" "}
        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default AddTask;
