import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';

// * Core components ->
import NotFound from 'Containers/NotFound';
import Root from 'Containers/Root';
import Home from 'Containers/Home';
import Works from 'Containers/Works';
import Offers from 'Containers/Offers';
// import { Backdrop, Spinner } from 'Components';
// * <- Core components
import history from './history';
import { routes } from './path';

// * Lazy components ->
// TODO: implement in the future
// const Home = React.lazy(() => import('Containers/Home'));
// const Works = React.lazy(() => import('Containers/Works'));
// const Offers = React.lazy(() => import('Containers/Offers'));

// const preloadingComponent = (
//   <Backdrop overflowAll>
//     <Spinner />
//   </Backdrop>
// );

// * <- Lazy components

const Routes = () => (
  <Router history={history}>
    <Root>
      {/* <Suspense fallback={preloadingComponent}> */}
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
      {/* </Suspense> */}
    </Root>
  </Router>
);

export default Routes;
