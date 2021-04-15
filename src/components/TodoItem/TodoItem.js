import React, { useState } from 'react';
import styles from './todoitem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faUndo, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const TodoItem = ({
  text,
  setCount,
  count,
  todoIndex,
  filteredTasks,
  setFilteredTasks,
}) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const handleClick = () => {
    setIsCompleted(!isCompleted);

    !isCompleted && setCount(count + 1);
    isCompleted && setCount(count - 1);
  };

  const handleDelete = (todoIndex) => {
    let filteredDeletes = filteredTasks.filter(
      (checkedTask, index) => index !== todoIndex
    );
    setFilteredTasks(filteredDeletes);
  };

  return (
    <div className={styles.todoItem}>
      <p className={`${isCompleted ? styles.complete : styles.incomplete}`}>
        {text}
      </p>
      <div className='btnWrapper'>
        <button onClick={handleClick}>
          {isCompleted ? (
            <FontAwesomeIcon
              icon={faUndo}
              size='2x'
              className={styles.btnstyles}
            />
          ) : (
            <FontAwesomeIcon
              icon={faCheck}
              size='2x'
              className={styles.btnstyles}
            />
          )}
        </button>
        <button onClick={() => handleDelete(todoIndex)}>
          <FontAwesomeIcon
            icon={faTrashAlt}
            size='2x'
            className={styles.btnstyles}
          />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
