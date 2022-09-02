import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SpinnerGrow from '../components/Spinner';
const Dashboard = React.lazy(
  () =>
    import(
      /* webpackPrefetch: true */
      /* webpackChunkName: "Dahsboard" */ '../pages/Dashboard'
    ),
);
const Repo = React.lazy(
  () =>
    import(
      /* webpackPrefetch: true */
      /* webpackChunkName: "Repo" */ '../pages/Repo'
    ),
);

export const Routes: React.FC = () => {
  return (
    <React.Suspense fallback={<SpinnerGrow />}>
      <Switch>
        <Route component={Dashboard} path="/" exact />
        <Route component={Repo} path="/repositories/:repository+" />
      </Switch>
    </React.Suspense>
  );
};
