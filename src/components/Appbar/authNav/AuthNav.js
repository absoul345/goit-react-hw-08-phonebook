import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div className={styles.container}>
      <NavLink
        to="/registration"
        exact
        className={styles.authLink}
        activeClassName={styles.authLinkActive}
      >
        Registration
      </NavLink>
      <NavLink
        to="/login"
        exact
        className={styles.authLink}
        activeClassName={styles.authLinkActive}
      >
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;
