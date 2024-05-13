import React from 'react';
import './Navigation.css';
import './Transaction.css';

const TransactionsPage = () => {
  return (
    <div>
      <h2>Transactions</h2>
      <p>This is the transactions page</p>

      <div className="product-container">
        <div className="product-image-container">
          <div className="product-image">
            <img src="pig1.png" alt="Product" />
          </div>
        </div>
        
        <div className="product-details">
          <h1>Piggy</h1>
          <h2>5,000php</h2>
          <h3>This is a pig!</h3>
          
          <div className="quantity-selector">
            <label for="quantity">Quantity:</label>
            <input type="number" id="quantity" name="quantity" min="1" />
          </div>

          <div className="buttons-container">
            <button className="add-to-cart">Add to Cart</button>
            <button className="buy-now">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionsPage;