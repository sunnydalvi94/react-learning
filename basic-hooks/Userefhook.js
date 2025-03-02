import React, { useRef, useEffect, useState } from "react";

function Userefhook() {
  const inputRef = useRef(null);
  const [intvalue,setIntvalue] =useState(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" />
      <p>{intvalue}</p>
    </div>
  );
}

export default Userefhook;
