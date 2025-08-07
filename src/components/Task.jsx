import React from "react";
import { CgClose } from "react-icons/cg";
import "../styles/Task.css";

const Task = ({ task, handleTaskClick, handleRemoveTask }) => {
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
