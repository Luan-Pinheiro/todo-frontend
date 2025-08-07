import React from "react";
import Button from "./Button";
import Header from "./Header";
import { useNavigate, useSearchParams } from "react-router-dom";
import "../styles/TaskDetails.css";

const TaskDetails = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const title = params.get("title");
  const description = params.get("description");

  return (
    <>
      <div className="container">
        <Header>{title}</Header>
        <div className="task-details-container">
          <h2>Descrição</h2>
          <p>{description}</p>
        </div>
        <div className="back-button-container">
          <Button onClick={() => navigate(-1)}>Voltar</Button>
        </div>
      </div>
    </>
  );
};

export default TaskDetails;
