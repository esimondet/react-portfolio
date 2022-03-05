import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>Portfolio</strong> by{' '}
          <a href="https://edisonsimondet.dev" target="blank">
            Edison Simondet.
          </a>
          Copyright © {currentYear}.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
