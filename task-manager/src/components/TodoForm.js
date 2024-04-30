import React, {useState} from 'react'
import header from '../task manager heading.svg';
import Alert from '@mui/material/Alert';


export const TodoForm = ({addTodo}) => {

    const [value,setValue] = useState("");
    const [priority, setPriority] = useState(1);
    const [priorityLevel, setPriorityLevel] = useState('Low');
    const [alertIsVisible, setAlertVisble] = useState(false); // State for alert visibility

    const handleSubmit = e => {
        e.preventDefault();
        
        if (value !== "" && priority !== undefined) {
          addTodo(value, priority, priorityLevel);
          setValue("");
          setPriority(1);
          setPriorityLevel('Low');
          setAlertVisble(false);
        }else{
          setAlertVisble(true);
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
           <select id="priorityLevel" name="priorityLevel" value= {priorityLevel} onChange = {(e) => setPriorityLevel(e.target.value)}>
              <option className= "High" value="High">High</option>
              <option className= "Moderate" value="Moderate">Moderate</option>
              <option className= "Low" value="Low">Low</option>
            </select>
         <input type = "number"
          className = "priority-btn"
           min = "1"
           value = {priority}
           onChange = {(e) => setPriority(parseInt(e.target.value))} />
        <button type = "submit" className = "todo-btn">Add Task</button>
        {alertIsVisible && <Alert variant="filled" severity="error" style = {{backgroundColor: "#4b42f5"}}>Please set name and priority for your task </Alert>}
    </form>
    </>
  )
}
