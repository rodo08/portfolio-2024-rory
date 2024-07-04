import { Arrow } from "../../assets/icons/Arrow";
import "../projectCard/ProjectCard.css";

const DesignSampleCard = ({ img, alt, width, height, onGoTo }) => {
  return (
    <li className="project-card" style={{ position: "relative" }}>
      <img src={img} height={width} width={height} alt={alt} onClick={onGoTo} />
      <Arrow />
    </li>
  );
};

export default DesignSampleCard;
