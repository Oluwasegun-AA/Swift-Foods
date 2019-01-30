import React from 'react';
import {
  Route,
  BrowserRouter,
  Switch
} from 'react-router-dom';

import {
  HomePage,
} from './views';

const routes = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/home" component={HomePage} />
    </Switch>
  </BrowserRouter>
);

export default routes;
