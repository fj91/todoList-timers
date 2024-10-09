import React, { useState } from "react";

export default function TimerManager(props) {
  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(0);
  const [name, setName] = useState("");
  function handleChangeMins(e) {
    setMins(e.target.value);
  }
  function handleChangeSecs(e) {
    setSecs(e.target.value);
  }
  function handleChange(e) {
    setName(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (mins < 1 || secs < 1 || secs > 60 || mins === "" || secs === "" || name.trim().length === 0) {
      setMins(0);
      setSecs(0);
      setName("");
      return alert("Ingrese correctamente los valores");
    } else {
      props.addTimer(mins,secs,name);
      setMins(0);
      setSecs(0);
      setName("");
    }
  }
  return (
    <form className="timer_form">
      <label className="labelMin">Minutos:</label>
      <input
        type="number"
        min="0"
        value={mins}
        className="inputTimer"
        onChange={handleChangeMins}
      />
      <label className="labelSecs">Segundos:</label>
      <input
        type="number"
        min="0"
        max="60"
        value={secs}
        className="inputTimer"
        onChange={handleChangeSecs}
      />
      <input type="text" placeholder="Nombre..." className="inputTimerName" value={name}  onChange={handleChange}/>
      <button type="button" className="submitButton" onClick={handleSubmit}>
        Agregar
      </button>
    </form>
  );
}
