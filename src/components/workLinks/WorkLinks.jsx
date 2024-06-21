import "./WorkLinks.css";
import CategoryButton from "../categoryButton/CategoryButton";
import { useNavigate } from "react-router-dom";

const WorkLinks = () => {
  const navigate = useNavigate();
  const handleWebProjects = () => {
    navigate("web-projects");
  };
  const handleDesignWorks = () => {
    navigate("design-works");
  };
  const handleAboutMe = () => {
    navigate("about-me");
  };
  const handleContact = () => {
    navigate("contact");
  };

  return (
    <section className="work">
      <ul className="work-categories">
        <li onClick={handleWebProjects}>
          <CategoryButton text="webProjects" />
        </li>
        <li onClick={handleDesignWorks}>
          <CategoryButton text="designWorks" />
        </li>
        <li onClick={handleAboutMe}>
          <CategoryButton text="aboutMe" />
        </li>
        <li onClick={handleContact}>
          <CategoryButton text="contact" />
        </li>
      </ul>
    </section>
  );
};
export default WorkLinks;
