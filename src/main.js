import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import NavBar from './NavBar';
 
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(NavBar),
    document.getElementById('app')
  );
});