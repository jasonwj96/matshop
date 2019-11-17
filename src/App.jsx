import React from "react";
import "./App.scss";
import { Router, Route, Switch } from "react-router-dom";
import Landing from "./containers/landing";
import { createBrowserHistory } from "history";
import Login from "./containers/login";
import NotFound from "./containers/notfound";
import Wishlist from "./containers/wishlist";
import Category from "./containers/category";
import Register from "./containers/register";
import Notification from "./components/notification";
import Navbar from "./components/navbar";
import Statusbar from "./components/statusbar";
import Footer from "./components/footer";


const customHistory = createBrowserHistory();

const App = () => {
  return (
    <Router history={customHistory}>
      <Navbar />
      <Statusbar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/home" component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/wishlist" component={Wishlist} />
        <Route path="/category/:c" component={Category} />
        <Route path="/register" component={Register} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
      <Notification />
    </Router>
  );
};

export default App;
