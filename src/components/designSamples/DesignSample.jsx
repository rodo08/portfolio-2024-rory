import BasicButton from "../basicButton/BasicButton";
import "./DesignSamples.css";
import { useNavigate } from "react-router-dom";

const DesignSamples = ({
  title,
  icon1,
  icon2,
  icon3,
  tasks,
  summary,
  url1,
  url2,
  url3,
  url4,
  url5,
  url6,
}) => {
  const navigate = useNavigate();
  const handleDesignWorks = () => {
    navigate("../");
  };

  const imageUrls = [url1, url2, url3, url4, url5, url6];
  const allUrlsEmpty = imageUrls.every((url) => !url);

  return (
    <>
      <section>
        <div className="design-sample">
          <h1>
            <span>&quot;</span>
            {title}
            <span>&quot;</span> : <span>&#123;</span>
          </h1>
          <h2>{tasks}</h2>
          <ul className="design-stack">
            <h2>Stack</h2>
            <li>{icon1}</li>
            <li>{icon2}</li>
            <li>{icon3}</li>
          </ul>
          <p>{summary}</p>
          {allUrlsEmpty ? (
            <h2>#Updating works...</h2>
          ) : (
            imageUrls.map(
              (url, index) =>
                url && (
                  <img
                    key={index}
                    src={url}
                    alt={`Design work sample ${index + 1}`}
                  />
                )
            )
          )}
          <span>&#125;</span>
        </div>
        <div className="back-design-works">
          <BasicButton text="goBack" handleClick={handleDesignWorks} />
        </div>
      </section>
    </>
  );
};

export default DesignSamples;
