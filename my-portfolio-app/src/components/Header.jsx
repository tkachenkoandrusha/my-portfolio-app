import React from 'react';
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header>
      <h1>Lasles<span className="bold">VPN</span></h1> {/* "VPN" жирний, "Lasles" звичайний */}
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
        <Link to="sign_in">Sign In</Link>
        <Link to="sign_up">Sign Up</Link>
      </div>
    </header>
  );
}

export default Header;
