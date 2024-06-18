import "./WebProjectsView.css";
import BasicButton from "../../components/basicButton/BasicButton";
import WebProjectCard from "../../components/webProjectCard/WebProjectCard";
import { useNavigate } from "react-router-dom";

const WebProjectsView = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <>
      <section className="web-projects">
        <h1>
          <span>&#34;</span>webProjects<span>&#34;</span> : <span>&#91;</span>
        </h1>
        <p className="projects-summary">
          <span>&#47; *</span>
          Explore my web portfolio featuring a range of projects, from stylish
          websites to dynamic web apps.
          <span> *&#47;</span>
        </p>

        <ul className="projects-list">
          <WebProjectCard
            img={
              "https://www.researchgate.net/profile/Giulia-Bini/publication/331639939/figure/fig2/AS:734865725063171@1552217050976/Template-and-propagation-of-the-Success-Kid-meme-source-Google-search-Sept-18.jpg"
            }
            figcaption={"Memerize"}
            paragraph={"Simple memory matching game featuring meme images"}
            alt={"tarot app image"}
            url={"https://memerize.netlify.app/"}
          />
          <WebProjectCard
            img={
              "https://apptomancy.netlify.app/assets/logo-tarot-01-Boq0li0P.png"
            }
            figcaption={"Apptomancy: Tarot"}
            paragraph={
              "Tarot app: insightful, intuitive readings at your fingertips"
            }
            alt={"tarot app image"}
            url={"https://apptomancy.netlify.app/"}
          />
          <WebProjectCard
            img={
              "https://media01.stockfood.com/previews/MTM0NDAyODgw/11200240.jpg"
            }
            figcaption={"Shoplistify"}
            paragraph={
              "A shopping app to list, filter, check, and delete items effortlessly"
            }
            alt={"Shoplistify image"}
            url={"https://shoplistify.netlify.app/"}
          />
          <WebProjectCard
            img={
              "https://img.freepik.com/free-photo/flat-lay-delicious-healthy-food-concept_23-2148648502.jpg"
            }
            figcaption={"Omnifood"}
            paragraph={
              "Food subscription service. Responsive web design for academics"
            }
            alt={"Omnifood image"}
            url={"https://cssprojectomnifood.netlify.app/"}
          />
          <WebProjectCard
            img={
              "https://img1.yeggi.com/page_images_cache/6283278_2d-wall-decoration-pokemon-pikachu-half-face-3d-printer-model-to-downl"
            }
            figcaption={"Pokedex"}
            paragraph={
              "PokeAPI-based app listing the first 151 Pokémon. Filter by type"
            }
            alt={"Pokedex image"}
            url={"https://rrm-pokedex.netlify.app/"}
          />
        </ul>

        <h1>
          <span>&#93;</span>
        </h1>
      </section>

      <BasicButton text="goBack" handleClick={handleGoBack} />
    </>
  );
};

export default WebProjectsView;
