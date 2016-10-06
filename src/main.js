import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import Layout from './Layout';
import Order from './Order'
import Application from './Application'

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Application}>
      <IndexRoute component={Layout}></IndexRoute>
      <Route path="Order" name="Order" component={Order}></Route>
    </Route>
  </Router>,
app);