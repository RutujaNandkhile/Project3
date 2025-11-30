import React from "react";
import ProjectCard from "./ProjectCard";


const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    desc: "A responsive personal portfolio website built with React and CSS.",
    image: "project1.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "Colleges Websites",
    desc: "Admin dashboard for an Colleges website built using React and Bootstrap.",
    image: "project2.jpg",
    link: "https://www.coemalkapur.ac.in/",
  },
  {
    id: 3,
    title: "VPOSA College Baramati",
    desc: "Using this project i will use in html, css, js, boostra",
    image: "project3.jpg",
    link: "https://vpsoa.edu.in/",
  },
  {
    id: 4,
    title: "MJS Shrigonda College",
    desc: "Using this project i will use in html, css, js, boostrap",
    image: "project4.jpg",
    link: "https://mjsshrigonda.edu.in/",
  },
];

const Projects = () => {
  return (
    <div className="projects-section">
      <h2 className="heading">
        My <span>Projects</span>
      </h2>

      <div className="projects-container">
        {projectsData.map(project => (
          <ProjectCard
            key={project.id}
            title={project.title}
            desc={project.desc}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
