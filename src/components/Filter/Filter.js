import React, { useState, useEffect } from 'react';
import styles from './filter.module.css';

const Filter = ({ tasks, setTasks }) => {
  const [value, setValue] = useState('');
  const [filteredTasks, setFilteredTasks] = useState(tasks);

  useEffect(() => {
    const filterResults = tasks.filter(({ text }) =>
      text.toLowerCase().includes(value.toLowerCase())
    );
    setTasks(filterResults);
  }, [value]);
  //   filter: function(itemElem) {
  //     return qsRegex ? itemElem.textContent.indexOf(qsRegex) !== -1 : true;
  // }
  // var quicksearch = document.querySelector('input[type="text"]');
  // quicksearch.addEventListener('input', function() {
  //      // match items by first letter only
  //      qsRegex = quicksearch.value; // Changed here
  //      iso.arrange();
  // });

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
