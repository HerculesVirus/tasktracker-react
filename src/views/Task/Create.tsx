import { SetStateAction, useState } from "react";
import Header from "../../components/header";
import { useNavigate } from "react-router-dom";



const CreateTask = () => {
  const navigate = useNavigate();
  const [task, setTask] = useState("");
  const [error ,setError] = useState< string | null >(null);

  const getLocalStorage = () => {
    let tasks = localStorage.getItem("myTasks");
    if (tasks) {
      return JSON.parse(localStorage.getItem("myTasks") || "");
    } else {
      return [];
    }
  };
  const addTask = (taskName: string) => {
    
    const id = Math.floor(Math.random() * 10000 + 1);
    const newTask = {
      id: id,
      name: taskName,
      check: false
    };
    let tasks = getLocalStorage()
    tasks = [...tasks , newTask]
    localStorage.setItem('myTasks' , JSON.stringify(tasks))
    // setTasks([...tasks, newTask]);
  };
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if(task.trim()){
      addTask(task)
      navigate('/list-tasks')
    }
    else{
      //invalid input
      setError('Task name is required')
    }


    
    
  };
  const handleChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setError('')
    setTask(e.target.value)
  };

  return (
    <div className="container">
     <Header title="Add Task" showAdd={false} text={""} />   
      <form className="add-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label>Name</label>
          <input
            name="text"
            type="text"
            placeholder="Add Task"
            value={task}
            onChange={handleChange}
          />
        </div>
        {error ? <span className="text-danger">{error}</span>: ''}
        <input type="submit" value="Save Task" className="btn btn-block" />
      </form>
    </div>
  );
};

export default CreateTask;