import React, { useState } from "react";
import styled from "@emotion/styled";

const TaskContainer = styled.div`
  width: fit-content;
  padding: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
const Task = styled.div`
  width: fit-content;
  padding: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const ButtonEdit = styled.button`
  //padding: 32px;
  background-color: lime;
  //font-size: 24px;
  border-radius: 4px;
  color: black;
  margin-right: 5px;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;
const ButtonDelete = styled.button`
  //padding: 32px;
  background-color: hotpink;
  //font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;

export default function TaskList(props) {  
  return (
    <TaskContainer>
      <Task>
        <input
          id={props.id}
          type="checkbox"
          defaultChecked={props.completed}
          onChange={() => props.taskCompleted(props.id)}        
        />
        <label style={props.style}>{props.name}</label>
      </Task>
      <Task>
        <ButtonEdit type="button">Editar</ButtonEdit>
        <ButtonDelete type="button" onClick={() => props.deleteTask(props.id)}>
          Eliminar
        </ButtonDelete>
      </Task>
    </TaskContainer>
  );
}
