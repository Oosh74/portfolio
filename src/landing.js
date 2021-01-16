function Landing() {
  return (
    <div className="welcome">
      <div className="welcomeText">
        Hello, world! I'm <span className="inlineColor"> Jared Usher</span>.
        <br />
        <span className="subHeader"> Fullstack Software Engineer</span>.
      </div>
      <div className="welcomeButtonContainer">
        <div class="welcomeButton" id="buttonAnim">
          <div id="circle"></div>
          <div className="buttonText">See My Work</div>
          <img
            className="buttonArrow"
            src={
              'https://icongr.am/octicons/arrow-down.svg?size=25&color=ffffff'
            }
            alt="arrow"
          />
        </div>
      </div>
    </div>
  );
}

export default Landing;
