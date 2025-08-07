import React, { useEffect, useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

import "./styles/App.css";

import Tasks from "./components/Tasks";
import Header from "./components/Header";
import AddTask from "./components/AddTask";

const App = () => {
  // let message = "Hello World!";
  const [tasks, setTasks] = useState([
    {
      id: uuidv4(),
      title: "Concluir o frontend",
      description:
        "Terminar de implementar o front end do To Do List, com informações de perfil e personalização",
      completed: false,
    },
    {
      id: uuidv4(),
      title: "Integrar com o backend",
      description:
        "Integrar o front da aplicação To Do List com o backend em Java Spring",
      completed: false,
    },
  ]);

  const hasFetched = useRef(false);

  useEffect(() => {
    const fetchTasks = async () => {
      if (hasFetched.current) return;

      hasFetched.current = true;

      const { data } = await axios.get(
        "https://jsonplaceholder.cypress.io/todos?_limit=2"
      );

      const formattedData = data.map((task) => ({
        id: task.id,
        title: task.title,
        description:
          "Tarefa importada da WebAPI Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores magni dolorem libero sequi expedita ex dignissimos, neque dolore saepe voluptatum.",
        completed: task.completed,
      }));
      setTasks((prevTasks) => [...prevTasks, ...formattedData]);
    };
    fetchTasks();
  }, []); //lista vazia para executar so qnd o componente for montado

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
        <Header>Minhas Tarefas</Header>
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
