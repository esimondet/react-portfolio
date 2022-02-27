import React, { useState } from 'react';

const Portfolio = () => {
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
      languages: 'Node.js mysql2',
      deployment: '',
      github: 'https://github.com/esimondet/employee-tracker',
    },
    {
      title: 'Note Taker',
      description:
        'A note taking app that uses Express.js to host a local database over Heroku pages',
      languages: 'Express.js JavaScript CSS HTML',
      deployment: 'https://expressjs-notetaker-app.herokuapp.com/',
      github: 'https://github.com/esimondet/notetaker-app',
    },
    {
      title: 'Turing Quiz',
      description:
        'A just for fun browser-based quiz on the influential Alan Turing',
      languages: 'JavaScript HTML CSS',
      deployment: 'https://esimondet.github.io/turing-quiz/',
      github: 'https://github.com/esimondet/turing-quiz',
    },
    {
      title: 'Hero Maps',
      description: 'An exploration of the Marvel API and Google Maps Platforms',
      languages: 'JavaScript HTML CSS',
      deployment: 'https://esimondet.github.io/hero-maps/',
      github: 'https://github.com/esimondet/hero-maps',
    },
    {
      title: 'Weather Dashboard',
      description:
        'An app using JQuery and Bulma stylesheets to find and manage weather locations',
      languages: 'JQuery JavaScript HTML CSS',
      deployment:
        'https://esimondet.github.io/challenge-six-weather-dashboard/',
      github: 'https://github.com/esimondet/challenge-six-weather-dashboard',
    },
    {
      title: 'Workday Scheduler',
      description: 'A simple calendar app for scheduling your work day',
      languages: 'JQuery JavaScript HTML CSS',
      deployment:
        'https://esimondet.github.io/challenge-five-work-day-scheduler/',
      github: 'https://github.com/esimondet/challenge-five-work-day-scheduler',
    },
  ]);

  return (
    <div>
      <h1> Projects </h1>
    </div>
  );
};

export default Portfolio;
