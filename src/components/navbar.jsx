import React, { Component } from "react";
import "./navbar.scss";

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: true
    };
  }

  showMenu = () => {
    const container = document.getElementById("container").style;
    if (this.state.showMenu) {
      container.height = "275px";
      container.width = "250px";
    } else {
      container.height = "50px";
      container.width = "180px";
    }
    this.setState({ showMenu: !this.state.showMenu });
  };

  render() {
    return (
      <div id="container">
        <div className="nav-menu">
          <button onClick={this.showMenu}>
            <div>
              <div />
              <div />
              <div />
            </div>
          </button>
          <div className="logo">Matshop</div>
        </div>
        <div />
        <ul>
          <li>Home</li>
          <li>Pets</li>
          <li>Clothing</li>
          <li>Books</li>
          <li>Tech</li>
        </ul>
      </div>
    );
  }
}
