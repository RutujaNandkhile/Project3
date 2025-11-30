import React from "react";

const ProjectCard = ({ title, desc, image, link }) => {
  return (
    <div className="project-card">
      {/* <img src={image} alt={title} className="project-img" /> */}
      <div className="project-info">
        <h3>{title}</h3>
        <p>{desc}</p>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="project-btn">
            View Project
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
