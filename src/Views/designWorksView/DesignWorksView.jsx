import { useNavigate } from "react-router-dom";
import ProjectHeader from "../../components/projectHeader/ProjectHeader";
import BasicButton from "../../components/basicButton/BasicButton";
import DesignSampleCard from "../../components/brandCard/BrandCard";

const DesignWorksView = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("../");
  };
  const handleGoPizzaHut = () => {
    navigate("pizza-hut");
  };
  const handleGoTena = () => {
    navigate("tena");
  };
  const handleGoLoreal = () => {
    navigate("loreal");
  };
  const handleGoFridays = () => {
    navigate("fridays");
  };
  const handleGoEntel = () => {
    navigate("entel");
  };
  const handleGoMamut = () => {
    navigate("mamut");
  };
  const handleGoSchopdog = () => {
    navigate("schopdog");
  };
  const handleGoBancoEstado = () => {
    navigate("banco-estado");
  };
  const handleGoUdla = () => {
    navigate("udla");
  };
  const handleGoVentisquero = () => {
    navigate("ventisquero");
  };
  const handleGoCapel = () => {
    navigate("capel");
  };
  const handleGoGreenLion = () => {
    navigate("green-lion");
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
          <DesignSampleCard
            img={"https://imgur.com/CGKcb1T.png"}
            height={100}
            width={100}
            onGoTo={handleGoPizzaHut}
          />
          <DesignSampleCard
            img={"https://imgur.com/2LFE6GC.png"}
            height={100}
            width={100}
            onGoTo={handleGoTena}
          />
          <DesignSampleCard
            img={"https://imgur.com/WtwMkY1.png"}
            height={100}
            width={100}
            onGoTo={handleGoLoreal}
          />
          <DesignSampleCard
            img={"https://imgur.com/UFBLjdo.png"}
            height={100}
            width={100}
            onGoTo={handleGoFridays}
          />
          <DesignSampleCard
            img={"https://imgur.com/LQ7Q0Vz.png"}
            height={100}
            width={100}
            onGoTo={handleGoEntel}
          />
          <DesignSampleCard
            img={"https://imgur.com/e4APU3Y.png"}
            height={100}
            width={100}
            onGoTo={handleGoMamut}
          />
          <DesignSampleCard
            img={"https://imgur.com/uVFnxaX.png"}
            height={100}
            width={100}
            onGoTo={handleGoSchopdog}
          />
          <DesignSampleCard
            img={"https://imgur.com/LeacJlX.png"}
            height={100}
            width={100}
            onGoTo={handleGoBancoEstado}
          />
          <DesignSampleCard
            img={"https://imgur.com/td57onP.png"}
            height={100}
            width={100}
            onGoTo={handleGoUdla}
          />
          <DesignSampleCard
            img={"https://imgur.com/tn1hEGl.png"}
            height={100}
            width={100}
            onGoTo={handleGoVentisquero}
          />
          <DesignSampleCard
            img={"https://imgur.com/c86JjBU.png"}
            height={100}
            width={100}
            onGoTo={handleGoCapel}
          />
          <DesignSampleCard
            img={"https://imgur.com/Zhfanis.png"}
            height={100}
            width={100}
            onGoTo={handleGoGreenLion}
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
