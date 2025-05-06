import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./components.css";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    alert(`Thank you for subscribing with: ${email}`);
    setEmail("");
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Iman.</h3>
            <p className="footer-description">
              Crafting elegant digital experiences with passion and precision.
              Let's build something amazing together.
            </p>
          </div>

          <div className="footer-section">
            <h3 className="footer-subtitle">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about" className="footer-link">About</Link></li>
              <li><Link to="/projects" className="footer-link">Projects</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-subtitle">Connect</h3>
            <div className="social-links">
              <a href="https://github.com/Iman-13" className="social-link"> GitHub</a>
              <a href="https://www.facebook.com/emmanuel.aviles.629348" className="social-link">Facebook</a>
              <a href="tel:0970-844-7594" className="social-link">0970-844-7594</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Iman. All rights reserved. </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;