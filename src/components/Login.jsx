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
        <form>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
          </div>

          <button className="login-btn" type="submit">Log in</button>
        </form>
        <Link to="/" className="back-btn">&#8592; Back</Link>
      </div>
    </div>
  );
};

export default Login;
