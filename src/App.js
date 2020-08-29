import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Loader from "./components/Loader";
import useSetTimeOut from "./hooks/useSetTimeOut";
import NavBarContainer from "./pages/NavBarContainer";

import Home from "./pages/Home";
import ProductsContainer from "./pages/ProductsContainer";
import NotFound from "./pages/404";

import FooterContainer from "./pages/FooterContainer";

const App = () => {
  const { loader } = useSetTimeOut();
  if (loader) return <Loader />;

  return (
    <Router>
      <NavBarContainer />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={ProductsContainer} />
        <Route component={NotFound} />
      </Switch>
      <FooterContainer />
    </Router>
  );
};

export default App;
