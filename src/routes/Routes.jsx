import React, { Suspense } from 'react';
import { Route, Switch, Router } from 'react-router-dom';

import NotFound from 'Containers/NotFound';
import Root from 'Containers/Root';
import history from './history';
import { routes } from './path';

// * Core components ->
// import { Spinner } from 'Components/Spinner'; // ! This component does not exist yet
// * <- Core components

// * Lazy components ->
const Home = React.lazy(() => import('Containers/Home'));
const Works = React.lazy(() => import('Containers/Works'));
const Offers = React.lazy(() => import('Containers/Offers'));
// * <- Lazy components

const Loader = () => (
  <p>Loading...</p>
);

const Routes = () => (
  <Router history={history}>
    <Root>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path={routes.home} exact>
            <Home />
          </Route>
          <Route path={routes.works} exact>
            <Works />
          </Route>
          <Route path={routes.offers} exact>
            <Offers />
          </Route>
          <Route path="*" exact>
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Root>
  </Router>
);

export default Routes;
