import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import Catalog from './components/Catalog';
import SingleProduct from './components/SingleProduct';

export default ({ history }) => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route exact path='/:productId' component={SingleProduct} />
          <Route exact path='/' component={Catalog} />
        </Switch>
      </Router>
    </div>
  );
};
