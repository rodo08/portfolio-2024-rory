import { useState, useEffect } from "react";
import BasicButton from "../basicButton/BasicButton";
import "./DesignSamples.css";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader";

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
  const [loading, setLoading] = useState(true);

  const handleDesignWorks = () => {
    navigate("../");
  };

  const imageUrls = [url1, url2, url3, url4, url5, url6];
  const allUrlsEmpty = imageUrls.every((url) => !url);

  useEffect(() => {
    const imagePromises = imageUrls.map((url) => {
      if (!url) return Promise.resolve();
      return new Promise((resolve) => {
        const img = new Image();
        img.src = url;
        img.onload = resolve;
      });
    });

    Promise.all(imagePromises).then(() => {
      setLoading(false);
    });
  }, [imageUrls]);

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
          {loading ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "140px",
                gap: "1rem",
                margin: "0 auto",
              }}
            >
              <h1
                style={{
                  fontSize: "2rem",
                  color: "#ad9c7c",
                  padding: "2rem 0",
                }}
              >
                Loading
              </h1>
              <Loader />
            </div>
          ) : allUrlsEmpty ? (
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
