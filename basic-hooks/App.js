import React from "react";

import useLocalStorage from "./useLocalStorage";
import "./App.css";

export function App() {
  const [name, setName] = useLocalStorage("name", "dark");
  const toggleTheme = () => {
    setName(name === "light" ? "dark" : "light");
  };
  return (
    <div className={name}>
      <h1>All Examples</h1>
      <h1>Hello, {name}!</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
