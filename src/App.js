import './App.css';
import ParticleComponent from './particle-container';
import Navbar from './navbar';
import About from './about';
import Portfolio from './portfolio';
import Contact from './contact';
import Landing from './landing';

function App() {
  return (
    <div>
      {/* ----Navbar----- */}
      <Navbar />
      {/* ----Landing Page----- */}
      <Landing />
      <ParticleComponent />
      {/* ----About----- */}
      <About />
      {/* ----Portfolio----- */}
      <Portfolio />
      {/* ----Contact/Footer----- */}
      <Contact />
    </div>
  );
}

export default App;
