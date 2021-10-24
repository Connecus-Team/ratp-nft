import React from 'react';
import {Switch, Route} from 'react-router-dom';
import routes from './routes';
import PublicRoute from './PublicRoute';
import CustomLoadable from './CustomLoadable';

const RoutesComponent = () => (
  <Switch>
    {routes.publicRoutes.map((route) => (
      <PublicRoute
        key={route.path}
        exact
        path={route.path}
        component={CustomLoadable({loader: route.loader})}
      />
    ))}
    {routes.errorRoutes.map((route) => (
      <Route
        key={route.path}
        exact
        path={route.path}
        component={CustomLoadable({loader: route.loader})}
      />
    ))}
  </Switch>
);

export default RoutesComponent;
