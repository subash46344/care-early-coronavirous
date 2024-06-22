import React, { useState } from "react";
import "./NavbarStyle.css";
import Corona from "./../../Assets/logo1.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar_main_block">
      <div className="search_icon">
        <i className="fa fa-search"></i>
      </div>
      <nav className="navbar_list">
        <ul className={menuOpen ? "show" : ""}>
          <li><a className="active" href="/">HOME</a></li>
          <li><a href="/about">ABOUT</a></li>
          <li><a href="/action">TAKE ACTION</a></li>
          <li>
            <a href="/corona"><img className="covid_icon" src={Corona} alt="Corona Icon" /></a>
          </li>
          <li><a href="/news">NEWS</a></li>
          <li><a href="/doctors">DOCTORS</a></li>
          <li><a href="/contact">CONTACT</a></li>
        </ul>
        <div className="menu_bar" onClick={toggleMenu}>
          <i className={`fa ${menuOpen ? 'fa-close' : 'fa-bars'}`}></i>
        </div>
      </nav>
      <div className="user_icon">
        <i className="fa fa-user"></i>
      </div>
    </div>
  );
};

export default Navbar;
