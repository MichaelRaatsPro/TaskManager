import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {

    const [priority, setPriority] = useState(1);
    const [priorityLevel, setPriorityLevel] = useState("Low");
    const [value,setValue] = useState(task.task);
    const handleSubmit = e => {
        e.preventDefault();
        
        editTodo(value, task.id, priority, priorityLevel);
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
             <select id="priorityLevel" name="priorityLevel" value= {priorityLevel} onChange = {(e) => setPriorityLevel(e.target.value)}>
              <option id= "High" value="High">High</option>
              <option id= "Moderate" value="Moderate">Moderate</option>
              <option id= "Low" value="Low">Low</option>
            </select>
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
