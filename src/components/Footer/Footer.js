import React from "react";
import { Link } from "react-router-dom";

import './Footer.css';

const Footer = props => {
  return (
      <nav className="Footer">
        <h6>All right reserved</h6>
        <Link to="/home">HOME</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/contact">CONTACT</Link>
        <Link to="/regulations">REGULATIONS</Link>
        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/"><span className="fab fa-facebook-f"></span></a>
      </nav>
  );
}

export default Footer; 