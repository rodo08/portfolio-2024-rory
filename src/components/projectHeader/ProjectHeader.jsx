const ProjectHeader = ({ categoryTitle, categoryDescription }) => {
  return (
    <>
      <h1>
        <span>&#34;</span>
        {categoryTitle}
        <span>&#34;</span> : <span>&#91;</span>
      </h1>
      <p className="projects-summary">
        <span>&#47; *</span>
        {categoryDescription}
        <span> *&#47;</span>
      </p>
    </>
  );
};

export default ProjectHeader;
