import "./ProjectCard.css";

const ProjectCard = ({
  img,
  figcaption,
  paragraph,
  alt,
  url,
  width,
  height,
}) => {
  const handleLink = () => {
    window.open(url, "_blank");
  };

  return (
    <li className="project-card" onClick={handleLink}>
      <img src={img} height={width} width={height} alt={alt} />
      <figcaption>{figcaption}</figcaption>
      <p>{paragraph}</p>
    </li>
  );
};

export default ProjectCard;
