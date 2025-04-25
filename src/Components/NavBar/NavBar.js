import React from "react";
import "./NavBar.css";
import logo from "../../images/Logo.png";
import search from "../../images/search-normal.png";
import heart from "../../images/heart.png";
import shoppingBag from "../../images/shopping-bag.png";
import profile from "../../images/profile.png";
import language from "../../images/Language.png";
import menu from "../../images/solar_hamburger-menu-linear.png";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="top-row">
        <div className="column">
          <img src={menu} alt="Menu" className="menu-icon" />
          <img src={logo} alt="Logo" className="logo-icon" />
        </div>
        <div className="column">
          <h2>LOGO</h2>
        </div>
        <div className="column icons">
          <img src={search} alt="Search" className="icon" />
          <img src={heart} alt="Heart" className="icon" />
          <img src={shoppingBag} alt="Shopping Bag" className="icon" />
          <img src={profile} alt="Profile" className="icon" />
          <img src={language} alt="Language" className="icon" />
        </div>
      </div>
      <div className="bottom-row-nav">
        <ul className="nav-list">
          <li>
            <a href="#">SHOP</a>
          </li>
          <li>
            <a href="#">SKILLS</a>
          </li>
          <li>
            <a href="#">STORIES</a>
          </li>
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">CONTACT US</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
