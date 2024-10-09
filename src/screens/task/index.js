import "../../App.css"
import React, { useState } from "react";
import styled from "@emotion/styled";
import TaskList from "./components/TaskList";
import TaskManager from "./components/TaskManager";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center; 
  align-items: center;
  gap: 15px;
`;

const TasksListContainer = styled.div`
  border: 2px solid black;
  border-radius: 8px;
  float: left;
  min-height: 100px;
  width: 400px;  
`;

export function Tasks(props) {
  const [counter, setCounter] = useState(0);
  const [tasks, setTasks] = useState([]);
  const [check, setCheck] = useState(false);
  function handleCheck() {
    setCheck(current => !current);       
  }
  function taskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  }
  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }  
  const taskList = tasks.filter((task) => !check ? true : !task.completed).map((task) => (
    <TaskList
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      taskCompleted={taskCompleted}
      deleteTask={deleteTask} 
      style={{textDecoration: task.completed ? "line-through" : "none"}}     
    />
  ));
  
  function addTask(name) {
    const newTask = { id: counter, name, completed: false};
    setTasks([...tasks, newTask]);
    setCounter(counter + 1);
    //console.log(newTask.id)
    //console.log(counter);
  }
  return (
    <div className="App">
      <Container>
        <TaskManager addTask={addTask} />
        <input          
          type="checkbox"       
          checked={check}
          value={check}
          onChange={handleCheck}
        />
        <label>Mostrar faltante</label>
      </Container>
      <Container>
        <TasksListContainer>{taskList}</TasksListContainer>
      </Container>
    </div>
  );
}
