import React from 'react';

function Nav() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <h1>Edison Simondet</h1>
      </div>
      {/* probably have to do a hook here with aria-expanded */}
      <div
        role="button"
        className="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </div>
      <div id="navbarBasic" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item projectsBtn">Projects</a>
          <a className="navbar-item aboutBtn">About Me</a>
          <a className="navbar-item contactBtn">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
