import React from 'react';
import './CSS/Navigation.css';
import './CSS/Transaction.css';
import AnimatedSidebar from './AnimatedSidebar';

const TransactionsPage = () => {
  return (
    <div>
      <AnimatedSidebar />
      <h2>Transactions</h2>
      <p>This is the transactions page</p>

      <div className="product-container">
        <div className="product">
          <div>
            <div className="image-card">
              <img src="pig1.png" alt="Product 1" />
              <h2>Piggy</h2>
              <p>5,000php</p>
              <p>This is a pig!</p>
            </div>
          </div>
          <div className="product-details">
            <div className="product-info">
              <h1>Piggy 1</h1>
              <div className="quantity-selector">
                <label htmlFor="quantity1">Quantity:</label>
                <input type="number" id="quantity1" name="quantity1" min="1" />
              </div>
              <div className="buttons-container">
                <button className="add-to-cart">Add to Cart</button>
                <button className="buy-now">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="product">
          <div>
            <div className="image-card">
              <img src="cow1.png" alt="Product 2" />
              <h2>Piggy</h2>
              <p>5,000php</p>
              <p>This is a pig!</p>
            </div>
          </div>
          <div className="product-details">
            <div className="product-info">
              <h1>Piggy 2</h1>
              <div className="quantity-selector">
                <label htmlFor="quantity2">Quantity:</label>
                <input type="number" id="quantity2" name="quantity2" min="1" />
              </div>
              <div className="buttons-container">
                <button className="add-to-cart">Add to Cart</button>
                <button className="buy-now">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="buttons-container">
        <button className="buy-all">Buy All!</button>
      </div>

    </div>
  );
};

export default TransactionsPage;
