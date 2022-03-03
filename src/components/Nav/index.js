import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      {/* probably have to do a hook here with aria-expanded */}
      <div
        role="button"
        className="navbar-burger "
        aria-label="menu"
        aria-expanded="false"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </div>

      <div id="navMenu" className="navbar-menu">
        <div className="navbar-start">
          <Link to="/" className="navbar-item">
            Projects
          </Link>
          <Link to="/about-me" className="navbar-item">
            About Me
          </Link>
          <Link to="/contact" className="navbar-item">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
