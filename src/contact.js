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
      <div className="contactSubCntr">
        <p className="contactSubText">
          Feel free to reach out if you are interested in working together,
          {'\n'} have any questions, or just want to connect. {'\n'} I am
          currently seeking new opportunities.
        </p>
      </div>
      <div className="emailBtnCntr">
        <button className="contactBtn" onClick={() => handleClick()}>
          <div className="contactBtnText"> usherjared@yahoo.com </div>
          <img
            className="contactBtnIcon"
            src="https://icongr.am/octicons/mail.svg?size=25&color=currentColor"
            alt="email"
          />
        </button>
      </div>
      <div className="socailsBtnCntr">
        <button onClick={() => handleClick('https://twitter.com/j_ushr')}>
          <div className="contactImgCntr">
            <img
              src={
                'https://icongr.am/devicon/twitter-original.svg?size=128&color=currentColor'
              }
              alt="twitter"
            />
          </div>
        </button>
        <button
          onClick={() => handleClick('https://www.linkedin.com/in/jaredusher/')}
        >
          <div className="contactImgCntr">
            <img
              src={
                'https://icongr.am/devicon/linkedin-original.svg?size=128&color=currentColor'
              }
              alt="linkedIn"
            />
          </div>
        </button>
        <button onClick={() => handleClick('https://github.com/Oosh74')}>
          <div className="contactImgCntr">
            <img
              src={
                'https://icongr.am/devicon/github-original.svg?size=128&color=currentColor'
              }
              alt="gitHub"
            />
          </div>
        </button>
      </div>
    </div>
  );
}

export default Contact;
