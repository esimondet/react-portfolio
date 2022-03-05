import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithub,
  faCss3Alt,
  faHtml5,
  faReact,
  faNodeJs,
  faJs,
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelopeSquare,
  faFilePdf,
  faDrawPolygon,
} from '@fortawesome/free-solid-svg-icons';
import resume from '../../assets/docs/edison-resume-2022.pdf';

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
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                <br></br>
                GitHub
              </a>
            </div>
            <div className="column">
              <a
                href="https://www.linkedin.com/in/edison-simondet/"
                rel="noopener noreferrer"
                target="_blank"
                className="box has-text-centered"
              >
                <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                <br></br>
                Linkedin
              </a>
            </div>
            <div className="column">
              <a
                href="mailto: edison.simondet@gmail.com"
                className="box has-text-centered"
                download
              >
                <FontAwesomeIcon icon={faEnvelopeSquare}></FontAwesomeIcon>
                <br></br>
                Edison.Simondet@gmail.com
              </a>
            </div>
            <div className="column">
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="box has-text-centered"
                download
              >
                <FontAwesomeIcon icon={faFilePdf}></FontAwesomeIcon>
                <br></br>
                Resume
              </a>
            </div>
          </div>
          <div className="box">
            <h2 className="has-text-centered">This site was built with: </h2>
            <br></br>
            <div>
              <ul className="columns has-text-centered">
                <li className="column">
                  {' '}
                  <FontAwesomeIcon icon={faReact}></FontAwesomeIcon> React
                </li>
                <li className="column">
                  {' '}
                  <FontAwesomeIcon icon={faNodeJs}></FontAwesomeIcon> Node.js
                </li>
                <li className="column">
                  {' '}
                  <FontAwesomeIcon icon={faDrawPolygon}></FontAwesomeIcon> Bulma
                </li>
                <li className="column">
                  {' '}
                  <FontAwesomeIcon icon={faHtml5}></FontAwesomeIcon> HTML 5
                </li>
                <li className="column">
                  {' '}
                  <FontAwesomeIcon icon={faCss3Alt}></FontAwesomeIcon> CSS 3
                </li>
                <li className="column">
                  {' '}
                  <FontAwesomeIcon icon={faJs}></FontAwesomeIcon> JavaScript
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
