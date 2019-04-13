import React, { useState, useEffect } from "react";
import "./statusbar.scss";
import { Link } from "react-router-dom";
import configuration from "../config";

const Statusbar = props => {
  const [userLoggedIn] = useState(
    localStorage.getItem("userEmail") ? true : false
  );
  const [showMenu, setShowMenu] = useState(true);
  const [userEmail] = useState(localStorage.getItem("userEmail"));
  const [firstName, setFirstName] = useState("");

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    if (userLoggedIn) {
      try {
        const response = await fetch(`${configuration.apiPath}/Home/userdata`, {
          headers: {
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify({ userEmail: userEmail })
        });

        const data = await response.json();

        if (data.firstName) {
          setFirstName(data.firstName);
        } else {
          throw new Error("Error while fetching user data");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const toggle = () => {
    const container = document.getElementById("statusbar-container");
    showMenu
      ? (container.className = "expand")
      : (container.className = "collapse");

    setShowMenu(!showMenu);
  };

  const logOutUser = () => {
    localStorage.removeItem("userEmail");
  };

  const content = (
    <div className="statusbar">
      {userLoggedIn ? (
        <div id="statusbar-container" onClick={toggle}>
          <div className="profile-img">
            <p>{firstName.substring(0, 1)}</p>
          </div>

          <Link to="/wishlist" className="wishlist-icon link">
            <i className="fas fa-shopping-bag" />
          </Link>
          <Link to="/preferences" className="settings-icon link">
            <i className="fas fa-cog" />
          </Link>
          <Link to="/login" onClick={logOutUser} className="signout-icon link">
            <i className="fas fa-sign-out-alt" />
          </Link>
        </div>
      ) : (
        <div id="statusbar-container">
          <Link to="/login">
            <div className="profile-img">
              <i className="fas fa-lock" />
            </div>
          </Link>
        </div>
      )}
    </div>
  );

  return content;
};
export default React.memo(Statusbar);
