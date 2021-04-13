import React, { memo, useState } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import Filter from '../Filter/Filter';
import AddItem from '../AddItem/AddItem';
import styles from './todoList.module.css';

const TodoList = ({ todosData }) => {
  const [tasks, setTasks] = useState(todosData);
  const [count, setCount] = useState(0);
  // const [filteredTasks, setFilteredTasks] = useState(tasks);

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
        {tasks.map((todo, index) => (
          <TodoItem
            key={todo.text}
            todoIndex={index}
            text={todo.text}
            setCount={setCount}
            count={count}
            tasks={tasks}
            setTasks={setTasks}
          />
        ))}
      </div>
      <AddItem tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default memo(TodoList);
