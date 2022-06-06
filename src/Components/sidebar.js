import React, { useState } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import Logo from "../Assets/logo.png";
// import Home from "../Assets/home.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faSearch } from "@fortawesome/free-solid-svg-icons";

// import Favorite from "../Assets/favorite.png";

const Sidebar = () => {
  const [selectedMenu, setSelectedMenu] = useState(true);
  const toggleMenu = () => {
    setSelectedMenu(selectedMenu);
  };
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="home">
        <div className="home-icon">
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <div className={selectedMenu ? "change" : "sidebarHead"}>
          <h3 onMouseEnter={toggleMenu}>
            <Link to="/">Home</Link>
          </h3>
        </div>
      </div>

      <div className="favorite">
        <div className="fav-icon">
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <div
          className={selectedMenu ? "sidebarhead" : "sidebarhead" && "change"}
        >
          <h3>
            <Link to="/Favorites">Favorites</Link>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
