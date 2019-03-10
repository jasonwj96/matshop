import React from "react";
import "./App.scss";
import { Router, Route, Switch } from "react-router-dom";
import Landing from "./components/landing";
import createBrowserHistory from "history/createBrowserHistory";
import Login from "./components/login";
import NotFound from "./components/notfound";

const customHistory = createBrowserHistory();

const App = () => {
  return (
    <Router history={customHistory}>
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/home" component={Landing} />
        <Route path="/login" component={Login} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
