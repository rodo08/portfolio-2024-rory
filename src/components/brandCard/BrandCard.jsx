import { Arrow } from "../../assets/icons/Arrow";
import "../projectCard/ProjectCard.css";
import { useState, useEffect } from "react";

const DesignSampleCard = ({ img, alt, width, height, onGoTo }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const loadImage = () => {
    const image = new Image();
    image.src = img;
    image.onload = () => {
      setIsImageLoaded(true);
    };
  };

  useEffect(() => {
    loadImage();
  }, [img]);

  return (
    <li className="project-card" style={{ position: "relative" }}>
      {isImageLoaded ? (
        <img
          src={img}
          height={width}
          width={height}
          alt={alt}
          onClick={onGoTo}
        />
      ) : (
        <div style={{ height: "100px", display: "flex", alignItems: "center" }}>
          <h1 style={{ fontSize: "1rem", color: "#ad9c7c" }}>Loading...</h1>
        </div>
      )}
      <Arrow />
    </li>
  );
};

export default DesignSampleCard;
