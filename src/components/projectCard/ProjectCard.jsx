import { useState, useEffect } from "react";
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
  const [isLoading, setIsLoading] = useState(true);

  const handleLink = () => {
    window.open(url, "_blank");
  };

  useEffect(() => {
    const image = new Image();
    image.src = img;
    image.onload = () => {
      setIsLoading(false);
    };
  }, [img]);

  return (
    <li className="project-card" onClick={handleLink}>
      {isLoading ? (
        <div style={{ height: "120px", display: "flex", alignItems: "center" }}>
          <p>Loading...</p>
        </div>
      ) : (
        <>
          <img src={img} height={width} width={height} alt={alt} />
          <figcaption>{figcaption}</figcaption>
          <p>{paragraph}</p>
        </>
      )}
    </li>
  );
};

export default ProjectCard;
