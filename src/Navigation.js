import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './CSS/Navigation.css';

const Navigation = () => {
  const location = useLocation();

  // Check if the current location is the home page
  const isHomePage = location.pathname === '/';

  // Check if the current location is the login page
  const isLoginPage = location.pathname === '/login';

  // Check if the current location is the dashboard page
  const isDashboardPage = location.pathname === '/dashboard';

  return (
    <div className="navigation-container">
      <div className="navigation-buttons">
        {/* Render only the login button on the home page */}
        {isHomePage && (
          <button className="login-button">
            <Link to="/login" style={{ textDecoration: 'none' }}>Login</Link>
          </button>
        )}
        {/* Render the back button and "goto Dash" link on the login page */}
        {isLoginPage && (
          <div>
            <button className="back-button">
              <Link to="/" style={{ textDecoration: 'none' }}>Back</Link>
            </button>
            <Link to="/dashboard" className="nav-link dashboard-link">Dashboard</Link>
          </div>
        )}
        {/* Only render these links if user is not on the homepage and is not on the login page */}
        {!isHomePage &&!isLoginPage && (
          <div>
            <button className="login-button">
              <Link to="/about" style={{ textDecoration: 'none' }}>About</Link>
            </button>
            <button className="login-button">
              <Link to="/transactions" style={{ textDecoration: 'none' }}>Transactions</Link>
            </button>
            <button className="logout-button">
              <Link to="/" className="nav-link">Logout</Link>
            </button>
            {/* Render the dashboard link if user is not on the dashboard page */}
            {!isDashboardPage && 
            <Link to="/dashboard" className="nav-link dashboard-link">Dashboard</Link>}
          </div>
        )}
      </div>
    </div>
  );
  
};

export default Navigation;