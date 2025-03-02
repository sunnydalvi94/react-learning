import React, { useEffect, useState } from "react";

const Useeffecthook = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    alert("in use effect.");
    if (count === 15) {
      setMessage("You have reached your limit.");
    }
  }, [count === 15]); // Dependency array depends only on `count === 15`
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click here</button>
      <h1>Count: {count}</h1>
      <h1>{message}</h1>
    </div>
  );
};

export default Useeffecthook;
