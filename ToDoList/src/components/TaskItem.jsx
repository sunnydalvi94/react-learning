function TaskItem({ task,onToggleComplete }) {
  return (
    <>
      <li style={{textDecoration:task.completed ? 'line-through' : 'none'}} onClick={()=>onToggleComplete(task.id)}>
        <span>{task.text}</span>
      </li>
    </>
  );
}

export default TaskItem;
