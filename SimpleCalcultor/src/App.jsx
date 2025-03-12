import { useState } from "react";

import "./App.css";
import Digits from "./components/Digits";
import DisplayCalculation from "./components/DisplayCalculation";
import Operators from "./components/Operators";

function App() {
  const [screenText,setScreenText] = useState([]);
  function numberFun(value){
    setScreenText([...screenText , value]);
  }
  function operatorFun(value){
    setScreenText([...screenText , value]);
  }
  function handleResult(){
    const expression = screenText.join("");
   
    const result = eval(expression);
    setScreenText([result]);
  }
  function handleReset(){
    setScreenText([]);
  }
  return (
    <>
      <div className="app calculator">
        <h4>Simple Calculator</h4>
        <DisplayCalculation screenText={screenText}/>
        <div className="keys-section">
          <Digits numberFun={numberFun} handleResult={handleResult} handleReset={handleReset}/>
          <Operators operatorFun={operatorFun}/>
        </div>
      </div>
    </>
  );
}

export default App;
