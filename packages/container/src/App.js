import React, { lazy, Suspense } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import { createBrowserHistory } from 'history';

import Header from './components/Header';

const CatalogLazy = lazy(() => import('./components/CatalogApp'));
const CartLazy = lazy(() => import('./components/CartApp'));

const history = createBrowserHistory();

export default () => {
  return (
    <Router history={history}>
      <div>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path='/cart'>
              <CartLazy />
            </Route>
            <Route path='/'>
              <CatalogLazy />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
};
