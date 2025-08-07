import React, { useState } from "react";
import "./styles/App.css";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";

const App = () => {
  // let message = "Hello World!";
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Concluir o frontend",
      description:
        "Terminar de implementar o front end do To Do List, com informações de perfil e personalização",
      completed: false,
    },
    {
      id: 2,
      title: "Integrar com o backend",
      description:
        "Integrar o front da aplicação To Do List com o backend em Java Spring",
      completed: false,
    },
  ]);

  const handleTaskAddition = (taskTitle) => {
    const newTask = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];
    setTasks(newTask);
  };

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (taskId === task.id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTasks);
  };

  const handleRemoveTask = (taskId) => {
    const newTasks = tasks.filter((task) => taskId !== task.id);
    setTasks(newTasks);
  };

  return (
    <>
      <div className="container">
        <Header />
        <AddTask handleTaskAddition={handleTaskAddition} />
        <Tasks
          tasks={tasks}
          handleTaskClick={handleTaskClick}
          handleRemoveTask={handleRemoveTask}
        />
      </div>
    </>
  );
};

export default App;
