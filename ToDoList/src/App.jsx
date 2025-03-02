import { useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import FilterTask from "./components/FilterTasks";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState([]);
  function addTask(text) {
    const newTask = { id: Date.now(), completed: false, text };
    setTasks([...tasks, newTask]);
  }
  function onToggleCompleteFn(id) {
    setTasks(
      tasks.map(
        (task) =>
          (task.id === id ? { ...task, completed: !task.completed } : task)
      )
    );
  }
  function filterValue(value){
      setFilter(value);
  }
  function filterList(){
   return tasks.filter((task)=>{
       if(filter ==='active') return !task.completed;
       if(filter==='completed') return task.completed;
       return true;
    })
  }

  return (
    <>
      <div className="app">
        <AddTask onAddTask={addTask} />
        <FilterTask filterValue={filterValue} />
        <TaskList tasksinfo={filterList()} onToggleComplete={onToggleCompleteFn} />
      </div>
    </>
  );
}

export default App;
