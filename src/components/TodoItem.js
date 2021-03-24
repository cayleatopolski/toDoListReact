import { React, useState } from 'react';
import todosData from '../todosData.json';

const TodoItem = (props) => {
  // const [todoList, setTodos] = useState(todosData);
  const [isCompleted, setIsCompleted] = useState(false);

  // const listOfTodos = todosData.map((todo, index) => (
  //   <div key={todo.id} todo={todo} />
  // ));

  return (
    <div>
      <label>
        <div
          style={isCompleted ? { textDecoration: 'line-through' } : {}}
        ></div>
        <input type='checkbox' name='item' checked='false'></input>
      </label>
      <button type='button'>Delete</button>
    </div>
  );
};

export default TodoItem;
