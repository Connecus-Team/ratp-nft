import React from 'react';
import {Switch, Route} from 'react-router-dom';
import routes from './routes';
import PublicRoute from './PublicRoute';
import CustomLoadable from './CustomLoadable';
import Error404Page from '../components/Error/Error404Page';

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
    <Route component = {Error404Page} />
  </Switch>
);

export default RoutesComponent;
