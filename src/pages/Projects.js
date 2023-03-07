import React from "react";
import "./projects.css";
import projects from "../../projects.json";
import ProjectCard from "../projectsCard";

function Projects() {
  console.log(projects);
  return (
    <div className="container-fluid">
      <h1 className="mb-4">Projects</h1>
      <p className="projects-text">These are my projects, but not all of them!</p>
      <div class="row">
        {projects.map((project) => {
          return (
            <div key={project.id} class="col-md-4 d-flex justify-content-center mb-5">
              <ProjectCard
                deployed={project.deployed}
                link={project.link}
                name={project.name}
                image={project.image}
                alt={project.name}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
