import { useNavigate } from "react-router-dom";
import ProjectHeader from "../../components/projectHeader/ProjectHeader";
import ProjectCard from "../../components/projectCard/ProjectCard";
import BasicButton from "../../components/basicButton/BasicButton";

const DesignWorksView = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/");
  };
  return (
    <>
      <section className="projects-container">
        <ProjectHeader
          categoryTitle={"designWorks"}
          categoryDescription={
            "Explore my diverse collection of Graphic Design and Art Direction projects, highlighting skills and expertise."
          }
        />
        <ul className="projects-list">
          <ProjectCard
            img={"https://imgur.com/CGKcb1T.png"}
            height={100}
            width={100}
          />
          <ProjectCard
            img={"https://imgur.com/2LFE6GC.png"}
            height={100}
            width={100}
          />
          <ProjectCard
            img={"https://imgur.com/WtwMkY1.png"}
            height={100}
            width={100}
          />
          <ProjectCard
            img={"https://imgur.com/UFBLjdo.png"}
            height={100}
            width={100}
          />
          <ProjectCard
            img={"https://imgur.com/LQ7Q0Vz.png"}
            height={100}
            width={100}
          />
          <ProjectCard
            img={"https://imgur.com/e4APU3Y.png"}
            height={100}
            width={100}
          />
          <ProjectCard
            img={"https://imgur.com/uVFnxaX.png"}
            height={100}
            width={100}
          />
          <ProjectCard
            img={"https://imgur.com/LeacJlX.png"}
            height={100}
            width={100}
          />
          <ProjectCard
            img={"https://imgur.com/td57onP.png"}
            height={100}
            width={100}
          />
          <ProjectCard
            img={"https://imgur.com/tn1hEGl.png"}
            height={100}
            width={100}
          />
          <ProjectCard
            img={"https://imgur.com/c86JjBU.png"}
            height={100}
            width={100}
          />
          <ProjectCard
            img={"https://imgur.com/Zhfanis.png"}
            height={100}
            width={100}
          />
        </ul>
        <h1>
          <span>&#93;</span>
        </h1>
      </section>
      <BasicButton text="goBack" handleClick={handleGoBack} />
    </>
  );
};

export default DesignWorksView;
