import React from 'react';
import './App.css';
import Greeting from './components/Greeting/Greeting';
import TodoList from './components/TodoList/TodoList';
import todosData from './todosData.json';

const App = () => {
  return (
    <main>
      <Greeting />
      <div className='todoList'>
        <TodoList todosData={todosData} />
      </div>
    </main>
  );
};

export default App;
