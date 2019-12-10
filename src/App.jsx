import React from "react";
import "./App.scss";
import Landing from "./containers/landing";
import Login from "./containers/login";
import Wishlist from "./containers/wishlist";
import Category from "./containers/category";
import Register from "./containers/register";
// import Notification from "./components/notification";
import Navbar from "./components/navbar";
import Statusbar from "./components/statusbar";
import Footer from "./components/footer";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {
  return (
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
      </Switch>
      <Footer />
      {/* <Notification /> */}
    </Router>
  );
};

export default App;
