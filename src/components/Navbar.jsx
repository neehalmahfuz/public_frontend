import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.avif';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img className="logo" src={logo} alt="Logo" /> School Name
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown">
                Curriculum
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/curriculum1">Curriculum 1</Link></li>
                <li><Link className="dropdown-item" to="/curriculum2">Curriculum 2</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown">
                Enrolment
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/enrolment1">Enrolment 1</Link></li>
                <li><Link className="dropdown-item" to="/enrolment2">Enrolment 2</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown">
                Contact Us
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/contact1">Contact 1</Link></li>
                <li><Link className="dropdown-item" to="/contact2">Contact 2</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown">
                News and Events
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/news">News</Link></li>
                <li><Link className="dropdown-item" to="/events">Events</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
          <Link to="/login" className="login-btn">
            Log in
          </Link>
        </div>
      </div>
    </nav>
  );
}
