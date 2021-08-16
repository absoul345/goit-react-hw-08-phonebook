import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { authSelectors } from '../redux/auth';

export default function PublicRoute({
  component: Component,
  isAuthenticated,
  redirectTo,
  key,
  children,
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getAuthenticated);

  return (
    <Route {...routeProps}>
      {isLoggedIn && routeProps.restricted ? (
        <Redirect to={redirectTo} key={key} />
      ) : (
        <Component {...routeProps} />
      )}
    </Route>
  );
}
