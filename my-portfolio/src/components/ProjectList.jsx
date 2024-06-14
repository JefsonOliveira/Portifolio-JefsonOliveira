import Project from "./Project";

import "./ProjectList.css";

const projects = [
  {
    title: "Projeto 1",
    description: "Descrição do projeto 1",
    image: "path_to_image1.jpg",
    link: "https://link_do_projeto1.com",
  },
  {
    title: "Projeto 2",
    description: "Descrição do projeto 2",
    image: "path_to_image2.jpg",
    link: "https://link_do_projeto2.com",
  },
];

const ProjectList = () => {
  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          description={project.description}
          image={project.image}
          link={project.link}
        />
      ))}
    </div>
  );
};

export default ProjectList;
