import { React, useState } from 'react';
import './App.css';
import Greeting from './components/Greeting';
import TodoItem from './components/TodoItem';
import TodoList from './components/TodoList';
import AddItem from './components/AddItem';

const App = () => {
  return (
    <main>
      <section id='greeting'>
        <Greeting />
      </section>
      <section id='todoList'>
        <div id='header'>
          <h2>Today's Todo's</h2>
          <span>Finished 0 tasks</span>
        </div>
        <TodoList />
        <AddItem />
      </section>
    </main>
  );
};

export default App;
