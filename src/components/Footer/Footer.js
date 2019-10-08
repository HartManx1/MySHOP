import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import './Footer.css';

const Footer = props => {
  return (
    <nav class="footer">
      <h6>All right reserved</h6>
    <NavLink exact to="/" activeClassName="active">
    </NavLink>
    <NavLink exact to="/home" activeClassName="active">
      HOME
    </NavLink>
    <NavLink exact to="/FAQ" activeClassName="active">
      FAQ
    </NavLink>
    <NavLink exact to="/contact" activeClassName="active">
      CONTACT
    </NavLink>
    <NavLink exact to="/regulations" activeClassName="active">
      REGULATIONS
    </NavLink>
    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/"><span className="fab fa-facebook-f"></span></a>
  </nav>
  );
}

export default Footer;