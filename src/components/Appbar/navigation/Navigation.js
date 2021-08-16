import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../../redux/auth';
import styles from './Navigation.module.css';

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getAuthenticated);

  return (
    <nav>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <NavLink
            className={styles.navLink}
            activeClassName={styles.navItemActive}
            exact
            to="/"
          >
            Home
          </NavLink>
        </li>
        {isLoggedIn && (
          <li className={styles.navItem}>
            <NavLink
              className={styles.navLink}
              activeClassName={styles.navItemActive}
              exact
              to="/contacts"
            >
              Contacts
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}
