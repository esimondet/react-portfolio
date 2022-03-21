import React from 'react';

const Modal = ({ onClose, currentProject }) => {
  const { title, description, features, deployment, github } = currentProject;

  return (
    <>
      <div id='projectModal' className='modal is-active'>
        <div className='modal-background'></div>
        <div className='modal-card'>
          <header className='modal-card-head jonquil '>
            <p className='modal-card-title '> {title} </p>
            <button
              onClick={onClose}
              className='delete'
              aria-label='close'
            ></button>
          </header>
          <section className='modal-card-body background'>
            <img
              src={require(`../../assets/images/${title}.png`)}
              alt={title}
              className='box'
            />
            <div>
              <h3 className='title is-4 has-text-centered font'>{title}</h3>
              <p>{description}</p>
              <br></br>
              <div>
                <ul className='tags'>
                  {features.map((feature) => (
                    <li className='tag'>{feature}</li>
                  ))}
                </ul>
                <br></br>
              </div>
              <div className='columns'>
                <div className='has-text-centered column'>
                  <a
                    href={deployment}
                    rel='noopener noreferrer'
                    target='_blank'
                    className='box'
                  >
                    Live Deployment
                  </a>
                </div>
                <div className='has-text-centered column'>
                  <a
                    href={github}
                    rel='noopener noreferrer'
                    target='_blank'
                    className='box'
                  >
                    GitHub Repository
                  </a>
                </div>
              </div>
            </div>
          </section>
          <footer className='modal-card-foot jonquil'>
            <button
              onClick={onClose}
              type='button'
              className='button background font'
            >
              Back
            </button>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Modal;
