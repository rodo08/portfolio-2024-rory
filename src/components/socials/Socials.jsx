import "./Socials.css";
import { Mail } from "../../assets/icons/Mail";
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
      <li>
        <Mail />
      </li>
    </ul>
  );
};

export default Socials;
