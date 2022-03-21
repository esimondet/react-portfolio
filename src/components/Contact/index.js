import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import resume from '../../assets/docs/edison-resume-2022.pdf';

function Contact() {
  return (
    <>
      <section className='section is-large'>
        <h1 className='title has-text-centered font'>Contact</h1>
        <div className='container'>
          <div className='columns'>
            <div className='column'>
              <a
                href='https://github.com/esimondet'
                className='box has-text-centered'
                rel='noopener noreferrer'
                target='_blank'
              >
                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                <br></br>
                GitHub
              </a>
            </div>
            <div className='column'>
              <a
                href='https://www.linkedin.com/in/edison-simondet/'
                rel='noopener noreferrer'
                target='_blank'
                className='box has-text-centered'
              >
                <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                <br></br>
                Linkedin
              </a>
            </div>
            <div className='column'>
              <a
                href='mailto: edison.simondet@gmail.com'
                className='box has-text-centered'
                download
              >
                <FontAwesomeIcon icon={faEnvelopeSquare}></FontAwesomeIcon>
                <br></br>
                Edison.Simondet@gmail.com
              </a>
            </div>
            <div className='column'>
              <a
                href={resume}
                target='_blank'
                rel='noopener noreferrer'
                className='box has-text-centered'
                download
              >
                <FontAwesomeIcon icon={faFilePdf}></FontAwesomeIcon>
                <br></br>
                Resume
              </a>
            </div>
          </div>
          <div className='box '>
            <h2 className='has-text-centered'>
              This site was built with: React, Node.js, Bulma, HTML 5, CSS 3,
              JavaScript
            </h2>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
