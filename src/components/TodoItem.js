import React, { useState } from 'react';

const TodoItem = ({ text, setCount, count }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const handleClick = () => {
    setIsCompleted(!isCompleted);

    !isCompleted && setCount(count + 1);
    isCompleted && setCount(count - 1);
  };

  return (
    <div style={{ display: 'flex' }}>
      <p style={isCompleted ? { textDecoration: 'line-through' } : {}}>
        {text}
      </p>
      <button type='button' onClick={handleClick}>
        {isCompleted ? 'Undo' : 'Finish'}
      </button>
    </div>
  );
};

export default TodoItem;
