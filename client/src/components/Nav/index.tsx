import React from 'react';

import NavItem from './NavItem';

import './Nav.css';

const Nav: React.FC = () => {

  return (
    <nav>
      <div className='nav-logo'>
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