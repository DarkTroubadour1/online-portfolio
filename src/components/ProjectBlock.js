import React from 'react';
import './ProjectBlock.css';

function ProjectBlock({ title, description, imgSource }) {
  return (
      <div className="project-block-content">
        <div className="project-block-header">
        { imgSource ? <img className="project-block-image" src={imgSource} alt={title} /> : null }
        <h3>{title}</h3>
      </div>
      <p className="project-block-description">{description}</p>
      </div>
  );
}

export default ProjectBlock;