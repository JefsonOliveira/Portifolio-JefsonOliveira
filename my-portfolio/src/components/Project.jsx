/* eslint-disable react/prop-types */
import "./Project.css";

const Project = ({ title, description, image, link }) => {
  return (
    <div className="project">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Ver Projeto
      </a>
    </div>
  );
};

export default Project;
