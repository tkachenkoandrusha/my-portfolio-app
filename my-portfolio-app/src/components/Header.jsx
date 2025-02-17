import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="logo-container">
        <img src="/logo.png" alt="LaslesVPN Logo" className="logo" />
        <h1>
          Lasles<span className="bold">VPN</span>
        </h1>
      </div>

      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>

      <nav className={`nav-menu ${menuOpen ? "show" : ""}`}>
        <ul>
          <li><Link to="/">About</Link></li>
          <li><Link to="features">Features</Link></li>
          <li><Link to="pricing">Pricing</Link></li>
          <li><Link to="testimonials">Testimonials</Link></li>
          <li><Link to="help">Help</Link></li>
        </ul>
      </nav>

      <div className="auth-links">
        <button className="sign-in">Sign In</button>
        <button className="sign-up-btn">Sign Up</button>
      </div>
    </header>
  );
}

export default Header;
