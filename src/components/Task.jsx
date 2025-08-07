import React from "react";
import { CgClose, CgInfo } from "react-icons/cg";
import "../styles/Task.css";
import { useNavigate } from "react-router-dom";

const Task = ({ task, handleTaskClick, handleRemoveTask }) => {
  const navigate = useNavigate();

  const handleTaskDetailsClick = () => {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task-details?${query.toString()}`);
  };

  return (
    <div
      className="task-container"
      style={
        task.completed
          ? {
              borderLeft: "6px solid chartreuse",
              textDecoration: "line-through",
            }
          : {}
      }
    >
      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>

      <div className="buttons-container">
        <button
          className="see-task-details-button"
          onClick={handleTaskDetailsClick}
        >
          <CgInfo />
        </button>
        <button
          className="remove-task-button"
          onClick={() => handleRemoveTask(task.id)}
        >
          <CgClose />
        </button>
      </div>
    </div>
    //<div className="task-container">{task.title}</div>
  );
};

export default Task;
