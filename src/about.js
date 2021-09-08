import Skills from './skills';
import React, { useState } from 'react';
import Modal from 'react-modal';

function About({ isVisible }) {
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
        <p className="aboutConHead">
          I am a full stack software engineer from New Jersey.
        </p>
        <p className="aboutConBody">
          I specialize in web development utilizing React, Node, Express, and
          PostgreSQL. I enjoy breaking complex problems down into simple
          solutions, and delivering elegant front end experiences. I am always
          striving to improve, learn, and write professional code. While I'm not
          coding, I enjoy playing video games, being active, and reading.
        </p>
        <p className="aboutConFoot">Check out the technologies I work with:</p>
        <button
          className="aboutBtn"
          onClick={() => {
            setModalIsOpenToTrue();
          }}
        >
          <img
            src="https://icongr.am/fontawesome/code.svg?size=128&color=ffffff"
            alt="skillsButton"
          />
        </button>
      </div>
      <Modal
        isOpen={modalState}
        style={customStyles}
        closeTimeoutMS={500}
        onRequestClose={setModalIsOpenToFalse}
      >
        <div className="modalClose">
          <button onClick={setModalIsOpenToFalse}>
            <img
              src={'https://icongr.am/clarity/close.svg?size=128&color=1d2227'}
              alt="close"
            />
          </button>
        </div>
        <Skills />
      </Modal>
    </div>
  );
}

export default About;
