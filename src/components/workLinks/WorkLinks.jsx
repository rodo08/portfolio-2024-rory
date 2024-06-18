import "./WorkLinks.css";
import CategoryButton from "../categoryButton/CategoryButton";
import { useNavigate } from "react-router-dom";

const WorkLinks = () => {
  const navigate = useNavigate();
  const handleWebProjects = () => {
    navigate("web-projects");
  };

  return (
    <section className="work">
      <ul className="work-categories">
        <li onClick={handleWebProjects}>
          <CategoryButton text="webProjects" />
        </li>
        <li>
          <CategoryButton text="designWorks" />
        </li>
        <li>
          <CategoryButton text="aboutMe" />
        </li>
        <li>
          <CategoryButton text="contact" />
        </li>
      </ul>
    </section>
  );
};
export default WorkLinks;
