import React, { useState } from 'react';
import Modal from '../Modal';

const Portfolio = ({ title }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [projects] = useState([
    // {
    //   title: '',
    //   description: '',
    //   languages: '',
    //   deployment: '',
    //   github: '',
    // },
    {
      title: 'Employee Tracker',
      description:
        'A command prompt application that stores employee information in a SQL database using mysql2',
      features: 'Node.js mysql2',
      deployment: '',
      github: 'https://github.com/esimondet/employee-tracker',
    },
    {
      title: 'Note Taker',
      description:
        'A note taking app that uses Express.js to host a local database over Heroku pages',
      features: 'Express.js JavaScript CSS HTML',
      deployment: 'https://expressjs-notetaker-app.herokuapp.com/',
      github: 'https://github.com/esimondet/notetaker-app',
    },
    {
      title: 'Turing Quiz',
      description:
        'A just for fun browser-based quiz on the influential Alan Turing',
      features: 'JavaScript HTML CSS',
      deployment: 'https://esimondet.github.io/turing-quiz/',
      github: 'https://github.com/esimondet/turing-quiz',
    },
    {
      title: 'Hero Maps',
      description: 'An exploration of the Marvel API and Google Maps Platforms',
      features: 'JavaScript HTML CSS',
      deployment: 'https://esimondet.github.io/hero-maps/',
      github: 'https://github.com/esimondet/hero-maps',
    },
    {
      title: 'Weather Dashboard',
      description:
        'An app using JQuery and Bulma stylesheets to find and manage weather locations',
      features: 'JQuery JavaScript HTML CSS',
      deployment:
        'https://esimondet.github.io/challenge-six-weather-dashboard/',
      github: 'https://github.com/esimondet/challenge-six-weather-dashboard',
    },
    {
      title: 'Workday Scheduler',
      description: 'A simple calendar app for scheduling your work day',
      features: 'JQuery JavaScript HTML CSS',
      deployment:
        'https://esimondet.github.io/challenge-five-work-day-scheduler/',
      github: 'https://github.com/esimondet/challenge-five-work-day-scheduler',
    },
  ]);

  const [currentProject, setCurrentProject] = useState();

  const toggleModal = (project, i) => {
    setCurrentProject({ ...project, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <h1 className="title has-text-centered"> Projects </h1>
      <div>
        {isModalOpen && (
          <Modal currentProject={currentProject} onClose={toggleModal} />
        )}
        <div>
          {projects.map((project, i) => (
            <img
              src={require(`../../assets/images/${project.title}.png`)}
              alt={project.title}
              // className=''
              onClick={() => toggleModal(project, i)}
              key={project.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
