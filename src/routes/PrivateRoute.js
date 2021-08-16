import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { authSelectors } from '../redux/auth';

export default function PrivateRoute({
  component: Component,
  isAuthenticated,
  redirectTo,
  children,
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getAuthenticated);

  return (
    <Route {...routeProps}>
      {isLoggedIn ? (
        <Component {...routeProps} />
      ) : (
        <Redirect to={redirectTo} />
      )}
    </Route>
  );
}
