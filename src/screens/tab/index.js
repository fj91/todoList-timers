import React, { useState } from "react";
import styled from "@emotion/styled";
import {Tasks} from "../task";
import {Timer} from "../timer";

const TabsContainer = styled.div`
  width: 80%;
  height: auto;
  min-height: 400px;
  margin: 3.5rem auto 1.5rem;
  padding: 2rem 1rem;
  color: black;
  border-radius: 2rem;
  @media (max-width: 769px) {
    padding: 2rem 0;
  }
`;

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState("t1"); 
  const handleT1 = () => {
    setActiveTab("t1");
  };
  const handleT2 = () => {
    setActiveTab("t2");
  };
  return (
    <TabsContainer>     
      <ul className="nav">
        <li className={activeTab === "t1" ? "active" : ""} onClick={handleT1}>
          Lista de tareas
        </li>
        <li className={activeTab === "t2" ? "active" : ""} onClick={handleT2}>
          Temporizadores
        </li>
      </ul>
      <div>
        {activeTab === "t1" ? <Tasks /> : <Timer />}
      </div>
    </TabsContainer>
  );
};

