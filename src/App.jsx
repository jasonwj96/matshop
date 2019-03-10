import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./components/landing";
import createBrowserHistory from "history/createBrowserHistory";
import Login from "./components/login";
import NotFound from "./components/notfound";

const customHistory = createBrowserHistory();

const App = () => {
  return (
    <BrowserRouter history={customHistory}>
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/home" component={Landing} />
        <Route path="/login" component={Login} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
