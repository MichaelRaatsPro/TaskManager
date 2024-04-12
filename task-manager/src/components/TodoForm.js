import React, {useState} from 'react'
import header from '../task manager heading.svg';

export const TodoForm = ({addTodo}) => {

    const [value,setValue] = useState("");
    const handleSubmit = e => {
        e.preventDefault();
        
        addTodo(value);
        setValue("");
    }

  return (
    <>
    <img src = {header} style = {{width: '420px'}} />
    <form className = "TodoForm" onSubmit = {handleSubmit}>
             
          <input type = "textfield" 
           className = "todo-input" placeholder= 'Write your tasks here... '
           value = {value}
           onChange = {(e) => setValue(e.target.value)}
           />
         <input type = "number" className = "priority-btn"/>
        <button type = "submit" className = "todo-btn">Add Task</button>
    </form>
    </>
  )
}
