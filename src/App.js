import React from 'react';
import { BrowserRouter as Router ,Route, Switch } from 'react-router-dom';

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Loader from './components/Loader';
import useSetTimeOut from './hooks/useSetTimeOut';
import NavBarContainer from './pages/NavBarContainer'
import Home from './pages/Home';

const App = () => {
  const { loader } = useSetTimeOut();
  if(loader) return <Loader />
  
  return (
    <Router>
      <NavBarContainer />
      <Switch>
        <Route  exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
