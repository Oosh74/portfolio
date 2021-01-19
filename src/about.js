import socketLogo from './socketio_128x128.png';
import reduxLogo from './redux.png';

function About() {
  return (
    <div className="aboutContainer">
      <div className="headerContainer">
        <h1 className="header"> About </h1>
      </div>
      <div className="aboutContent">
        <div className="aboutTextCont">
          <p className="aboutText">
            I am fullstack software engineer from New Jersey {'\n'}specializing
            in React, Node, Express, and PostgreSQL. {'\n'}I have a passion for
            webdevelopment, learning, and solving{'\n'}unique problems using
            modern technologies.{'\n'}I am always striving to improve and create
            high quality projects!
          </p>
          {/* <div> PLACEHOLDER </div> */}
        </div>
        <div className="imageGrid">
          <div className="imageContainer">
            <img
              src={
                'https://icongr.am/devicon/javascript-original.svg?size=75&color=000000                '
              }
              alt="javascript"
            />
          </div>
          <div className="imageContainer">
            <img
              src={
                'https://icongr.am/devicon/react-original.svg?size=75&color=000000'
              }
              alt="react"
            />
          </div>
          <div className="imageContainer">
            <img
              src={
                'https://icongr.am/devicon/express-original-wordmark.svg?size=75&color=000000'
              }
              alt="express"
            />
          </div>{' '}
          <div className="imageContainer">
            <img
              src={
                'https://icongr.am/devicon/nodejs-original.svg?size=75&color=000000'
              }
              alt="node"
            />
          </div>{' '}
          <div className="imageContainer">
            <img
              src={
                'https://icongr.am/devicon/postgresql-original.svg?size=75&color=000000'
              }
              alt="postgresql"
            />
          </div>{' '}
          <div className="imageContainer">
            <img
              src={
                'https://icongr.am/devicon/sequelize-original.svg?size=75&color=000000'
              }
              alt="sequelize"
            />
          </div>{' '}
          <div className="imageContainer">
            <img
              src={
                'https://icongr.am/devicon/git-original.svg?size=75&color=000000'
              }
              alt="git"
            />
          </div>{' '}
          <div className="imageContainer">
            <img
              src={
                'https://icongr.am/devicon/heroku-original.svg?size=75&color=000000'
              }
              alt="heroku"
            />
          </div>{' '}
          <div className="imageContainer">
            <img
              src={
                'https://icongr.am/devicon/html5-original.svg?size=75&color=000000'
              }
              alt="html"
            />
          </div>{' '}
          <div className="imageContainer">
            <img
              src={
                'https://icongr.am/devicon/css3-original.svg?size=75&color=000000'
              }
              alt="css"
            />
          </div>{' '}
          <div className="imageContainer">
            <img src={socketLogo} alt="socketio" />
          </div>{' '}
          <div className="imageContainer">
            <img src={reduxLogo} alt="redux" />
          </div>{' '}
          <div className="imageContainer">
            <img
              src={
                'https://icongr.am/devicon/github-original.svg?size=75&color=currentColor'
              }
              alt="github"
            />
          </div>{' '}
          <div className="imageContainer">
            <img
              src={
                'https://icongr.am/devicon/bootstrap-plain.svg?size=75&color=currentColor'
              }
              alt="bootstrap"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
