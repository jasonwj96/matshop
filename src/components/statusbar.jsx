import React, { Component } from "react";
import "./statusbar.scss";
import { Link } from "react-router-dom";

export default class Statusbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: true
    };
  }

  showMenu = () => {
    const container = document.getElementById("statusbar-container");
    this.state.showMenu
      ? (container.className = "expand")
      : (container.className = "collapse");

    this.setState({ showMenu: !this.state.showMenu });
  };

  render() {
    return (
      <div className="statusbar">
        <div
          id="statusbar-container"
          onMouseEnter={this.showMenu}
          onMouseLeave={this.showMenu}
        >
          <Link to="/profile">
            <div className="profile-img">
              <p>J</p>
            </div>
          </Link>
          <Link to="/wishlist" className="wishlist-icon link">
            <i className="fas fa-shopping-bag" />
          </Link>
          <Link to="/preferences" className="settings-icon link">
            <i className="fas fa-cog" />
          </Link>
          <Link to="/login" className="signout-icon link">
            <i className="fas fa-sign-out-alt" />
          </Link>
        </div>
      </div>
    );
  }
}
