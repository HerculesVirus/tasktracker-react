import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header";
import Tasks from "../../components/Tasks";
import { task } from "../../components/Task";



const getLocalStorage = () => {
  let tasks = localStorage.getItem("myTasks");
  if (tasks) {
    return JSON.parse(localStorage.getItem("myTasks") || "");
  } else {
    return [];
  }
};

export default function ListOfTask() {
  const navigate = useNavigate();
  const [showAddTask, setShowAddTask] = useState<boolean>(false);
  const [tasks, setTasks] = useState<Array<task>>(getLocalStorage());

  // Delete task
  const deleteTask = (id: number) => {
    setTasks(tasks.filter((item :task ) => item.id !== id));
  };



  // Show Form
  const showTaskForm = () => {
    setShowAddTask(!showAddTask);
  };

  useEffect(() => {
    localStorage.setItem("myTasks", JSON.stringify(tasks));
  }, [tasks]);


  return (
    <div className="container">
      <Header title="List of Task" showAdd={true} onAdd={()=>{navigate("/create-task");}}  text={'Add'}  color={'green'} />
      {tasks.length > 0 ? (
        <Tasks
            tasks={tasks}
            onDelete={deleteTask} 
        />
      ) : (
        "No more tasks"
      )}
    </div>
  );
}