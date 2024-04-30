import './App.css';
import { TodoWrapper } from './components/TodoWrapper';
import {useState} from 'react';

document.title = "Task Manager";
function App() {
  return (
      <TodoWrapper/>
  );
}


export default App;
