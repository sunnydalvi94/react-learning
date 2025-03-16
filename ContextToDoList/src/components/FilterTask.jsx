import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function FilterTask() {
  const {filterValue}=useContext(TaskContext);
    return (
      <>
        <div className="filterbtn">
          <button onClick={() => filterValue("all")}>All</button>
          <button onClick={() => filterValue("active")}>Active</button>
          <button onClick={() => filterValue("completed")}>Completed</button>
        </div>
      </>
    );
  }
  
  export default FilterTask;
  