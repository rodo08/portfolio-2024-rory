import "./WebProjectCard.css";

const WebProjectCard = ({ img, figcaption, paragraph, alt, url }) => {
  const handleLink = () => {
    window.open(url, "_blank");
  };

  return (
    <li className="project-card" onClick={handleLink}>
      <img src={img} height={150} width={150} alt={alt} />
      <figcaption>{figcaption}</figcaption>
      <p>
        {paragraph} <span>,</span>
      </p>
    </li>
  );
};

export default WebProjectCard;
