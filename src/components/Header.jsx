import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo-color.png";

function Header() {
  return (
    <header>
      <nav>
        <NavLink to="/">
          <img src={logo} alt="logo kasa" className="logo-kasa" />
        </NavLink>
        <ul id="navbar">
          <NavLink className="header-links" to="/">
            Accueil
          </NavLink>
          <NavLink className="header-links" to="/about">
            A Propos
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
