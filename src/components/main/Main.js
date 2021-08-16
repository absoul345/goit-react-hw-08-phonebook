import React, { Suspense } from 'react';
import { Switch } from 'react-router-dom';
import Container from '../container/Container';
import { mainRoutes } from '../../routes/mainRoutes';
import PrivateRoute from '../../routes/PrivateRoute';
import PublicRoute from '../../routes/PublicRoute';
import Loader from '../loader/Loader';

const Main = () => {
  return (
    <Container>
      <Suspense fallback={<Loader />}>
        <Switch>
          {mainRoutes.map(route =>
            route.isPrivate ? (
              <PrivateRoute {...route} key={route.path} />
            ) : (
              <PublicRoute {...route} key={route.path} />
            ),
          )}
        </Switch>
      </Suspense>
    </Container>
  );
};

export default Main;
