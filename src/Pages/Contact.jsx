import React from "react";
import "./pages.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <h1 className="page-title">Contact</h1>
      <div className="contact-container">
        <div className="contact-info">
          <p className="contact-paragraph">
            Have a question or want to work together? Feel free to reach out!
          </p>
          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <div className="contact-text">
                <h3>Email:</h3>
                <p>iman@example.com</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div className="contact-text">
                <h3>Location:</h3>
                <p>Lucena City, Quezon Province</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <h2 className="form-title">Send a Message:</h2>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" placeholder="Your name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" placeholder="Your email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" rows="4" placeholder="Your message"></textarea>
            </div>
            <button type="submit" className="submit-btn">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
