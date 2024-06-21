import "./Socials.css";
import { Github } from "../../assets/icons/Github";
import { LinkedIn } from "../../assets/icons/LinkedIn";

const Socials = () => {
  return (
    <ul className="icons">
      <li>
        <LinkedIn />
      </li>
      <li>
        <Github />
      </li>
    </ul>
  );
};

export default Socials;
