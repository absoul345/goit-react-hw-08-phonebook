import React from 'react';
import styles from './Home.module.css';

const Home = ({ title = 'WELCOME HOME!' }) => {
  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.header}>{title}</h1>
    </div>
  );
};

export default Home;
