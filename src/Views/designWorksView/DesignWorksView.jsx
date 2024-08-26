import "./DesignWorksView.css";
import { useNavigate } from "react-router-dom";
import ProjectHeader from "../../components/projectHeader/ProjectHeader";
import BasicButton from "../../components/basicButton/BasicButton";
import DesignSampleCard from "../../components/brandCard/BrandCard";

const DesignWorksView = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("../");
  };
  const handleGoAchs = () => {
    navigate("achs");
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
        <ul className="projects-list design">
          <DesignSampleCard
            img={"https://i.postimg.cc/fRLLf3pm/logo-achs-2023-01-01-01.png"}
            height={100}
            width={100}
            onGoTo={handleGoAchs}
          />
          <DesignSampleCard
            img={"https://i.postimg.cc/j2F5RrYW/pizzahut-squared-white.png"}
            height={100}
            width={100}
            onGoTo={handleGoPizzaHut}
          />
          <DesignSampleCard
            img={"https://i.postimg.cc/wT1M03DD/tena-white-01.png"}
            height={100}
            width={100}
            onGoTo={handleGoTena}
          />
          <DesignSampleCard
            img={"https://i.postimg.cc/63zq1vHf/Loreal-squared-white.png"}
            height={100}
            width={100}
            onGoTo={handleGoLoreal}
          />
          <DesignSampleCard
            img={"https://i.postimg.cc/nLBQTMb3/Fridays-logo-squared.png"}
            height={100}
            width={100}
            onGoTo={handleGoFridays}
          />
          <DesignSampleCard
            img={"https://i.postimg.cc/rsndzrxw/logo-entel-512.png"}
            height={100}
            width={100}
            onGoTo={handleGoEntel}
          />
          <DesignSampleCard
            img={
              "https://i.postimg.cc/52HzYnPd/ex8-QRhv-E5g2-L57cat-200-x-squared.png"
            }
            height={100}
            width={100}
            onGoTo={handleGoMamut}
          />
          <DesignSampleCard
            img={"https://i.postimg.cc/GpxmHD1n/schopdog-round.png"}
            height={100}
            width={100}
            onGoTo={handleGoSchopdog}
          />
          <DesignSampleCard
            img={"https://i.postimg.cc/sXH9XWSX/banco-estado-squared.png"}
            height={100}
            width={100}
            onGoTo={handleGoBancoEstado}
          />
          <DesignSampleCard
            img={"https://i.postimg.cc/jdB59Khm/udla-squared.png"}
            height={100}
            width={100}
            onGoTo={handleGoUdla}
          />
          <DesignSampleCard
            img={"https://i.postimg.cc/nzdV1tzd/ventisquero-squared.png"}
            height={100}
            width={100}
            onGoTo={handleGoVentisquero}
          />
          <DesignSampleCard
            img={"https://i.postimg.cc/3NKpkhqn/capel-squared.png"}
            height={100}
            width={100}
            onGoTo={handleGoCapel}
          />
          <DesignSampleCard
            img={"https://i.postimg.cc/63K4PwBt/green-lion-01.png"}
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
