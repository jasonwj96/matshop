import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./components/landing";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Login from "./components/login";
import NotFound from "./components/notfound";
import Statusbar from "./components/statusbar";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Statusbar />
        <Switch>
          <Route path="/" component={Landing} exact />
          <Route path="/Login" component={Login} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
