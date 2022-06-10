import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Conclusion.css";

function Conclusion() {
  const currentYear = () => {
    return new Date().getFullYear();
  };
  return (
    <footer className="text-center">
      <span className="d-flex justify-content-center align-items-center mb-3">
        <a
          href="https://www.linkedin.com/in/yasserpulido/"
          target={"_blank"}
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} className="m-3 social-media" />
        </a>
        <a
          href="https://github.com/yasserpulido/"
          target={"_blank"}
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithubSquare} className="m-3 social-media" />
        </a>
      </span>
      <small className="pt-3 pb-3">
        Copyright &#169; {currentYear()} Yasser Pulido
      </small>
    </footer>
  );
}

export default Conclusion;
