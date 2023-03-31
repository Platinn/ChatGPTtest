import React from 'react';
//import styles from './Founders.module.css';

const Founders = () => {
  return (
    <div className={styles.foundersContainer}>
      <h3>Who We Are</h3>
      <div className={styles.founder}>
        <h4>Founder 1</h4>
        <p>Email: founder1@example.com</p>
        <p>LinkedIn: linkedin.com/founder1</p>
      </div>
      <div className={styles.founder}>
        <h4>Founder 2</h4>
        <p>Email: founder2@example.com</p>
        <p>LinkedIn: linkedin.com/founder2</p>
      </div>
    </div>
  );
};

export default Founders;
