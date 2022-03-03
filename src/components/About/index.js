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
                Cities Minnesota area. Accessibility and user experience are at
                the priorities for any project I work on. My goal is to make
                websites and applications that work for all levels of user
                ability while still being dynamic and attractive.
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
              <div className="box">
                <h2 className="has-text-centered">Languages</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
