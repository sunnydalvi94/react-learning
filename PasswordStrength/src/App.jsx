import { useState } from "react";
import "./App.css";

function App() {
  const [strength, setStrength] = useState("");
  function checkStrength(pass) {
    if (/[^A-Za-z0-9]/.test(pass) && pass.length > 7) return "strong";
    else if (/[A-Z]/.test(pass) && /[a-z]/.test(pass) && /[0-9]/.test(pass)) return "medium";
  
    else return "weak";
  }
  function handleText(e) {
    const newPass = e.target.value;
    setStrength(checkStrength(newPass));
  }
  const strColor =
    strength == "medium" ? "orange" : strength == "strong" ? "green" : "red";
  return (
    <>
    <p htmlFor="">Please Enter the Password</p>
      <input type="text" onChange={(e) => handleText(e)} />
      <div
        className="strength-bar "
        style={{
          backgroundColor: strColor,
          height: "10px",
          margin: "10px 0px",
        }}
      ></div>
      <h4 className="strength-text" style={{ color: strColor }}>
        {strength ? strength : "Weak"}
      </h4>
    </>
  );
}

export default App;
