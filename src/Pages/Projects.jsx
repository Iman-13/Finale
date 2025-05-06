import React, { useState } from "react";
import "./pages.css";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  
  const projects = [
    {
      id: 1,
      title: "Student Enrollment Form",
      description: "This was tasked by our teacher to make a online enrollment form.",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "web",
      liveLink: "https://iman-13.github.io/Student-Enrollment/",
      sourceCode: "https://github.com/Iman-13/Student-Enrollment.git"
    },
    {
      id: 2,
      title: "Responsive Website",
      description: "This was a responsive website tasked by our teacher this website contain my favorite travel.",
      technologies: ["HTML", "CSS", "Responsive Design"],
      category: "web",
      liveLink: "https://iman-13.github.io/responsive/",
      sourceCode: "https://github.com/Iman-13/responsive.git"
    },
    {
      id: 3,
      title: "Self , Hobby and Crush",
      description: "This was tasked by our teacher to make an introduction of ourselves.",
      technologies: ["HTML", "CSS"],
      category: "web",
      liveLink: "https://iman-13.github.io/assignment2/",
      sourceCode: "https://github.com/Iman-13/assignment2.git"
    },
    {
      id: 4,
      title: "Fetch Students with Loading ",
      description: "A website using React.js this was quite exciting to do.",
      technologies: ["React", "API Integration", "UI/UX"],
      category: "react",
      liveLink: "https://spinner-ecru-ten.vercel.app/",
      sourceCode: "https://github.com/Iman-13/loading.git"
    },
    {
      id: 5,
      title: "Kaumay Scan",
      description: "This one was made with a manhwa API it was hard to do.",
      technologies: ["React", "API Integration", "JavaScript"],
      category: "react",
      liveLink: "https://kaumay.vercel.app/",
      sourceCode: "https://github.com/Iman-13/FETCH2.git"
    },
  ];
  
  const filteredProjects = filter === "all"
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <div className="projects-page">
      <h1 className="page-title">My Projects</h1>
      <p className="section-description">
        Here are some of the projects I've worked on. Each project demonstrates different skills and technologies.
      </p>
      
      <div className="projects-grid">
        {filteredProjects.map(project => (
          <div className="project-card" key={project.id}>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="tech-stack">
              {project.technologies.map((tech, index) => (
                <span className="tech-tag" key={index}>{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a 
                href={project.liveLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link"
              >
                View Project
              </a>
              <a 
                href={project.sourceCode} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link"
              >
                Source Code
              </a>
            </div>
          </div>
        ))}
      </div>
      
      {filteredProjects.length === 0 && (
        <div className="no-projects">
          <p>No projects found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default Projects;