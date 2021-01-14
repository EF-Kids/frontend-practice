import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import routes from './routes';

const RouterView = () => (
  <Switch>
    {routes.map((route) => (
      <Route
        key={route.path}
        path={route.path}
        exact={true}
        render={(props) => <route.component {...props} />}
      />
    ))}
    <Redirect key={'/'} to={'/'} />
  </Switch>
);

export default RouterView;
