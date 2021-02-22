import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  to: string
}

const NavItem: React.FC<Props> = (P) => {

  return (
    <li className='nav-item'>
      <Link to={P.to}>
        {P.children}
      </Link>  
    </li>
  )
}

export default NavItem;