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
    this.state.showMenu
      ? (container.className = "expand-nav")
      : (container.className = "collapse-nav");

    this.setState({ showMenu: !this.state.showMenu });
  };

  render() {
    return (
      <div className="navbar">
        <div id="navbar-container">
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
      </div>
    );
  }
}
