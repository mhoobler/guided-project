import React from "react";
import { Link } from "react-router-dom";

import NavItem from "./NavItem";

import "./Nav.css";

const Nav: React.FC = () => {
  return (
    <nav>
      <div className="nav-logo">
        <Link to="/"> Super Store </Link>
      </div>

      <ul className="nav-list">
        <NavItem to="/">Home</NavItem>
        <NavItem to="/deals">Deals</NavItem>
        <NavItem to="/cart">Cart</NavItem>
      </ul>
    </nav>
  );
};

export default Nav;
