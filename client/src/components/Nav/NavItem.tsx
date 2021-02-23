import React from "react";
import { NavLink } from "react-router-dom";

type Props = {
  to: string;
};

const NavItem: React.FC<Props> = (P) => {
  let isActive = (match: any, location: any) => {
    if (match && match.isExact) {
      return true;
    }

    return false;
  };

  return (
    <li className="nav-item">
      <NavLink to={P.to} activeClassName="active" isActive={isActive}>
        {P.children}
      </NavLink>
    </li>
  );
};

export default NavItem;
