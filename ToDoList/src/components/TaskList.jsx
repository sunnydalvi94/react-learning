import { useState } from "react";
import TaskItem from "./TaskItem";

function TaskList({tasksinfo,onToggleComplete}) {
  return (
    <>
      <div className="tasklist">
        <h2>Courses</h2>
        <ul>
          {
          tasksinfo.map((task,index) => (
            <TaskItem  task={task} onToggleComplete={onToggleComplete}/>
          ))
          }
        
        </ul>
      </div>
    </>
  );
}

export default TaskList;
