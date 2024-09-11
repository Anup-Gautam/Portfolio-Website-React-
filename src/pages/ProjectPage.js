import React from "react";

const projects = [
  {
    id: 1,
    name: "Project One",
    description: "A cool project about X",
    link: "#!",
  },
  {
    id: 2,
    name: "Project Two",
    description: "Another awesome project",
    link: "#!",
  },
  // Add more projects here
];

const ProjectPage = () => {
  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="project-cards">
        {projects.map((project) => (
          <div key={project.id} className="card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectPage;
