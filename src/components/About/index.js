import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCss3Alt,
  faHtml5,
  faReact,
  faNode,
  faJs,
  faAws,
} from '@fortawesome/free-brands-svg-icons';
import {
  faLeaf,
  faServer,
  faCloudArrowUp,
  faA,
  faP,
  faI,
  faSpinner,
  faDatabase,
} from '@fortawesome/free-solid-svg-icons';

function About() {
  return (
    <>
      <section className='section '>
        <h1 className='title has-text-centered font'>
          Hello, I'm Edison Simondet
        </h1>
        <div className='container '>
          <div className='box columns'>
            <div className='column'>
              <img
                src={require('../../assets/images/Avatar.jpg')}
                alt='Developer avatar'
              />
            </div>
            <div className='column'>
              <p>
                I'm a <strong> Full Stack Developer </strong> near the Twin
                Cities Minnesota area. Accessibility and improving the user
                experience are especially exciting to me. My goal is to make
                websites and applications that meet users where they are while
                still being dynamic and engaging.
              </p>
              <br></br>
              <p>
                Please take a look at my portfolio on the
                {<Link to='/projects'> Projects </Link>}
                tab. If what you see interests you or your company, reach out
                via
                {<Link to='/contact'> Contact</Link>}.
              </p>
              <br></br>
              <div className='box container'>
                <h2 className='title is-4 has-text-centered'>Proficiencies</h2>
                <div className='columns '>
                  <div className='column '>
                    <h3 className='title is-5 has-text-centered'>MERN Stack</h3>
                    <ul className='tags is-justify-content-center are-medium'>
                      <li className='tag is-white'>
                        <FontAwesomeIcon icon={faLeaf}></FontAwesomeIcon>
                        &nbsp;MongoDB
                      </li>
                      <li className='tag is-white'>
                        <FontAwesomeIcon icon={faServer}></FontAwesomeIcon>
                        &nbsp;Express.js
                      </li>
                      <li className='tag is-white'>
                        <FontAwesomeIcon icon={faReact}></FontAwesomeIcon>
                        &nbsp;React
                      </li>
                      <li className='tag is-white'>
                        <FontAwesomeIcon icon={faNode}></FontAwesomeIcon>
                        &nbsp;Node
                      </li>
                    </ul>
                  </div>
                  <div className='column'>
                    <ul className='tags is-justify-content-center are-medium'>
                      <li className='tag'>
                        <FontAwesomeIcon icon={faAws}></FontAwesomeIcon>
                        &nbsp;Amazon Web Services (AWS)
                      </li>
                      <li className='tag'>
                        <FontAwesomeIcon
                          icon={faCloudArrowUp}
                        ></FontAwesomeIcon>
                        &nbsp;Simple Storage Service (S3)
                      </li>
                      <li className='tag'>
                        <FontAwesomeIcon icon={faA}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faP}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faI}></FontAwesomeIcon>
                        &nbsp;RESTful APIs
                      </li>
                      <li className='tag'>
                        <FontAwesomeIcon icon={faSpinner}></FontAwesomeIcon>
                        &nbsp; JQuery
                      </li>
                      <li className='tag'>
                        <FontAwesomeIcon icon={faDatabase}></FontAwesomeIcon>
                        &nbsp;mySQL2
                      </li>
                      <li className='tag'>
                        <FontAwesomeIcon icon={faJs}></FontAwesomeIcon>
                        &nbsp;JavaScript
                      </li>
                      <li className='tag'>
                        <FontAwesomeIcon icon={faHtml5}></FontAwesomeIcon>
                        &nbsp;HTML 5
                      </li>
                      <li className='tag'>
                        <FontAwesomeIcon icon={faCss3Alt}></FontAwesomeIcon>
                        &nbsp;CSS 3
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
