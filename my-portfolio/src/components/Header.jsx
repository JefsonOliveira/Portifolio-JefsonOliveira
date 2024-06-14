import {
  FaLinkedin,
  FaGithubSquare,
  FaFileAlt,
  FaHandSparkles,
} from "react-icons/fa";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header-container">
        <div className="react-with-icons">
          <div className="name-text">
            OI <FaHandSparkles className="wave-icon" /> EU SOU JEFSON
          </div>
          <div className="react-text">
            REACT
            <div className="icons">
              <FaLinkedin />
              <FaGithubSquare />
              <FaFileAlt />
            </div>
          </div>
        </div>
        <h1 className="developer-text">DEVELOPER</h1>
        <p>
          TENHO 24 ANOS, SOU DESENVOLVEDOR FRONTEND COM 1 ANO DE EXPERIÊNCIA
          TRABALHANDO COMO FREELANCER.
        </p>
      </div>
      <div className="pixel-transition"></div>
    </div>
  );
};

export default Header;
