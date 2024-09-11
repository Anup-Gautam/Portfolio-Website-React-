import React from "react";

const experiences = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Company A",
    description: "Worked on awesome projects",
  },
  {
    id: 2,
    title: "Web Developer",
    company: "Company B",
    description: "Created cool websites",
  },
  // Add more experiences here
];

const ExperiencePage = () => {
  return (
    <section className="experience">
      <h2>My Experience</h2>
      <div className="experience-cards">
        {experiences.map((exp) => (
          <div key={exp.id} className="card">
            <h3>{exp.title}</h3>
            <p>{exp.company}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperiencePage;
