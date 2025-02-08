import React, { useState } from "react";

const AddTask = ({addTask}) => {
    const [text, setText] = useState()
    const handleText = (e) => {
        e.preventDefault();
        // console.log(text);
        addTask(text);
        setText(" ");
    }
    return (
        <>
            <form action="" onSubmit={handleText}>
                <input type="text" onChange={(e) => { setText(e.target.value) }} /> <button>Add</button>
            </form>
            <h1></h1>
        </>
    );
}

export default AddTask;
