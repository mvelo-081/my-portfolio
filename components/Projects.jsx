import React, { useEffect, useState } from 'react';
import './Projects.css'

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal website showcasing my skills and projects. Which you are currenctly exploring',
    techStack: ['React', 'CSS', 'JavaScript'],
    link: '#about'
  },
  {
    title: 'pokemon card',
    description: 'A pokemon website based that is using API\'s to fetch the character images',
    techStack: ['Html', 'Css', 'Javascript', 'API'],
    // link: 'https://yourweatherapp.com'
  }
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 500);
  }, []);

  // must add images for the projects
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className={`project-card ${isVisible ? 'fade-in' : ''}`}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Tech Stack:</strong> {project.techStack.join(', ')}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
