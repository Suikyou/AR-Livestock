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
        <div className="center-buttons">
          {/* Render the back button and "goto Dash" link on the login page */}
          {isLoginPage && (
            <>
              <button className="back-button">
                <Link to="/" style={{ textDecoration: 'none' }}>Back</Link>
              </button>
              <button className="dashboard-button">
                <Link to="/dashboard" className="nav-link dashboard-link">Dashboard</Link>
              </button>
            </>
          )}

          {/* Render other buttons if user is not on the homepage and is not on the login page */}
          {!isHomePage && !isLoginPage && (
            <>
              <button className="about-button">
                <Link to="/about" style={{ textDecoration: 'none' }}>About</Link>
              </button>
              <button className="transactions-button">
                <Link to="/transactions" style={{ textDecoration: 'none' }}>Transactions</Link>
              </button>
              {!isDashboardPage && (
                <button className="dashboard-button">
                  <Link to="/dashboard" className="nav-link dashboard-link">Dashboard</Link>
                </button>
              )}
            </>
          )}
        </div>

        <div className="right-buttons">
          {/* Render the login button on the home page */}
          {isHomePage && (
            <button className="login-button">
              <Link to="/login" style={{ textDecoration: 'none' }}>Login</Link>
            </button>
          )}

          {/* Render the logout button on all pages except the homepage and login page */}
          {!isHomePage && !isLoginPage && (
            <button className="logout-button">
              <Link to="/" className="nav-link">Logout</Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
