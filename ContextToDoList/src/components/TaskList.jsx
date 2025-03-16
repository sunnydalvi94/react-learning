import { useContext } from "react";
import TaskItem from "./TaskItem";
import { TaskContext } from "../context/TaskContext";
function TaskList({}) {
  const { filterList, deleteTask } = useContext(TaskContext);
  let list = filterList();
  console.log(list);
  return (
    <>
      <div className="tasklist">
        <ul>
          {list.map((task, index) => (
            <TaskItem key={index} task={task} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default TaskList;
