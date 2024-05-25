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
        <div className="home-card-left">
          <img src="background1.jpeg" alt="Home Card Left" className="home-card-image-small1" />
          <div> <h3>Title</h3>
           <h1>Description</h1>
           <p className="home-card-text1">Left Text</p>
         </div>
        </div>

        <div className="home-card-right">
        <div>
          <h3>Title</h3>
          <h1>Description</h1>
          <p className="home-card-text2">Quality</p>
        </div>
          <img src="background1.jpeg" alt="Home Card Right" className="home-card-image-small2" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
