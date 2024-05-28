import React from 'react';
import './CSS/HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <div className="home-container-one">
        <div className="home-card">
          <img src="background1.jpeg" alt="Home Card" className="home-card-image" />
        </div>
      </div>

      <br></br>

      <div className="home-container-two">
        <div className="home-card-container">
          <div className="home-card-left">
            <div className="home-card-image-container">
              <img src="background1.jpeg" alt="Home Card Left" className="home-card-image-small1" />
            </div>
            <div className="home-card-text-container">
              <h3>Title</h3>
              <h1>Description</h1>
              <p className="home-card-text1">Left Text</p>
            </div>
          </div>
        </div>

        <br></br>
        <br></br>

        <div className="home-card-container">
          <div className="home-card-right">
            <div className="home-card-text-container">
              <h3>Title</h3>
              <h1>Description</h1>
              <p className="home-card-text2">Quality</p>
            </div>
            <div className="home-card-image-container">
              <img src="background1.jpeg" alt="Home Card Right" className="home-card-image-small2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;