import React from 'react';
import styles from './Login.module.css';

const Login = ({
  email,
  password,
  handleEmailChange,
  handlePasswordChange,
  handleSubmit,
}) => {
  return (
    <div className={styles.loginContainer}>
      <h1 className={styles.loginHeader}>Login Page</h1>
      <form
        className={styles.loginForm}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <label className={styles.loginLable}>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          ></input>
        </label>
        <label className={styles.loginLable}>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          ></input>
        </label>
        <button className={styles.loginBtn} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
