import "./Socials.css";
import { Github } from "../../assets/icons/Github";
import { LinkedIn } from "../../assets/icons/LinkedIn";

const Socials = () => {
  const handleLinkedIn = () => {
    window.open(
      " https://www.linkedin.com/in/rodrigorosalesmoya/",
      "_blank",
      "noopener noreferrer"
    );
  };

  const handleGithub = () => {
    window.open("https://github.com/rodo08", "_blank", "noopener noreferrer");
  };

  return (
    <ul className="icons">
      <li onClick={handleLinkedIn}>
        <LinkedIn />
      </li>
      <li onClick={handleGithub}>
        <Github />
      </li>
    </ul>
  );
};

export default Socials;
