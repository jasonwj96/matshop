import React, { Component } from "react";
import "./App.scss";
import Landing from "./components/landing";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Statusbar from "./components/statusbar";
// import Notification from "./components/notification";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Statusbar />
        <Landing />
        <Footer />
        {/* <Notification /> */}
      </div>
    );
  }
}
