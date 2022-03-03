import React from 'react';

const Modal = ({ onClose, currentProject }) => {
  const { title, description, features, deployment, github } = currentProject;

  return (
    <>
      <div id="projectModal" className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title"> {title} </p>
            <button
              onClick={onClose}
              className="delete"
              aria-label="close"
            ></button>
          </header>
          <section className="modal-card-body">
            <img
              src={require(`../../assets/images/${title}.png`)}
              alt={title}
            />
            <div>
              {description}
              {features}
              {deployment}
              {github}
            </div>
          </section>
          <footer className="modal-card-foot">
            <button onClick={onClose} type="button" className="button">
              Back
            </button>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Modal;
