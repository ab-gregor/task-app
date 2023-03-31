import logo from './logo.svg';
import './App.css';
import Footer from './footer';
import Tasks from './Tasks';
import { useEffect, useState } from 'react';
import Button from './Button';
import AddTask from './AddTask';
function App() {
const[showAddTask,setShowAddTask]=useState(false);
const[tasks,setTask]=useState([])

useEffect(()=>{
  const getNewTasks = async ()=>{
    const newTask = await fetchData()
    setTask(newTask)
  }
  getNewTasks()
})
  

const fetchData= async()=>{
  const res = await fetch('http://localhost:3000/tasks/');
  const data = await res.json()
  return data;
}
const deleteTask = (id)=>{
  setTask(tasks.filter((task) => task.id !== id))
}
const onTaskReminder = (id) => {
  setTask(
    tasks.map((task) => task.id === id ?{...task, reminder:!task.reminder}: task))

}

const addTask = (task) => {
   const id = Math.floor(Math.random()*10000+1);
   console.log(id);

   const newTask = { id, ...task}
   setTask([...tasks, newTask])

   
}

const ChangeView=() =>
{ {console.log("ffff")}
  setShowAddTask(!showAddTask)
  {console.log("ssss")}
}



  return (
    <div className="App">
      <div className='App-header'>
         
      <header >
      
       <h1>Task Scheduler</h1> 
       </header>
       </div>
      <div className="task">
      <Button color={showAddTask?"Red":"Lime"} text={showAddTask?"Hide":"Add"} tcolor="black" onClick={ChangeView}></Button>
      
      {showAddTask && <AddTask onAdd={addTask}/>}
      { tasks.length > 0 ?
      <Tasks tasks={tasks} onClick={deleteTask}/>
    :'No tasks Left'  
    }
      </div>
      
      <Footer thom='Copyright 2023'></Footer>
    </div>
  );
}

export default App;
