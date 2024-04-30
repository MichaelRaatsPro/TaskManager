import React, {useEffect, useState} from 'react'
import Cookies from 'js-cookie';
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { TodoForm } from './TodoForm'
import { Todo } from './Todo';
import {v4 as uuidv4} from 'uuid';
import { EditTodoForm } from './EditTodoForm';
uuidv4();

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);
    const [deleting,setDeleting] = useState(false);
    const [sorting,setSorting] = useState(false);
    const addTodo = (todo,priority, priorityLevel) => {
        setTodos(todos => [...todos,{priority: priority, priorityLevel: priorityLevel, id: uuidv4(), task: todo, 
        completed: false, 
        isEditing: false}]);
        // console.log(todos);
    }

    const toggleComplete = id => {
      setTodos(todos.map(todo => todo.id === id? {...todo, completed:!todo.completed} : todo));
      
    }
    const deleteTodo = (id) => {
      setDeleting(true);
      setTodos(todos.filter((todo)=> todo.id !== id));
      setDeleting(false);
    }

    const editTodo = (id) => {
      setTodos(todos.map(todo => todo.id === id? {...todo, isEditing: !todo.isEditing} : todo))}

    const editTask = (task,id,priority,priorityLevel) => {
      setTodos(todos.map(todo => todo.id === id? 
        {...todo, task,priority,priorityLevel,isEditing: !todo.isEditing} : todo))
    }

    useEffect(() => {
      // console.log("useEffect triggered");
      setSorting(true);
      // console.log((!deleting && sorting))
      if (!deleting && sorting){
        sortTodos();
        setSorting(false);
      }
    }, [todos]);

    const sortTodos = () => {
      // sort function
      // console.log("sorting in progress...");
        const sortedTodos = [...todos];
        sortedTodos.sort((a,b) => a.priority - b.priority);
        if (todos.length > 0){
          setTodos( sortedTodos);
        }
  }

  useEffect(() => {
    const storedTasks = Cookies.get('todos');
    if (storedTasks) {
        setTodos(JSON.parse(storedTasks));
    }
}, []);

  useEffect(() => {
    if (todos.length > 0) {
      console.log("Current todos: ", todos);
      const expirationDate = new Date();
      expirationDate.setFullYear(expirationDate.getFullYear() + 10); // 10 years from now
      Cookies.set('todos', JSON.stringify(todos), { expires: expirationDate });
    }
  }, [todos]);


  return (
    <div className = 'TodoWrapper'>
      <h1 id = "mainTitle">Task Manager</h1>
     <TodoForm addTodo= {addTodo} />
     {todos.map((todo, index) => (
       todo.isEditing ? (
        <EditTodoForm editTodo = {editTask} task = {todo}/>
       ) : (
      <Todo task = {todo} key = {index} priorityLevel= {todo.priorityLevel} priority={todo.priority} toggleComplete={toggleComplete} deleteTodo =
      {deleteTodo} editTodo={editTodo} />  
       )
     ))}
    </div>
  )

}
