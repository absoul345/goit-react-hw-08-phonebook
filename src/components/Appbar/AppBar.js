import React from 'react';
import { useSelector } from 'react-redux';
import Navigation from './navigation/Navigation';
import UserMenu from './userMenu/UserMenu';
import AuthNav from './authNav/AuthNav';
import styles from './AppBar.module.css';
import { authSelectors } from '../../redux/auth';

export default function Appbar() {
  const isLoggedIn = useSelector(authSelectors.getAuthenticated);

  return (
    <header className={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
