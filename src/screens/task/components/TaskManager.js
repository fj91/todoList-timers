import React, { useState } from "react";
import styled from "@emotion/styled";

const Container = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 15px;
  margin: 25px;
`;

export default function TaskManager(props) {
  const [name, setName] = useState("");
  /* const [check, setCheck] = useState(false); 
  function handleCheck(e) {
    setCheck(!check);   
    console.log({check})  
  } */
  function handleChange(e) {
    setName(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (name.trim().length === 0) {
      setName("");
      return alert("Ingrese texto para crear una tarea nueva....");
    } else {
      props.addTask(name);
      setName("");
    }
  }
  return (
    <Container onSubmit={handleSubmit}>
      <label className="labelNewTask">Nueva tarea:</label>
      <input
        type="text"
        className="inputNewTask"
        placeholder="Ingresar Nueva..."
        value={name}
        onChange={handleChange}
      />
    </Container>
  );
}
