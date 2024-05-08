//import needed components
import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <button type="submit">Login</button>
      </form>
      {/* Insert login logic here, validation, sanitization, etc. This part is still missing functionality */}
      {/* Button to navigate to Dashboard for navigation purposes only.*/}
      <Link to="/dashboard">
        <button>goto Dash</button>
      </Link>
    </div>
  );
};

export default LoginPage;
