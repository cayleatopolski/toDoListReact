import React, { memo, useState } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import Filter from '../Filter/Filter';
import AddItem from '../AddItem/AddItem';
import styles from './todoList.module.css';

const TodoList = ({ todosData, setCount, count }) => {
  const [tasks, setTasks] = useState(todosData);
  const [filteredTasks, setFilteredTasks] = useState(tasks);

  return (
    <div>
      <div className='header'>
        <h2 className={styles.header}>Today's Todo's</h2>
        <div className={styles.subheaderWrapper}>
          <Filter tasks={tasks} setTasks={setTasks} />
          <p className={styles.count}>Finished {count} tasks</p>
        </div>
      </div>

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
      <AddItem />
    </div>
  );
};

export default memo(TodoList);
