import React from "react";
import { NavLink } from "react-router-dom";

import "./Nav.css";
import introimg from '../../img/intrologo.png'

export const Header = props => {
  return (
    
      <div>
        <a class="logo" href="/home">
          <img src={introimg} alt="Welcome" />
        </a>
      
      <nav>
        <NavLink exact to="/" activeClassName="active">
          <button>X</button>
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
      </nav>
    </div>
  );
};


