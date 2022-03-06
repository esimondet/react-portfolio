import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer jonquil section">
      <div className="content has-text-centered">
        <p>
          <strong>
            Portfolio by
            <a href="https://edisonsimondet.dev" target="blank">
              &nbsp; Edison Simondet
            </a>
            . Copyright © {currentYear}.
          </strong>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
