import React, { memo } from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todosData, setCount, count }) => {
  return (
    <div>
      {todosData.map((todo) => (
        <TodoItem
          key={todo.id}
          text={todo.text}
          setCount={setCount}
          count={count}
        />
      ))}
    </div>
  );
};

export default memo(TodoList);
