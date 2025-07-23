import React from 'react';
import './ProjectCard.css';

function ProjectCard({ title, frontImage, backImage, description, link }) {
  return (
    <div className="project-card">
      <div className="card-inner">
        {/* Front Side */}
        <div className="card-front">
          <img src={frontImage} alt={`${title} preview`} className="blur-image" />
          <h3 className="gradient-text">{title}</h3>
        </div>

        {/* Back Side */}
        <div className="card-back">
          <img src={backImage} alt={`${title} full`} className="back-image" />
          <div className="card-back-overlay">
            <p>{description}</p>
            {link && (
              <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
