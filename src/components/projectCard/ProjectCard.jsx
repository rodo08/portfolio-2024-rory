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
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  icon6,
  icon7,
  icon8,
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
          <div>
            <img src={img} height={width} width={height} alt={alt} />
          </div>
          <figcaption>{figcaption}</figcaption>
          <p style={{ paddingBottom: "0.5rem" }}>{paragraph}</p>
          <ul className="tech-icons">
            <div>
              <li>{icon1}</li>
              <li>{icon2}</li>
              <li>{icon3}</li>
              <li>{icon4}</li>
            </div>
            <div>
              <li>{icon5}</li>
              <li>{icon6}</li>
              <li>{icon7}</li>
              <li>{icon8}</li>
            </div>
          </ul>
        </>
      )}
    </li>
  );
};

export default ProjectCard;
