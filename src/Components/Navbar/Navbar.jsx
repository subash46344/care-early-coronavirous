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
          <li className="active" onClick={toggleMenu}>HOME</li>
          <li onClick={toggleMenu}>ABOUT</li>
          <li onClick={toggleMenu}>TAKE ACTION</li>
          <li>
          <img className="covid_icon" src={Corona} alt="Corona Icon" onClick={toggleMenu}/>
          </li>
          <li onClick={toggleMenu}>NEWS</li>
          <li onClick={toggleMenu}>DOCTORS</li>
          <li onClick={toggleMenu}>CONTACT</li>
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
