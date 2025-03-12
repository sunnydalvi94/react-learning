function DisplayCalculation({screenText}) {

    return ( 
        <>
        <h4 className="screen">{screenText.length >0 ? screenText : 0} </h4>
        </>
     );
}

export default DisplayCalculation;