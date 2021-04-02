import React, { useState } from 'react';
import './App.css';
import Greeting from './components/Greeting/Greeting';
import TodoList from './components/TodoList/TodoList';
import todosData from './todosData.json';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <main>
      <Greeting />
      <div className='todoList'>
        <TodoList todosData={todosData} setCount={setCount} count={count} />
      </div>
    </main>
  );
};

export default App;
