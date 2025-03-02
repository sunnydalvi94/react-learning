import React, { useEffect, useState } from "react";

function useLocalStorage(key, iniValue) {
  const [value, setValue] = useState(() => {
    const savedValue = localStorage.getItem(key);

    return savedValue ? savedValue : iniValue;
  });

 const updatelocalstoragevalue =()=>{
  localStorage.setItem(key, value);
  const savedValue =  localStorage.getItem(key);
  console.log("local storage value2 is:", savedValue);
 }
 
  useEffect(() => {
    // localStorage.setItem(key, value);
    // const savedValue =  localStorage.getItem(key);
    // console.log("local storage value2 is:", savedValue);
    updatelocalstoragevalue();
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
