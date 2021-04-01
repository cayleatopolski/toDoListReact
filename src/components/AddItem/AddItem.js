import React, { useState } from 'react';
import styles from './addItem.module.css';

const AddItem = () => {
  const [value, addValue] = useState('');
  return <input type='text' placeholder='Add a task'></input>;
};

export default AddItem;
