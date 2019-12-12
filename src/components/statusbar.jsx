import React, { useState, useEffect } from "react";
import "./statusbar.scss";
import { Link } from "react-router-dom";
import configuration from "../config";
import { useHistory } from "react-router-dom";


const Statusbar = props => {
  const [userLoggedIn] = useState(localStorage.getItem("user_logged_in"));
  const [showMenu, setShowMenu] = useState(true);
  const [firstLetter, setFirstLetter] = useState("");
  const history = useHistory();


  useEffect(() => {
    if (localStorage.getItem("user_email") && localStorage.getItem("user_logged_in")) {
      setFirstLetter(localStorage.getItem("user_email"));
    }
  }, []);

  const toggle = () => {
    const container = document.getElementById("statusbar-container");
    showMenu
      ? (container.className = "expand")
      : (container.className = "collapse");

    setShowMenu(!showMenu);
  };

  const logOutUser = () => {
    localStorage.removeItem("user_logged_in");
    localStorage.removeItem("user_email");
    props.setLoggedIn(false);
    history.push("/login");
  };

  const content = (
    <div className="statusbar">
      {userLoggedIn ? ( //Change this condition
        <div id="statusbar-container" onClick={toggle}>
          <div className="profile-img">
            <p>{firstLetter.substring(0, 1).toUpperCase()}</p>
          </div>
          {/* <Link to="/profile" className="user-icon link">
            <i className="fas fa-user" />
          </Link> */}
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
export default Statusbar;
