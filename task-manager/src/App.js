import './App.css';
import { TodoWrapper } from './components/TodoWrapper';
import {useState} from 'react';

document.title = "To Do Today!";
function App() {
  return (
      <TodoWrapper/>
  );
}


export default App;
