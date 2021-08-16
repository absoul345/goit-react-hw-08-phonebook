import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import Login from '../../components/login/Login';

export default function LoginPage() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = useCallback(e => {
    setEmail(e.target.value);
  }, []);

  const handlePasswordChange = useCallback(e => {
    setPassword(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      dispatch(authOperations.logIn({ email, password }));
      setEmail('');
      setPassword('');
    },
    [dispatch, email, password],
  );

  return (
    <>
      <Login
        email={email}
        password={password}
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        handleSubmit={handleSubmit}
      />
      ;
    </>
  );
}

// const mapDispatchToProps = { onLogin: authOperations.logIn };
