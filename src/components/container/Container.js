import React from 'react';
import styles from './Container.module.css';

const Container = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default Container;
