import React from "react";
import ProjectCard from "./ProjectCard";
import "../app/globals.css"

const Projects = () => {
  return (
    <div id="Projects" className="projects-container">
      <h1 className="projects-header">Projects</h1>
      <div className="project-cards-wrapper">
        {/* Project 1 */}
        <ProjectCard
          title="Resume Builder"
          main="This is a Resume Builder created with HTML, CSS, TypeScript"
          demoLink="https://demo-link-1.com"
          sourceCodeLink="https://github.com/username/project1"
          image="/images/Screenshot (264).png"
        />

        {/* Project 2 */}
        <ProjectCard
          title="Book List"
          main="This is a book list website created with HTML, CSS, JavaScript"
          demoLink="https://book-list-by-komal.netlify.app/"
          sourceCodeLink="https://github.com/Kommmal/Book-List"
          image="/images/Screenshot (266).png"
        />

        {/* Project 3 */}
        <ProjectCard
          title="Clock"
          main="This is a clock website created with HTML, CSS, JavaScript"
          demoLink="https://clock-by-komal.netlify.app/"
          sourceCodeLink="https://github.com/Kommmal/Clock"
          image="/images/Screenshot (267).png"
        />
      </div>
    </div>
  );
};

export default Projects;
