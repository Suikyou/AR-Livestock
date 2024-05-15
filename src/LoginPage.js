import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CSS/LoginPage.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div>
      <div className="login-form-container">
        <div className="login-form">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
          <p>Forgot your password? Click <a href="#">here</a>.</p>
        </div>
      </div>

      {/* Link to Dashboard */}
      <Link to="/dashboard">
        <button className="goto-dash">Go to Dashboard</button>
      </Link>
        
      <div className="social-links">
        <p className="follow-us">Follow Us</p>
        <div className="social-link">
          <img src="facebook.png" alt="Facebook" />
        </div>
        <div className="social-link">
          <img src="twitter.png" alt="Twitter" />
        </div>
        <div className="social-link">
          <img src="google.png" alt="Google" />
        </div>
      </div>

      <div className="footer">
        <p>© 2024 Your Company. All rights reserved.</p>
      </div>
    </div>
  );
};

export default LoginPage;
