import { createContext, useState } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  function addTask(text) {
    const newTask = { id: Date.now(), completed: false, text };
    setTasks([...tasks, newTask]);
  }

  function filterList() {
    return tasks.filter((task) => {
      if (filter === "active") {
        return !task.completed;
      }
      if (filter === "completed") return task.completed;
      return true;
    });
  }

  function onToggleComplete(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  const filterValue = (value) => setFilter(value);

  const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));
  const updateTask = (id, text) => {
    console.log(id, text);
    setTasks( tasks.map((item) => (item.id === id ? { ...item, text: text } : item)));
  };
  return (
    <>
      <TaskContext.Provider
        value={{
          tasks,
          addTask,
          onToggleComplete,
          filterValue,
          filterList,
          deleteTask,
          updateTask,
        }}
      >
        {children}
      </TaskContext.Provider>
    </>
  );
};
