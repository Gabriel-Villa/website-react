import React from 'react';
import { BrowserRouter as Router ,Route, Switch } from 'react-router-dom';

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import NavBarContainer from './pages/NavBarContainer'

const App = () => {
  return (
    <Router>
      <NavBarContainer />
      <Switch>
        <Route path="/" />
      </Switch>
    </Router>
  );
}

export default App;
