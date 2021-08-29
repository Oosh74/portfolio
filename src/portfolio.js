import bookShopper from './images/bookshoppericon.png';
import drawBit from './images/drawbiticon.png';
import dataDash from './images/datadashicon.png';

function Portfolio() {
  const handleClick = (link) => {
    window.open(link);
  };

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
            <img src={bookShopper} alt="bookshopper" />
          </div>
          <div className="cardBanner"></div>
          <div className="cardTitle">
            <h1> BookShopper </h1>
          </div>
          <div className="cardContent">
            <p>A mock e-commerce website featuring books.</p>
          </div>
          <div className="cardBtnCont">
            <button
              className="cardBtn"
              onClick={() =>
                handleClick(
                  'https://github.com/Crafty-Cranberries/Book-Shopper'
                )
              }
            >
              GitHub
            </button>
            <button
              className="cardBtn"
              onClick={() => handleClick('https://book-shopper.herokuapp.com/')}
            >
              Project
            </button>
          </div>
        </div>
        {/*CARD END*/}
        {/*CARD START*/}
        <div className="card">
          <div className="cardProfile">
            <img src={dataDash} alt="dataDash" />
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
            <button
              className="cardBtn"
              onClick={() =>
                handleClick('https://github.com/Oosh74/Data_Dashboard')
              }
            >
              GitHub
            </button>
            <button
              className="cardBtn"
              onClick={() =>
                handleClick('https://visualdatadash.herokuapp.com/')
              }
            >
              Project
            </button>
          </div>
        </div>
        {/*CARD END*/}
        {/*CARD START*/}
        <div className="card">
          <div className="cardProfile">
            <img src={drawBit} alt="drawBit" />
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
            <button
              className="cardBtn"
              onClick={() =>
                handleClick('https://github.com/Metallic-Bees/DrawBit')
              }
            >
              GitHub
            </button>
            <button
              className="cardBtn"
              onClick={() => handleClick('https://drawbit.herokuapp.com/')}
            >
              Project
            </button>
          </div>
        </div>
        {/*CARD END*/}
      </div>
    </div>
  );
}

export default Portfolio;
