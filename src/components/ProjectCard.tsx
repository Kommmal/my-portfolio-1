import React from "react";
import "../app/globals.css"


// Define the types for the props
interface ProjectCardProps {
  title: string;
  main: string;
  demoLink: string;
  sourceCodeLink: string;
  image: any;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  main,
  demoLink,
  sourceCodeLink,
  image,
}) => {
  return (
    <div className="project-card">
      <img className="project-image" src={image} alt={title} />
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{main}</p>
      <div className="buttons">
        {/* Demo Button */}
        <a href={demoLink} target="_blank" rel="noopener noreferrer">
          <button className="demo-btn">Demo</button>
        </a>

        {/* Source Code Button */}
        <a href={sourceCodeLink} target="_blank" rel="noopener noreferrer">
          <button className="source-code-btn">Source Code</button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
