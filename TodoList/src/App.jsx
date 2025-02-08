import { useState } from 'react'

import './App.css'
import AddTask from './AddTask'
import AddFilter from './AddFilter'
import TaskList from './TaskList'

function App() {
  const [task,setTask] = useState([]);
  const addTask=(text)=>{
    setTask([...task,text]);
    
  }
  return (
    <>
     <h1>To-Do List</h1>
     <AddTask addTask={addTask} />
     {/* <h1>{addTask}</h1> */}
     <AddFilter/>
     <TaskList taskList={task}/>
    </>
  )
}

export default App
