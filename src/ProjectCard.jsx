import React from 'react';
import './ProjectCard.css';

export default function ProjectCard() {
  return (
    <div className="project-card">
      <img src="#" alt="project_title" height={"40%"} width={"80%"} />
      <h3>title</h3>
      <p>description</p>
      <a href="#">View</a>
    </div>
  );
}

