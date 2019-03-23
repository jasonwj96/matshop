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

      if (this.state.showMenu) {
        container.className = "expand-nav";
      } else {
        container.className = "collapse-nav";
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
            <Link onClick={this.showMenu} className="link" to="/Home">
              Home
            </Link>

            <Link onClick={this.showMenu} className="link" to="category?c=Pets">
              Pets
            </Link>

            <Link
              onClick={this.showMenu}
              className="link"
              to="category?c=Clothes"
            >
              Clothes
            </Link>

            <Link
              onClick={this.showMenu}
              className="link"
              to="category?c=Books"
            >
              Books
            </Link>

            <Link onClick={this.showMenu} className="link" to="category?c=Tech">
              Tech
            </Link>
          </ul>
        </div>
      </div>
    );
  }
}
