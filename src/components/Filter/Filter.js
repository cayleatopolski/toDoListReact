import React, { useState, useEffect } from 'react';
import styles from './filter.module.css';

const Filter = ({ tasks, setFilteredTasks }) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    setFilteredTasks(
      tasks.filter(({ text }) =>
        text.toLowerCase().includes(value.toLowerCase())
      )
    );
  }, [value]);

  return (
    <div>
      <input
        type='text'
        onChange={(event) => setValue(event.target.value)}
        value={value}
        placeholder='Filter by task name'
        className={styles.filterInput}
      />
    </div>
  );
};

export default Filter;
