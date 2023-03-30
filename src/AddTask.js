import React from 'react'
import { useState } from 'react';

const AddTask = ({onAdd}) => {
const[text,setText]=useState('');
const[reminder,setReminder]=useState('');

const onSubmit=(e) =>{
    e.preventDefault()

    if(text===''){
        alert("please add task")
        return
    }

    onAdd({text,reminder})
    setText('')
    setReminder(false)
}

  return (
    <form className='form' onSubmit={onSubmit}>
    <div className='form-field'>
        <input type='text' placeholder='Add task name'
        value={text} onChange={(e) => setText(e.target.value)}/>
        </div>   
        <div className='form-field'>
                <label>Set Reminder</label>
                <input type='checkbox'
                checked={reminder}
                  value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}
                />
            </div> 
    </form>
  )
}

export default AddTask