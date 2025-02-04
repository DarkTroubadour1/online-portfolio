import React from 'react';
import ProjectCard from './ProjectCard';

function ProjectList({ projects }) {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <p>
        A refined selection of my work—meticulously crafted, elegantly tested, 
        and guaranteed to be served with a dash of wit:
      </p>

      <div className="project-cards">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index} 
            title={project.title} 
            description={project.description} 
            linkText={project.linkText} 
            link={project.link} 
            image={project.image}  // Add image here
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectList;

