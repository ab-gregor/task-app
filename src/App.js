import logo from './logo.svg';
import './App.css';
import Footer from './footer';
import Tasks from './Tasks';
import { useState } from 'react';
import Button from './Button';
import AddTask from './AddTask';
function App() {
  const[showAddTask,setShowAddTask]=useState(false);
const[tasks,setTask]=useState([
{
  id:1,
  text:'Excersice',
  reminder:true
},
{
  id:2,
  text:'football',
  reminder:true
},
{
  id:3,
  text:'Meeting',
  reminder:true
}
]
)
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



  return (
    <div className="App">
      <header className="App-header">
       <h1>Task Scheduler</h1> 

         
      <div className="task">
      <Button color="green" text="Add New" tcolor="black" onClick={() => setShowAddTask(!showAddTask)}></Button>
      {showAddTask && <AddTask/>}
      <Tasks tasks={tasks} onClick={deleteTask}/>
      
      </div>
      </header>
      <Footer thom='Copyright 2023'></Footer>
    </div>
  );
}

export default App;
