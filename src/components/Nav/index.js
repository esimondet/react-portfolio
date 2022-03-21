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
        className={`navbar-menu ${
          isHamburgerOpen ? 'is-active background border' : ''
        }`}
      >
        <div className='navbar-start'>
          <Link
            to='/projects'
            className={`navbar-item ${isHamburgerOpen ? 'font' : ''}`}
          >
            Projects
          </Link>
          <Link
            to='/'
            className={`navbar-item ${isHamburgerOpen ? 'font' : ''}`}
          >
            About Me
          </Link>
          <Link
            to='/contact'
            className={`navbar-item ${isHamburgerOpen ? 'font' : ''}`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
