function Portfolio() {
  return (
    <div className="portfolioContainer">
      <div className="headerContainer">
        <h1 className="header"> PORTFOLIO </h1>
      </div>
      {/*CARD START*/}
      <div className="cardContainer">
        {/*CARD START*/}
        <div className="card">
          <div className="cardProfile">
            <img
              src={
                'https://icongr.am/devicon/react-original.svg?size=75&color=000000'
              }
              alt="react"
            />
          </div>
          <div className="cardBanner"></div>
          <div className="cardTitle">
            <h1> BookShopper </h1>
          </div>
          <div className="cardContent">
            <p>A mock e-commerce website featuring books.</p>
          </div>
          <div className="cardBtnCont">
            <button className="cardBtn">GitHub</button>
            <button className="cardBtn">Project</button>
          </div>
        </div>
        {/*CARD END*/}
        {/*CARD START*/}
        <div className="card">
          <div className="cardProfile">
            <img
              src={
                'https://icongr.am/devicon/react-original.svg?size=75&color=000000'
              }
              alt="react"
            />
          </div>
          <div className="cardBanner"></div>
          <div className="cardTitle">
            <h1> Data Dash </h1>
          </div>
          <div className="cardContent">
            <p>
              A data dashboard that allows the user to retrieve and visual a
              data set.
            </p>
          </div>
          <div className="cardBtnCont">
            <button className="cardBtn">GitHub</button>
            <button className="cardBtn">Project</button>
          </div>
        </div>
        {/*CARD END*/}
        {/*CARD START*/}
        <div className="card">
          <div className="cardProfile">
            <img
              src={
                'https://icongr.am/devicon/react-original.svg?size=75&color=000000'
              }
              alt="react"
            />
          </div>
          <div className="cardBanner"></div>
          <div className="cardTitle">
            <h1> DrawBit </h1>
          </div>
          <div className="cardContent">
            <p>
              A realtime multiplayer progressive web application inspired by the
              game pictionary.
            </p>
          </div>
          <div className="cardBtnCont">
            <button className="cardBtn">GitHub</button>
            <button className="cardBtn">Project</button>
          </div>
        </div>
        {/*CARD END*/}
      </div>
    </div>
  );
}

export default Portfolio;
