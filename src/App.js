import './App.css';
import ParticleComponent from './particle-container';
import Navbar from './navbar';

function App() {
  return (
    <div>
      {/* ----Navbar----- */}
      <Navbar />
      {/* ----Landing Page----- */}
      <div className="welcome">
        <div className="wecoleText">
          Hello, I'm <span className="inlineColor"> Jared Usher</span>.
          <br />I am a <span className="inlineColor">software engineer</span>.
        </div>
      </div>
      <ParticleComponent />
      {/* ----About----- */}
      <div className="aboutContainer"> ABOUT </div>
      {/* ----Portfolio----- */}
      <div className="portfolioContainer"> PORTFOLIO </div>
      {/* ----Contact/Footer----- */}
      <div className="contactContainer"> CONTACT </div>
    </div>
  );
}

export default App;
