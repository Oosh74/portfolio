import socketLogo from './socketio_transparent.png';
import reduxLogo from './redux.png';

function Skills() {
  return (
    <div className="skillsContainer">
      <div className="imageGrid">
        <div className="imageContainer">
          <p> JavaScript </p>
          <img
            src={
              'https://icongr.am/devicon/javascript-original.svg?size=75&color=000000                '
            }
            alt="javascript"
          />
        </div>
        <div className="imageContainer">
          <p> React </p>
          <img
            src={
              'https://icongr.am/devicon/react-original.svg?size=75&color=000000'
            }
            alt="react"
          />
        </div>
        <div className="imageContainer">
          <p> Express </p>

          <img
            src={
              'https://icongr.am/devicon/express-original-wordmark.svg?size=75&color=000000'
            }
            alt="express"
          />
        </div>
        <div className="imageContainer">
          <p> Node </p>
          <img
            src={
              'https://icongr.am/devicon/nodejs-original.svg?size=75&color=000000'
            }
            alt="node"
          />
        </div>
        <div className="imageContainer">
          <p> PostgreSQL </p>
          <img
            src={
              'https://icongr.am/devicon/postgresql-original.svg?size=75&color=000000'
            }
            alt="postgresql"
          />
        </div>
        <div className="imageContainer">
          <p> Sequelize </p>
          <img
            src={
              'https://icongr.am/devicon/sequelize-original.svg?size=75&color=000000'
            }
            alt="sequelize"
          />
        </div>
        <div className="imageContainer">
          <p> Git </p>
          <img
            src={
              'https://icongr.am/devicon/git-original.svg?size=75&color=000000'
            }
            alt="git"
          />
        </div>
        <div className="imageContainer">
          <p> Heroku </p>
          <img
            src={
              'https://icongr.am/devicon/heroku-original.svg?size=75&color=000000'
            }
            alt="heroku"
          />
        </div>
        <div className="imageContainer">
          <p> HTLM5 </p>
          <img
            src={
              'https://icongr.am/devicon/html5-original.svg?size=75&color=000000'
            }
            alt="html"
          />
        </div>
        <div className="imageContainer">
          <p> CSS3 </p>
          <img
            src={
              'https://icongr.am/devicon/css3-original.svg?size=75&color=000000'
            }
            alt="css"
          />
        </div>
        <div className="imageContainer">
          <p> Socket.IO </p>
          <img src={socketLogo} alt="socketio" />
        </div>
        <div className="imageContainer">
          <p> Redux </p>
          <img src={reduxLogo} alt="redux" />
        </div>
        <div className="imageContainer">
          <p> Github </p>
          <img
            src={
              'https://icongr.am/devicon/github-original.svg?size=75&color=currentColor'
            }
            alt="github"
          />
        </div>
        <div className="imageContainer">
          <p> Bootstrap </p>
          <img
            src={
              'https://icongr.am/devicon/bootstrap-plain.svg?size=75&color=currentColor'
            }
            alt="bootstrap"
          />
        </div>
      </div>
    </div>
  );
}

export default Skills;
