import { FaLinkedin, FaGithubSquare, FaFileAlt } from "react-icons/fa";

import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="react-with-icons">
        <h3 className="name-text">OI EU SOU JEFSON</h3>
        <h1 className="react-text">REACT</h1>
        <div className="icons">
          <FaLinkedin />
          <FaGithubSquare />
          <FaFileAlt />
        </div>
      </div>
      <h1 className="developer-text">DEVELOPER</h1>
    </div>
  );
};

export default Header;
