import "./WorkLinks.css";
import CategoryButton from "../categoryButton/CategoryButton";

const WorkLinks = () => {
  return (
    <section className="work">
      <ul className="work-categories">
        <li>
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
