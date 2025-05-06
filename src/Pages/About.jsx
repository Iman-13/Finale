import React from "react";
import "./pages.css";

const About = () => {
  return (
    <div className="about-page">
      <h1 className="page-title">About Me</h1>

      <section className="about-section">
        <div className="about-content">
          <div className="about-image">
            <img src="/me2.jpg" alt="Iman" className="profile-image" />
          </div>

          <div className="about-text">
            <h2 className="about-heading">Hi, I'm Iman</h2>
            <p className="about-paragraph">
              I'm a second year college student in Dalubhasaan ng Lungsod ng Lucena,
              formerly known as City College of Lucena.
            </p>
            <p className="about-paragraph">
              With two years of experience in the field, I've worked on a variety of
              projects ranging from basic quiz websites to complex website development.
            </p>
            <p className="about-paragraph">
              My goal is to build digital experiences that are not only visually appealing
              but also highly functional and intuitive for users.
            </p>
          </div>
        </div>
      </section>

      <section className="skills-section">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-container">
          <div className="skill-category">
            <h3 className="category-title">Frontend</h3>
            <div className="skills-list">
              <div className="skill-item">
                <div className="skill-name">React</div>
                <div className="skill-bar"><div className="skill-level" style={{ width: "30%" }}></div></div>
              </div>
              <div className="skill-item">
                <div className="skill-name">JavaScript</div>
                <div className="skill-bar"><div className="skill-level" style={{ width: "20%" }}></div></div>
              </div>
              <div className="skill-item">
                <div className="skill-name">HTML/CSS</div>
                <div className="skill-bar"><div className="skill-level" style={{ width: "50%" }}></div></div>
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h3 className="category-title">Backend</h3>
            <div className="skills-list">
              <div className="skill-item">
                <div className="skill-name">Node.js</div>
                <div className="skill-bar"><div className="skill-level" style={{ width: "20%" }}></div></div>
              </div>
              <div className="skill-item">
                <div className="skill-name">Express</div>
                <div className="skill-bar"><div className="skill-level" style={{ width: "5%" }}></div></div>
              </div>
              <div className="skill-item">
                <div className="skill-name">MongoDB</div>
                <div className="skill-bar"><div className="skill-level" style={{ width: "5%" }}></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
