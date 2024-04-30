import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({ priority ,task, toggleComplete,deleteTodo, editTodo, priorityLevel}) => {
  const priorityColor = priorityLevel === "High"? "red" : priorityLevel === "Moderate"? "yellow" : "green";
  return (
    <div className = "Todo" style = {{borderBottom: `2px solid ${priorityColor}`  }}>
        
        <p onClick = {() => toggleComplete(task.id)} className =  {`${task.completed ? 'completed' : ""}`}>
          <span style = {{fontSize: "10px", position: "relative" ,color: "grey"}}>{priority}</span> {task.task}</p>
        <div style = {{float: 'right'}}>
            <FontAwesomeIcon icon = {faPenToSquare} onClick = {() => editTodo(task.id)}/>
            <FontAwesomeIcon icon = {faTrash} onClick = {() => deleteTodo(task.id)}/>
        </div>
    </div>
  )
}
