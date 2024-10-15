import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.avif';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <img className="logo" src={logo} alt="Logo" />
        <h2>School Name Login</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>

        <a href="https://school-website-abrar.netlify.app/" className="login-btn">Log in</a>

        <Link to="/" className="back-btn">&#8592; Back</Link>
      </div>
    </div>
  );
};

export default Login;
