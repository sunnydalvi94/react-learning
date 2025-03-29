import { useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import FilterTask from "./components/FilterTask";
import TaskList from "./components/TaskList";

function App() {
  return (
    <>
      <div className="app">
        <h2>ToDo App</h2>
        <AddTask />
        <FilterTask />
        <TaskList />
      </div>
    </>
  );
}

export default App;
