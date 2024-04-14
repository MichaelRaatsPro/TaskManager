import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {

    const [priority, setPriority] = useState(1);
    const [value,setValue] = useState(task.task);
    const handleSubmit = e => {
        e.preventDefault();
        
        editTodo(value, task.id, priority);
        setValue("");
    }

  return (
    <>
    <form className = "TodoForm" onSubmit = {handleSubmit}>
          <input type = "textfield" 
           className = "todo-input" placeholder= 'Update task'
           value = {value}
           onChange = {(e) => setValue(e.target.value)}
           />
         <input type = "number"
          className = "priority-btn"
           min = "1"
           value = {priority}
           onChange = {(e) => setPriority(parseInt(e.target.value))} />
        <button type = "submit" className = "todo-btn">Update Task</button>
    </form>
    </>
  )
}
