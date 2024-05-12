import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-background">
      <h2 className="dashboard-title">Dashboard</h2>
      <p>This is the dashboard</p>

      <div className="image-container">
        <div className="image1-dash">
          <img src="cow1.png" alt="Image 1" />
        </div>

        <div className="image2-dash-container">
          <div className="image2-dash">
            <img src="poultry1.png" alt="Image 2" />
          </div>
          <div className="text-on-right">
            <h3>Image 2</h3>
            <p>This is the description for Image 2.</p>
          </div>
        </div>

        <div className="image3-dash-container">
          <div className="text-on-left">
            <h3>Image 3</h3>
            <p>This is the description for Image 3.</p>
          </div>
          <div className="image3-dash">
            <img src="pig1.png" alt="Image 3" />
          </div>
        </div>
      </div>
      <div className="footer">
        <p>© 2024 Your Company. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Dashboard;