import React from 'react';
import styles from './Registration.module.css';

const Registration = ({
  name,
  email,
  password,
  handleSubmit,
  handleNameChange,
  handleEmailChange,
  handlePasswordChange,
}) => {
  return (
    <div className={styles.registerContainer}>
      <h1 className={styles.registerHeader}>Registration Page</h1>
      <form
        className={styles.registerForm}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <label className={styles.registerLable}>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleNameChange}
          ></input>
        </label>
        <label className={styles.registerLable}>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          ></input>
        </label>
        <label className={styles.registerLable}>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          ></input>
        </label>
        <button className={styles.registerBtn} type="submit">
          Registration
        </button>
      </form>
    </div>
  );
};

export default Registration;
