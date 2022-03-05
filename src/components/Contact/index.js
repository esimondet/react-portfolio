import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <>
      <section className="section">
        <h1 className="title has-text-centered">Contact</h1>
        <div className="container">
          <div className="columns">
            <div className="column">
              <a
                href="https://github.com/esimondet"
                className="box has-text-centered"
                rel="noopener noreferrer"
              >
                {/* <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> */}
                GitHub
              </a>
            </div>
            <div className="column">
              <a
                href="https://www.linkedin.com/in/edison-simondet/"
                target="blank"
                className="box has-text-centered"
              >
                {/* <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon> */}
                Linkedin
              </a>
            </div>
            <div className="column">
              <a
                href="https://github.com/esimondet"
                target="blank"
                className="box has-text-centered"
              >
                Email Me
              </a>
            </div>
            <div className="column">
              <a
                href="https://github.com/esimondet"
                target="blank"
                className="box has-text-centered"
              >
                Resume (PDF Download)
              </a>
            </div>
          </div>
          <div className="box">
            <h2 className="has-text-centered">This site was built with: </h2>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
