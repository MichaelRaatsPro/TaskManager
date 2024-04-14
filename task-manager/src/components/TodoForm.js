import React, {useState} from 'react'
import header from '../task manager heading.svg';
import Alert from '@mui/material/Alert';


export const TodoForm = ({addTodo}) => {

    const [value,setValue] = useState("");
    const [priority, setPriority] = useState(1);

    const handleSubmit = e => {
        e.preventDefault();
        
        if (value !== ""){
          addTodo(value, priority);
          setValue("");
          setPriority(1);
        }else{
          <Alert variant="filled" severity="error">bruh</Alert>
        }

    }

  return (
    <>
    <img src = {header} style = {{width: '420px'}} />
    <form className = "TodoForm" onSubmit = {handleSubmit}>
             
          <input type = "textfield" 
           className = "todo-input" 
           placeholder= 'Write your tasks here... '
           value = {value}
           onChange = {(e) => setValue(e.target.value)}
           />
         <input type = "number"
          className = "priority-btn"
           min = "1"
           value = {priority}
           onChange = {(e) => setPriority(parseInt(e.target.value))} />
        <button type = "submit" className = "todo-btn">Add Task</button>
    </form>
    </>
  )
}
