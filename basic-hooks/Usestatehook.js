import React, { useState } from "react";

const Usestatehook = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={()=>{setCount(count+1)}}>count increase</button>
      <button onClick={()=>{ (count > 0 ) && setCount(count - 1)}}>count decrease</button>
      <h1>count is {count}</h1>
    </div>
  );
};

export default Usestatehook;
