import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Login from "./components/login";
import About from './components/About';

import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        {/* Rendering Navbar component here */}
        <Navbar />

        {/* Setting up Routes for different pages */}
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <footer>
          <p>&copy; 2024 School Name. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

// Rendering main page component
const MainPage = () => {
  return (
    <main className="main-content">
      <h1>School Name</h1>
      <h2>Events</h2>
      <div className="events-container">
        <div className="event-card">
          <div className="event-image">Picture Goes Here</div>
          <div className="event-details">
            <h3>Event Name</h3>
            <p>Blurb of the event is written with all the information put in by the admin.</p>
          </div>
        </div>
        <div className="event-card">
          <div className="event-image">Picture Goes Here</div>
          <div className="event-details">
            <h3>Event Name</h3>
            <p>Blurb of the event is written with all the information put in by the admin.</p>
          </div>
        </div>
        <div className="event-card">
          <div className="event-image">Picture Goes Here</div>
          <div className="event-details">
            <h3>Event Name</h3>
            <p>Blurb of the event is written with all the information put in by the admin.</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
