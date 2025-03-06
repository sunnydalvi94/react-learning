function TimerContrl({ isRunning,toggleTimer,resetTimer }) {
  return (
    <>
      <div className="button-area">
        <button onClick={toggleTimer}> {isRunning ? "Stop" : "Start"} </button> &nbsp;
        <button onClick={resetTimer}> Reset </button>
      </div>
    </>
  );
}

export default TimerContrl;
