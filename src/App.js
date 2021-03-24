import React, { useState } from 'react';
import './App.css';
import Greeting from './components/Greeting';
import TodoItem from './components/TodoItem';
import TodoList from './components/TodoList';
import AddItem from './components/AddItem';
import todosData from './todosData.json';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <main>
      <section id='greeting'>
        <Greeting />
      </section>
      <section id='todoList'>
        <div id='header'>
          <h2>Today's Todo's</h2>
          <span>Finished {count} tasks</span>
        </div>
        <TodoList todosData={todosData} setCount={setCount} count={count} />
        <AddItem />
      </section>
    </main>
  );
};

export default App;
