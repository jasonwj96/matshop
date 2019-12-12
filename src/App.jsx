import React from "react";
import "./App.scss";
import Landing from "./containers/landing";
import Login from "./containers/login";
import Wishlist from "./containers/wishlist";
import Category from "./containers/category";
import Register from "./containers/register";
import Navbar from "./components/navbar";
import Statusbar from "./components/statusbar";
import Footer from "./components/footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Preferences from "./containers/preferences";

const App = () => {

  return localStorage.getItem("user_logged_in") ?
    (
      <Router>
        <Navbar />
        <Statusbar />
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/home">
            <Landing />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/wishlist">
            <Wishlist />
          </Route>
          <Route path="/category">
            <Category />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
        </Switch>
        <Footer />
      </Router>
    )
    :
    (
      <Router>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/register" exact>
          <Register />
        </Route>
        <Route path="**">
          <Redirect to="/login" />
        </Route>
      </Router>
    )
};

export default App;
