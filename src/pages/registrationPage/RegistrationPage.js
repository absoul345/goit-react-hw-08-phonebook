import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import Registration from '../../components/registration/Registration';
import { authOperations } from '../../redux/auth';

export default function RegistrationPage() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = useCallback(e => {
    setName(e.target.value);
  }, []);

  const handleEmailChange = useCallback(e => {
    setEmail(e.target.value);
  }, []);

  const handlePasswordChange = useCallback(e => {
    setPassword(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      dispatch(authOperations.register({ name, email, password }));
      setPassword('');
      setEmail('');
    },
    [dispatch, email, name, password],
  );

  return (
    <>
      <Registration
        name={name}
        email={email}
        password={password}
        handleSubmit={handleSubmit}
        handleNameChange={handleNameChange}
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
      />
    </>
  );
}
