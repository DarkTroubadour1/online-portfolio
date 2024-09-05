import React from 'react';
import './Projects.css';
import ProjectBlock from '../components/ProjectBlock';
import importAllJsonFiles from '../utils/loadArticles';

function Projects() {
  const projects = importAllJsonFiles(require.context('../projects', false, /\.json$/));
  
  return (
    <div className="projects-section">
      <h2 className="section-header">Projects</h2>
      <div>
        {projects.map((p, index) => (
          <ProjectBlock title={p.title} description={p.description} imgSource={p.imgSource} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
