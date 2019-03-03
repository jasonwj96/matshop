import React, { Component } from "react";
import "./statusbar.scss";

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
          <a href="/">
            <div className="profile-img">
              <p>J</p>
            </div>
          </a>
          <a href="/" className="wishlist-icon link">
            <i className="fas fa-shopping-bag" />
          </a>
          <a href="/" className="settings-icon link">
            <i className="fas fa-cog" />
          </a>
          <a href="/login" className="signout-icon link">
            <i className="fas fa-sign-out-alt" />
          </a>
        </div>
      </div>
    );
  }
}
