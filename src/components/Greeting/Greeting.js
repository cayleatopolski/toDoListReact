import React from 'react';
import styles from './greeting.module.css';

const Greeting = () => {
  let myDate = new Date();
  let hours = myDate.getHours();
  let greeting = '';

  if (hours < 12) {
    greeting = 'Good Morning';
  } else if (hours >= 12 && hours <= 17) {
    greeting = 'Good Afternoon';
  } else if (hours >= 17 && hours <= 24) {
    greeting = 'Good Evening';
  } else {
    greeting = 'Hello There';
  }
  return (
    <section>
      <div>
        <h1 className={styles.greeting}>{`${greeting}`}</h1>
      </div>
    </section>
  );
};

export default Greeting;
