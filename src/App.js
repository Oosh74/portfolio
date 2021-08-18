import './App.css';
import Navbar from './navbar';
import About from './about';
import Portfolio from './portfolio';
import Contact from './contact';
import Landing from './landing';

function App() {
  return (
    <div className="wrapper">
      {/* ----Navbar----- */}
      <Navbar />
      {/* ----Landing Page----- */}
      <Landing />
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
