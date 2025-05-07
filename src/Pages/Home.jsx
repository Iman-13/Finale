import React from "react";
import { Link } from "react-router-dom";
import "./pages.css";

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Hi I'm Iman</h1>
          <p className="hero-subtitle">A wonder boy who wants to reach his potential</p>
          <div className="hero-buttons">
            <Link to="/projects" className="btn btn-primary">View Projects</Link>
            <Link to="/contact" className="btn btn-outline">Contact Me</Link>
          </div>
        </div>
        
        <div className="hero-image">
          <img src="me.jpg" alt="Iman" className="hero-photo" />
        </div>
      </section>
    </div>
  );
};

export default Home;