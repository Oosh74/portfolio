import './App.css';
import React from 'react';
import ParticleComponent from './particle-container';
import Navbar from './navbar';
import About from './about';

function App() {
  return (
    <div>
      {/* ----Navbar----- */}
      <Navbar />
      {/* ----Landing Page----- */}
      <div className="welcome">
        <div className="wecolmeText">
          Hello, world! I'm <span className="inlineColor"> Jared Usher</span>.
          <br />
          I'm a <span className="inlineColor">software engineer</span>.
        </div>
      </div>
      <ParticleComponent />
      {/* ----About----- */}
      <About />
      {/* ----Portfolio----- */}
      <div className="portfolioContainer"> </div>
      <h1 className="header"> PORTFOLIO</h1>
      {/* ----Contact/Footer----- */}
      <div className="contactContainer"> </div>
      <h1 className="header"> CONTACT </h1>
    </div>
  );
}

export default App;
