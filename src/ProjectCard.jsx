import React from "react";
import "./ProjectCard.css";

const ProjectCard = function ({ title, description, image, link }) {
  return (
    <div className="project-card">
      <img 
        src={image} 
        alt={title || "Project Image"} 
        className="project-image" 
      />
      <h3 className="project-title">{title || "Untitled Project"}</h3>
      <p className="project-description">{description || "No description available."}</p>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
          View Project
        </a>
      ) : (
        <span className="no-link">No link available</span>
      )}
    </div>
  );
}

export default ProjectCard;
