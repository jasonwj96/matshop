import React, { Component } from "react";
import "./statusbar.scss";
import { Link } from "react-router-dom";
import configuration from "../config";

export default class Statusbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: true,
      userData: {
        userEmail: localStorage.getItem("userEmail"),
        firstName: ""
      }
    };
  }

  async componentDidMount() {
    this.fetchUserData();
  }

  async fetchUserData() {
    try {
      const response = await fetch(`${configuration.apiPath}/Home/userdata`, {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({ userEmail: this.state.userData.userEmail })
      });

      const data = await response.json();

      if (data.firstName) {
        this.setState({
          userData: {
            firstName: data.firstName
          }
        });
      } else {
        throw new Error("Error while fetching user data");
      }
    } catch (error) {
      console.log(error);
    }
  }

  showMenu = () => {
    const container = document.getElementById("statusbar-container");
    this.state.showMenu
      ? (container.className = "expand")
      : (container.className = "collapse");

    this.setState({ showMenu: !this.state.showMenu });
  };

  logOutUser() {
    localStorage.removeItem("userEmail");
  }

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
              <p>{this.state.userData.firstName.substring(0, 1)}</p>
            </div>
          </Link>
          <Link to="/wishlist" className="wishlist-icon link">
            <i className="fas fa-shopping-bag" />
          </Link>
          <Link to="/preferences" className="settings-icon link">
            <i className="fas fa-cog" />
          </Link>
          <Link
            to="/login"
            onClick={this.logOutUser}
            className="signout-icon link"
          >
            <i className="fas fa-sign-out-alt" />
          </Link>
        </div>
      </div>
    );
  }
}
