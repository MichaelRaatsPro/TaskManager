import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {

    const [value,setValue] = useState("");
    const handleSubmit = e => {
        e.preventDefault();
        
        addTodo(value);
        setValue("");
    }

  return (
    <form className = "TodoForm" onSubmit = {handleSubmit}>
        
          <input type = "textfield" 
           className = "todo-input" placeholder= 'What is the task today? '
           value = {value}
           onChange = {(e) => setValue(e.target.value)}
           />
         <input type = "number" className = "priority-btn"/>
        <button type = "submit" className = "todo-btn">Add Task</button>
    </form>
  )
}
