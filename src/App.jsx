import React, { Component } from "react";
import "./App.scss";
import Landing from "./components/landing";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

// import Notification from "./components/notification";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Landing />
        <Footer />
      </div>
    );
  }
}

export default App;
