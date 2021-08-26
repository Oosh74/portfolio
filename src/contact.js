function Contact() {
  const handleClick = (link) => {
    if (link) {
      window.open(link);
    } else {
      window.location = 'mailto:usherjared@yahoo.com';
    }
  };

  return (
    <div className="contactContainer">
      <div className="headerContainer">
        <h1 className="header"> CONTACT </h1>
      </div>
      <p>
        Feel free to reach out if you are interested in working together,
        {'\n'} have any questions, or just want to connect. {'\n'} I am
        currently seeking new opportunities.
      </p>
      <div className="emailBtnCntr">
        <button className="contactBtn" onClick={() => handleClick()}>
          <div className="contactBtnText"> usherjared@yahoo.com </div>
          <img
            src={
              'https://icongr.am/octicons/mail.svg?size=25&color=currentColor'
            }
            alt="email"
          />
        </button>
      </div>
      <div className="socailsBtnCntr">
        <button onClick={() => handleClick('https://twitter.com/j_ushr')}>
          <img
            src={
              'https://icongr.am/devicon/twitter-original.svg?size=128&color=currentColor'
            }
            alt="twitter"
          />
        </button>
        <button onClick={() => handleClick('https://github.com/Oosh74')}>
          <img
            src={'https://icongr.am/feather/github.svg?size=128&color=ffffff'}
            alt="gitHub"
          />
        </button>
        <button
          onClick={() => handleClick('https://www.linkedin.com/in/jaredusher/')}
        >
          <img
            src={
              'https://icongr.am/devicon/linkedin-original.svg?size=128&color=currentColor'
            }
            alt="linkedIn"
          />
        </button>
      </div>
    </div>
  );
}

export default Contact;
