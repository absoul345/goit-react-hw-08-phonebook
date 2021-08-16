import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../../redux/auth';
import styles from './UserMenu.module.css';
import userAvatar from './thief.png';

export default function UserMenu() {
  const dispatch = useDispatch();

  const email = useSelector(authSelectors.getUserEmail);

  const onLogOut = useCallback(() => {
    dispatch(authOperations.logOut());
  }, [dispatch]);

  return (
    <div className={styles.userContainer}>
      <img src={userAvatar} alt="" width="30" className={styles.userAvatar} />
      <span className={styles.loginText}>Welcome,{email}</span>
      <button className={styles.userLogoutBtn} type="button" onClick={onLogOut}>
        Logout
      </button>
    </div>
  );
}
