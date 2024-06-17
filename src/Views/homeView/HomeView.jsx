import Brands from "../../components/brands/Brands";
import WorkLinks from "../../components/workLinks/WorkLinks";
import "./HomeView.css";

const HomeView = () => {
  return (
    <>
      <main className="main">
        <section className="hero">
          <div>
            <h1>
              <span>#</span>Welcome.
            </h1>
            <div className="introduction">
              <span>&#123;</span>
              <p>
                I am Rodrigo, a seasoned professional in{" "}
                <strong> Web Development </strong> and <strong>Design</strong>;
                with experience in advertising agencies and design studios. My
                cross-disciplinary approach enables me to create attractive
                designs grounded in solid programming principles.
              </p>
              <span>&#125;</span>
            </div>
          </div>
          <WorkLinks />
        </section>

        <Brands />
      </main>
    </>
  );
};

export default HomeView;
