import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navigate = useNavigate();

  const handleNavClick = (sectionId) => {
    navigate('/', { replace: true });
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <nav className="fixed-top navbar navbar-expand-lg bg-light">
      <Link className="navbar-brand" to="/" onClick={scrollToTop}>
        Ana Berrocal
      </Link>
      <button
        className="navbar-toggler dropdown"
        type="button"
        data-toggle="dropdown"
        data-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" id="navbarColor01"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/" onClick={scrollToTop}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <button 
              className="nav-link btn btn-link" 
              onClick={() => handleNavClick('experience')}
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            >
              Experience
            </button>
          </li>
          <li className="nav-item">
            <button 
              className="nav-link btn btn-link" 
              onClick={() => handleNavClick('about')}
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            >
              About
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
