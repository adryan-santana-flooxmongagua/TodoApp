import React from 'react';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';

import Todo from '../todo/Todo';
import About from '../about/About';
import App from './App'; // Se tiver um componente principal

const Routes = () => (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="/todos" />
      <Route path="todos" component={Todo} />
      <Route path="about" component={About} />
    </Route>
  </Router>
);

export default Routes;