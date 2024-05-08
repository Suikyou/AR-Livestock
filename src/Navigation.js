//import needed components
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  // Check if the current location is the home page
  const isHomePage = location.pathname === '/';

  // Check if the current location is the login page
  const isLoginPage = location.pathname === '/login';
  

  return (
    <div>
      {/* Render only the login link on the home page */}
      {isHomePage && <Link to="/login">Login</Link>}
      {/* Render the back button and "goto Dash" link on the login page */}
      
      {/* Only render these links if user is not on the homepage and is not on the login page */}
      {!isHomePage && !isLoginPage &&(
        <div>
          <Link to="/about">About</Link>
          <Link to="/transactions">Transactions</Link>
          <Link to="/">
            <button>Logout</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navigation;
