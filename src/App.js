import './App.css';
import Navbar from './navbar';
import About from './about';
import Portfolio from './portfolio';
import Contact from './contact';
import Landing from './landing';
import { useRef } from 'react';

function App() {
  const headerRef = useRef(null);
  const landingRef = useRef(null);
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = [
    { section: 'Landing', ref: landingRef },
    { section: 'About', ref: aboutRef },
    { section: 'Portfolio', ref: portfolioRef },
    { section: 'Contact', ref: contactRef },
  ];

  return (
    <div className="wrapper">
      {/* ----Navbar----- */}
      <Navbar props={sectionRefs} headerProp={headerRef} />
      {/* ----Landing Page----- */}
      <div ref={landingRef}>
        <Landing portfolioProp={portfolioRef} />
      </div>
      {/* ----About----- */}
      <div ref={aboutRef}>
        <About />
      </div>
      {/* ----Portfolio----- */}
      <div ref={portfolioRef}>
        <Portfolio />
      </div>
      {/* ----Contact/Footer----- */}
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
}

export default App;
