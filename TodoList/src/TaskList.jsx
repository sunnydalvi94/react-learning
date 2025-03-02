import React from "react";

const TaskList = ({taskList=[2,5]})=>{

// console.log(task)
    return(
        <>
         
             
            {taskList.map((item,index)=>(
                 <div className="tasklist">
                <p>{item}</p>
                </div>
            ))}
       
        </>
    )
}

export default TaskList;