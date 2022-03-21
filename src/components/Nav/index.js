import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const toggleNav = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  return (
    <nav className='navbar' role='navigation' aria-label='main navigation'>
      <div
        role='button'
        className={`navbar-burger ${isHamburgerOpen ? 'is-active' : ''}`}
        aria-label='menu'
        aria-expanded='false'
        onClick={() => toggleNav()}
      >
        <span aria-hidden='true'></span>
        <span aria-hidden='true'></span>
        <span aria-hidden='true'></span>
      </div>

      <div
        id='navMenu'
        className={`navbar-menu background ${
          isHamburgerOpen ? 'is-active' : ''
        }`}
      >
        <div className='navbar-start'>
          <Link to='/projects' className='navbar-item font'>
            Projects
          </Link>
          <Link to='/' className='navbar-item font'>
            About Me
          </Link>
          <Link to='/contact' className='navbar-item font'>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
