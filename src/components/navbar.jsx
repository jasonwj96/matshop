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
    const container = document.getElementById("navbar-container");
    const button = document.getElementById("nav-btn");

    if (this.state.showMenu) {
      container.className = "expand-nav";
      button.className = "show-arrow";
    } else {
      container.className = "collapse-nav";
      button.className = "hide-arrow";
    }

    this.setState({ showMenu: !this.state.showMenu });
  };

  render() {
    return (
      <div className="navbar">
        <div id="navbar-container">
          <div className="nav-menu">
            <button id="nav-btn" onClick={this.showMenu}>
              <div>
                <div className="bar" />
                <div className="bar" />
                <div className="bar" />
                <span />
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
      </div>
    );
  }
}
