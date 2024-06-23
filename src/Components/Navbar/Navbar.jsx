import React, { useState, useEffect, useRef } from "react";
import "./NavbarStyle.css";
import Corona from "./../../Assets/logo1.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navbarRef = useRef(null);
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
    }
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (position) => {
    window.scrollTo({
      top: position - navbarHeight,
      behavior: 'smooth',
    });
    setMenuOpen(false); // close the menu after clicking
  };

  return (
    <div className="navbar_main_block" ref={navbarRef}>
      <div className="search_icon">
        <i className="fa fa-search"></i>
      </div>
      <nav className="navbar_list">
        <ul className={menuOpen ? "show" : ""}>
          <li className="active" onClick={() => scrollToSection(0)}>HOME</li>
          <li onClick={() => scrollToSection(650)}>ABOUT</li>
          <li onClick={() => scrollToSection(1750)}>TAKE ACTION</li>
          <li>
            <img className="covid_icon" src={Corona} alt="Corona Icon" onClick={() => scrollToSection(1200)}/>
          </li>
          <li onClick={() => scrollToSection(2600)}>NEWS</li>
          <li onClick={() => scrollToSection(3500)}>DOCTORS</li>
          <li onClick={() => scrollToSection(10000)}>CONTACT</li>
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
