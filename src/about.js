import Skills from './skills';
import React, { useState } from 'react';
import Modal from 'react-modal';

function About() {
  const [modalState, setModalIsOpen] = useState(false);

  const setModalIsOpenToTrue = () => {
    setModalIsOpen(true);
    console.log(modalState);
  };

  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false);
  };

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '90vw',
      height: '70vh',
      backgroundColor: '#12171c',
    },
    overlay: {
      zIndex: 9999,
      background: 'rgba(150, 150, 150, 0.75)',
    },
  };

  return (
    <div className="aboutContainer">
      <div className="headerContainer">
        <h1 className="header"> About </h1>
      </div>
      <div className="aboutContent">
        <p className="aboutText">
          I am fullstack software engineer from New Jersey {'\n'}specializing in
          React, Node, Express, and PostgreSQL. {'\n'}I have a passion for web
          development, learning, and solving{'\n'}unique problems using modern
          technologies.{'\n'}I am always striving to improve and create high
          quality projects!
        </p>
        <button
          className="aboutBtn"
          onClick={() => {
            setModalIsOpenToTrue();
          }}
        >
          Skills
        </button>
      </div>
      <Modal
        isOpen={modalState}
        style={customStyles}
        closeTimeoutMS={500}
        onRequestClose={
          setModalIsOpenToFalse
          /* Function that will be run when the modal is requested
          to be closed (either by clicking on overlay or pressing ESC).
          Note: It is not called if isOpen is changed by other means. */
        }
      >
        <button onClick={setModalIsOpenToFalse}>x</button>
        <Skills />
      </Modal>
    </div>
  );
}

export default About;
