import React, { useRef, useEffect, useState } from "react";

export default function Countdown(props) {     
  const [num, setNum] = useState((parseInt(props.mins) * 60) + parseInt(props.secs) ); 
  const [pause, setPause] = useState(false);
  const clear=()=>{
    window.clearInterval(intervalRef.current)
  }
  const secondsToDisplay = num % 60;
  const minutesRemaining = (num - secondsToDisplay) / 60;
  const minutesToDisplay = minutesRemaining % 60;
  let intervalRef = useRef();
  
  const decreaseNum = () => setNum((prev) => prev - 1);

  useEffect(() => {
    intervalRef.current = setInterval(decreaseNum, 1000);
    if(num===0){
        clear()
      }
    return () => clearInterval(intervalRef.current);
  }, [num]); 


  
  const handleClick = () => {
    if (!pause) {
      clearInterval(intervalRef.current);
    } else {
      intervalRef.current = setInterval(decreaseNum, 1000);
    }
    setPause((prev) => !prev);
  };
  
  return (
    <div className="timer"> 
      <label className="timerLabel">{props.name}</label> 
      <div>{minutesToDisplay < 10 ? "0"+minutesToDisplay : minutesToDisplay}:{secondsToDisplay < 10 ? "0"+secondsToDisplay : secondsToDisplay}</div>
      <button  onClick={handleClick} className="submitButton">{pause ? "Play" : "Pause"}</button>
    </div>
  );
}