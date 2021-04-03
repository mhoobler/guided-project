import React, { useContext } from "react";
import { Link } from "react-router-dom";

import NavItem from "./NavItem";

import { CartContext } from "../../contexts/CartContext";

import "./Nav.css";

const Nav: React.FC = () => {
  const { howManyItemsInCart } = useContext(CartContext);

  return (
    <nav>
      <div className="nav-logo">
        <Link to="/"> Super Store </Link>
      </div>

      <ul className="nav-list">
        <NavItem to="/">Home</NavItem>
        <NavItem to="/deals">Deals</NavItem>
        <NavItem to="/cart">Cart</NavItem>
        <div className="total-pill">{howManyItemsInCart()}</div>
      </ul>
    </nav>
  );
};

export default Nav;
