function Landing() {
  const handleClick = () => {
    window.scrollTo({
      top: 625,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="welcome">
      <div className="welcomeText">
        Hello, world! I'm <span className="inlineColor"> Jared Usher</span>.
        <br />
        <span className="subHeader"> Fullstack Software Engineer</span>.
      </div>
      <div className="welcomeButtonContainer">
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
