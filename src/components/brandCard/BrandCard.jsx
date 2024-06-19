import "../projectCard/ProjectCard.css";

const DesignSampleCard = ({ img, alt, width, height, onGoTo }) => {
  return (
    <li className="project-card">
      <img src={img} height={width} width={height} alt={alt} onClick={onGoTo} />
    </li>
  );
};

export default DesignSampleCard;
