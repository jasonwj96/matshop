import React from "react";
import "./App.scss";
import { Router, Route, Switch } from "react-router-dom";
import Landing from "./containers/landing";
import createBrowserHistory from "history/createBrowserHistory";
import Login from "./containers/login";
import NotFound from "./containers/notfound";
import Wishlist from "./containers/wishlist";
import Category from "./containers/category";

const customHistory = createBrowserHistory();

const App = () => {
  return (
    <Router history={customHistory}>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/home" component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/wishlist" component={Wishlist} />
        <Route path="/category" component={Category} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
