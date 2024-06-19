import "./DesignSamples.css";

const DesignSamples = ({
  title,
  icon1,
  icon2,
  icon3,
  url,
  alt,
  tasks,
  summary,
}) => {
  return (
    <>
      <section>
        <div className="design-sample">
          <h1>{title}</h1>
          <h2>{tasks}</h2>
          <ul className="design-stack">
            <li>{icon1}</li>
            <li>{icon2}</li>
            <li>{icon3}</li>
          </ul>
          <p>{summary}</p>
          <img src={url} alt={alt} />
        </div>
      </section>
    </>
  );
};

export default DesignSamples;
