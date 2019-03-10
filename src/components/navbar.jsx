import React, { Component } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: true
    };
  }

  showMenu = () => {
    this.setState({ showMenu: !this.state.showMenu }, () => {
      const container = document.getElementById("navbar-container");
      const button = document.getElementById("nav-btn");

      if (this.state.showMenu) {
        container.className = "expand-nav";
        button.className = "show-arrow";
      } else {
        container.className = "collapse-nav";
        button.className = "hide-arrow";
      }
    });
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
            <Link className="link" to="/Home">
              Home
            </Link>

            <Link className="link" to="/Pets">
              Pets
            </Link>

            <Link className="link" to="/Clothes">
              Clothes
            </Link>

            <Link className="link" to="/Books">
              Books
            </Link>

            <Link className="link" to="/Tech">
              Tech
            </Link>
          </ul>
        </div>
      </div>
    );
  }
}
