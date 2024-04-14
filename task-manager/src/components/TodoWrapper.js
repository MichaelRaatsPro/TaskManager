import React, {useEffect, useState} from 'react'
import { TodoForm } from './TodoForm'
import { Todo } from './Todo';
import {v4 as uuidv4} from 'uuid';
import { EditTodoForm } from './EditTodoForm';
uuidv4();

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo,priority) => {
        setTodos(todos => [...todos,{priority: priority, id: uuidv4(), task: todo, 
        completed: false, 
        isEditing: false}]);
        // console.log(todos);
    }

    const toggleComplete = id => {
      setTodos(todos.map(todo => todo.id === id? {...todo, completed:!todo.completed} : todo));
      
    }
    const deleteTodo = (id) => {
      setTodos(todos.filter((todo)=> todo.id !== id));
    }

    const editTodo = (id) => {
      setTodos(todos.map(todo => todo.id === id? {...todo, isEditing: !todo.isEditing} : todo))}

    const editTask = (task,id,priority) => {
      setTodos(todos.map(todo => todo.id === id? 
        {...todo, task,priority, isEditing: !todo.isEditing} : todo))
    }

    useEffect(() => {
      sortTodos();
    }, [todos]);

    const sortTodos = () => {
      // sort function
      console.log("sorting in progress...");
        const sortedTodos = [...todos];
        sortedTodos.sort((a,b) => a.priority - b.priority);
        if (todos.length > 1){
          setTodos(prevTodos => sortedTodos);
        }
  }

  return (
    <div className = 'TodoWrapper'>
      <h1 id = "mainTitle">Task Manager</h1>
     <TodoForm addTodo= {addTodo} />
     {todos.map((todo, index) => (
       todo.isEditing ? (
        <EditTodoForm editTodo = {editTask} task = {todo}/>
       ) : (
      <Todo task = {todo} key = {index} priority={todo.priority} toggleComplete={toggleComplete} deleteTodo =
      {deleteTodo} editTodo={editTodo} />  
       )
     ))}
    </div>
  )

}
