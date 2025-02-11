import React from 'react';
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="logo-container">
        <img src="/logo.png" alt="LaslesVPN Logo" className="logo" />
        <h1>Lasles<span className="bold">VPN</span></h1>
      </div>
      <nav>
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
