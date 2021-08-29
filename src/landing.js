import ParticleComponent from './particle-container';

function Landing() {
  const handleClick = () => {
    window.scrollTo({
      top: 1329,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="welcomeContainer">
      <div className="particlesWrapper">
        <ParticleComponent />
      </div>
      <div className="welcomeContent">
        <div className="welcomeText">
          Hi there! I'm <span className="inlineColor"> Jared Usher</span>.
          <br />
          <span className="subHeader"> Fullstack Software Engineer</span>.
        </div>
        <button
          className="welcomeButton"
          id="buttonAnim"
          onClick={() => handleClick()}
        >
          <div id="colorAnim"></div>
          <div className="buttonText">See My Work</div>
          <img
            className="buttonArrow"
            src={
              'https://icongr.am/octicons/arrow-down.svg?size=25&color=ffffff'
            }
            alt="arrow"
          />
        </button>
      </div>
    </div>
  );
}

export default Landing;
