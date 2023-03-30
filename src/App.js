import logo from './logo.svg';
import './App.css';
import Footer from './footer';
import Tasks from './Tasks';
import { useState } from 'react';
import Button from './Button';
function App() {
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
const onDelete = (id)=>{
  setTask(tasks.filter((task) => task.id !== id))
}


  return (
    <div className="App">
      <header className="App-header">
       <h1>Task Scheduler</h1> 
         
      <div class="task">
      <Button color="green" text="Add New" tcolor="black"></Button>
      <Tasks tasks={tasks} onClick={onDelete}/>
      
      </div>
      </header>
      <Footer thom='Copyright 2023'></Footer>
    </div>
  );
}

export default App;
