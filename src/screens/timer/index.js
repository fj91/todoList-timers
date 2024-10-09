import "../../App.css"
import React, { useState } from "react";
import TimerManager from "./components/TimerManager";
import Countdown  from "./components/Countdown"



export function Timer() {
  const [counter, setCounter] = useState(0);
  const [timers, setTimers] = useState([]);
  const timerList = timers.map((timer) => (
    <Countdown
      id={timer.id}
      mins={timer.mins}
      secs={timer.secs}
      name={timer.name}   
      key={timer.id}
    />
  ));
  function addTimer(mins,secs,name) {
    const newTimer = { id: counter, mins, secs, name};
    setTimers([...timers, newTimer]);
    setCounter(counter + 1);
    //console.log(newTask.id)
    //console.log(counter);
  }
  return (
    <div className="App_timer">
      <TimerManager addTimer={addTimer}/>
      <div className="div_timer_container">
           {timerList}
      </div>
    </div>
  );
}
