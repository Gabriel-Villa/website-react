import React from 'react';
import { BrowserRouter as Router ,Route, Switch } from 'react-router-dom';

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from './components/NavBar/NavBar'

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" />
      </Switch>
    </Router>
  );
}

export default App;
