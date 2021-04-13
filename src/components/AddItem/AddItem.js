import React, { useState } from 'react';
import styles from './addItem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const AddItem = ({ filteredTasks, setFilteredTasks }) => {
  const [value, setValue] = useState('');

  const addTask = () => {
    setFilteredTasks([...filteredTasks, { id: value, text: value }]);
    setValue('');
  };

  return (
    <div className={styles.addInputWrapper}>
      <input
        className={styles.addInput}
        onChange={(event) => setValue(event.target.value)}
        value={value}
        placeholder='Add a task'
      ></input>
      <FontAwesomeIcon
        icon={faPlusCircle}
        size='2x'
        className={styles.btnstyles}
        onClick={addTask}
      />
    </div>
  );
};

export default AddItem;
