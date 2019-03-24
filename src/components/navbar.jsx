import React, { useState, useEffect } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = props => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    return () => {
      const container = document.getElementById("navbar-container");
      if (showMenu) {
        container.className = "expand-nav";
      } else {
        container.className = "collapse-nav";
      }
    };
  }, [showMenu]);

  const toggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="navbar">
      <div id="navbar-container">
        <div className="nav-menu">
          <button id="nav-btn" onClick={toggle}>
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
          <Link onClick={toggle} className="link" to="/Home">
            Home
          </Link>

          <Link onClick={toggle} className="link" to="category?c=Pets">
            Pets
          </Link>

          <Link onClick={toggle} className="link" to="category?c=Clothes">
            Clothes
          </Link>

          <Link onClick={toggle} className="link" to="category?c=Books">
            Books
          </Link>

          <Link onClick={toggle} className="link" to="category?c=Tech">
            Tech
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
