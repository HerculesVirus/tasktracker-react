import React, { useState , useEffect} from "react";
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

const BulkDelete = () => {
  const [tasks, setTasks] = useState(getLocalStorage());

  const handleCheckBox = (id: number , status: boolean)=>{
    console.log("id: ",id , " status: ",status)

    const updatedTasks = tasks.map((item : task )=> {
        if (item.id === id) { // update the check property of task with id 2
          return { ...item, check: status };
        } else {
          return item;
        }
      });
    setTasks(updatedTasks)
  }

  useEffect(() => {
    localStorage.setItem("myTasks", JSON.stringify(tasks) || "");
  }, [tasks]);

  const handleBulkDelete = () :void => {
    let remainingTask = tasks.filter( (item: task)  =>{ return item.check !== true})
    setTasks(remainingTask)
    localStorage.setItem("myTasks" , JSON.stringify(remainingTask))
  }
  return (
    <>
      <div className="container">
        {/* {taskCheck()} */}
        <Header title="Delete Tasks" showAdd={true} onAdd={()=>{handleBulkDelete()}}  text={'Delete'}  color={'red'}  />

        {tasks.length > 0 ? (
          <Tasks
            tasks={tasks}
            onCheck={handleCheckBox} 
          />
        ) : (
          "No more tasks"
        )}
      </div>
    </>
  );
};
export default BulkDelete;