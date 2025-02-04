import React from 'react';

function ProjectCard({ title, description, linkText, link, image }) {
  return (
    <div className="project-card">
      <div className="card-inner">

        <div className="card-front">
          <img src={image} alt={title} />
        </div>

        <div className="card-back">
          <h3>{title}</h3>
          <p>{description}</p>
          <a 
            href={link} 
            className="btn" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            {linkText}
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
