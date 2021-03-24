import React from 'react';
import todosData from '../todosData.json';

const TodoList = () => {
  const listOfTodos = todosData.map((todo, index) => (
    <div key={todo.id} todo={todo} />
  ));

  return <div>{listOfTodos}</div>;
};

export default TodoList;
