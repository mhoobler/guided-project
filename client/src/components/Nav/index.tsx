import React from 'react';
import { useHistory } from 'react-router-dom';

import NavItem from './NavItem';

import './Nav.css';

const Nav: React.FC = () => {

  const history = useHistory();

  return (
    <nav>
      <div className='nav-logo' onClick={() => history.push('/')}>
        <h2>Super Store</h2>
      </div>

      <ul className='nav-list'>
        <NavItem to='/'>Home</NavItem>
        <NavItem to='/deals'>Deals</NavItem>
        <NavItem to='/cart'>Cart</NavItem>
      </ul>
    </nav>
  )
}

export default Nav;