import { useState } from "react";

import "./App.css";
import TimerDisplay from "./components/TimerDisplay";
import TimerControl from "./components/TimerControl";
import { useEffect } from "react";

function App() {
  const [duration, setDuration] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  function handleDuration(e) {
    let value = e.target.value;
    if (value >= 0) {
      setTimeLeft(value);
      setDuration(value);
    }
  }
  function toggleTimer() {
    setIsRunning(!isRunning);
  }
  function resetTimer(){
    setIsRunning(!isRunning);
    setTimeLeft(0);
    setDuration(0);
  }
  useEffect(() => {
    let interval;
    if (timeLeft > 0 && isRunning) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }
    return () => clearTimeout(interval);
  }, [isRunning, timeLeft]);

  return (
    <>
      <div className="app">
        <h1>Count Down Timer</h1>
        <input value={duration} onChange={handleDuration} disabled={isRunning} type="number" />
        <TimerDisplay timeLeft={timeLeft} />
        <TimerControl isRunning={isRunning} toggleTimer={toggleTimer} resetTimer={resetTimer}/>
      </div>
    </>
  );
}

export default App;
