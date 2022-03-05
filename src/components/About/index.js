import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <>
      <section className="section">
        <h1 className="title has-text-centered">Hello, I'm Edison Simondet</h1>
        <div className="container">
          <div className="box columns">
            <div className="column">
              <img
                src={require('../../assets/images/Avatar.jpg')}
                alt="Developer avatar"
              />
            </div>
            <div className="column">
              <p>
                I'm a <strong> Full Stack Developer </strong> near the Twin
                Cities Minnesota area. When working on projects I an especially
                most excited by accessibility and user experience. My goal is to
                make websites and applications that work for all levels of user
                ability while still being dynamic and engaging.
              </p>
              <br></br>
              <p>
                Please take a look at my portfolio on the
                {<Link to="/projects"> Projects </Link>}
                tab. If what you see interests you or your company, reach out
                via
                {<Link to="/contact"> Contact</Link>}.
              </p>
              <br></br>
              <div className="box container">
                <h2 className="title is-4 has-text-centered">Proficiencies</h2>
                <div className="columns">
                  {/* make these into tags and have them list column wise. probs 3 columns, 1 for mern 2 for else */}
                  <div className="column has-text-centered">
                    <ul>
                      <h3 className="title is-5">MERN Stack</h3>
                      <li>MongoDB</li>
                      <li>Express.js</li>
                      <li>React</li>
                      <li>Node</li>
                    </ul>
                  </div>
                  <div className="colum has-text-centered">
                    <ul>
                      <li>Amazon Web Services (AWS)</li>
                      <li>Simple Storage Service (S3)</li>
                      <li>RESTful APIs</li>
                      <li>JQuery</li>
                      <li>mySQL2</li>
                      <li>JavaScript</li>
                      <li>HTML 5</li>
                      <li>CSS 3</li>
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
