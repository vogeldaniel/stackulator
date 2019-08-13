import React from 'react';
import {
  HashRouter as Router, Switch, Route,
} from 'react-router-dom';

import Application from './Application';
import Welcome from './Welcome';

const Routing = () => (
  <Router basename="/">
    <Switch>
      <Route
        exact
        path="/"
        render={Welcome}
      />
      <Route
        exact
        path="/app"
        render={Application}
      />
    </Switch>
  </Router>
);

export default Routing;
