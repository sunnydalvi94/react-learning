function TimerDisplay({timeLeft}) {
   function formatTime(second){
    const min = Math.floor( second/60 );
    const sec = Math.floor(second%60);
    return `${min} Min and ${sec}Sec `;
   }

    return ( 
        <>
        <h4>{formatTime(timeLeft)}</h4>
        </>
     );
}

export default TimerDisplay;