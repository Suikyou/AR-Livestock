import React, { useState } from 'react';
import './CSS/Dashboard.css';
import AnimatedSidebar from './AnimatedSidebar';

const Dashboard = () => {
  const [modalText, setModalText] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleImageClick = (text) => {
    setModalText(text);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleButtonClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div className="dashboard-container">
      <AnimatedSidebar />
      
      <div className="content">
        <h2 className="dashboard-title">Dashboard</h2>

        <div className="image-card" onClick={() => handleImageClick("The cow, a staple in many agricultural settings, is valued for its milk, meat, and other by-products. With its gentle demeanor and sturdy build, the cow symbolizes abundance and sustenance.")}>
          <img src="cow1.png" alt="Image 1" />
          <h2>Cow</h2>
          <p>price</p>
          <p>Image 1 Description</p>
          <button className="add-to-cart" onClick={handleButtonClick}>Add to Cart</button>
        </div>

        <div className="image-card" onClick={() => handleImageClick("The pig known for its intelligence and adaptability. Pigs are raised for their high-quality meat, bacon, and various cuts enjoyed worldwide.")}>
          <img src="poultry1.png" alt="Image 2" />
          <h2>Poultry</h2>
          <p>price</p>
          <p>Image 2 Description</p>
          <button className="add-to-cart" onClick={handleButtonClick}>Add to Cart</button>
        </div>

        <div className="image-card" onClick={() => handleImageClick("Poultry farming is renowned for its efficiency and versatility, providing eggs and meat to millions globally.")}>
          <img src="pig1.png" alt="Image 3" />
          <h2>Pig</h2>
          <p>price</p>
          <p>Image 3 Description</p>
          <button className="add-to-cart" onClick={handleButtonClick}>Add to Cart</button>
        </div>

        <div className="image-card" onClick={() => handleImageClick("The cow, a staple in many agricultural settings, is valued for its milk, meat, and other by-products. With its gentle demeanor and sturdy build, the cow symbolizes abundance and sustenance.")}>
          <img src="cow1.png" alt="Image 4" />
          <h2>Cow</h2>
          <p>price</p>
          <p>Image 4 Description</p>
          <button className="add-to-cart" onClick={handleButtonClick}>Add to Cart</button>
        </div>

        <div className="image-card" onClick={() => handleImageClick("The cow, a staple in many agricultural settings, is valued for its milk, meat, and other by-products. With its gentle demeanor and sturdy build, the cow symbolizes abundance and sustenance.")}>
          <img src="cow1.png" alt="Image 5" />
          <h2>Cow</h2>
          <p>price</p>
          <p>Image 5 Description</p>
          <button className="add-to-cart" onClick={handleButtonClick}>Add to Cart</button>
        </div>

        <div className="image-card" onClick={() => handleImageClick("The cow, a staple in many agricultural settings, is valued for its milk, meat, and other by-products. With its gentle demeanor and sturdy build, the cow symbolizes abundance and sustenance.")}>
          <img src="poultry1.png" alt="Image 6" />
          <h2>Cow</h2>
          <p>price</p>
          <p>Image 6 Description</p>
          <button className="add-to-cart" onClick={handleButtonClick}>Add to Cart</button>
        </div>

        {showModal && (
          <div className="modal" onClick={closeModal}>
            <div className="modal-content">
              <span className="close" onClick={closeModal}>&times;</span>
              <p>{modalText}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
