function Digits({numberFun,handleResult,handleReset}) {
    function handleDigit(num){

     numberFun(num)
    }
  return (
    <>
      <div className="digit-bx">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num, index) => (
          <span key={index} onClick={()=>(handleDigit(num))} className="cal-keys">
            <span>{num}</span>
          </span>
        ))}
        <div onClick={()=>(handleReset())} className="cal-keys">
           Cl
        </div>
        <div onClick={()=>(handleResult())} className="cal-keys">
            =
        </div>
      </div>
    </>
  );
}

export default Digits;
