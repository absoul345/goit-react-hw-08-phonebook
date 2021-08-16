import React, { useEffect } from 'react';
import { authOperations } from './redux/auth';
import Appbar from './components/Appbar/AppBar';
import Container from './components/container/Container';
import Main from './components/main/Main';
import { useDispatch } from 'react-redux';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <Appbar />
      <Main />
    </Container>
  );
}
