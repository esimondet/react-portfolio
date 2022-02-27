import React from 'react';

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
          <a className="navbar-item" href="#projects">
            Projects
          </a>
          <a className="navbar-item" href="#about">
            About Me
          </a>
          <a className="navbar-item" href="#contact">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
