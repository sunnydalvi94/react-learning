function Operators({operatorFun}) {
    function handleOperator(ope){
        operatorFun(ope)
    }
  return (
    <>
      <div className="operator-bx">
        {['+',"-","/","*"].map((ope, index) => (
          <span onClick={()=>(handleOperator(ope))}  key={index} className="cal-keys">
            <span>{ope}</span>
          </span>
        ))}
        
      </div>
    </>
  );
}

export default Operators;
