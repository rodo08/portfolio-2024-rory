import "./WebProjectsView.css";
import BasicButton from "../../components/basicButton/BasicButton";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { useNavigate } from "react-router-dom";
import ProjectHeader from "../../components/projectHeader/ProjectHeader";

const WebProjectsView = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <>
      <section className="projects-container">
        <ProjectHeader
          categoryTitle={"webProjects"}
          categoryDescription={
            "Explore my web portfolio featuring a range of projects, from stylish websites to dynamic web apps."
          }
        />

        <ul className="projects-list">
          <ProjectCard
            img={"https://imgur.com/nbvO2fs.png"}
            figcaption={"Vertex"}
            paragraph={
              "Event management. Login / Register; create and list events."
            }
            alt={"vertex app image"}
            url={"https://vertex-events-project.netlify.app/"}
            height={120}
            width={120}
          />
          <ProjectCard
            img={"https://imgur.com/muUMG1E.png"}
            figcaption={"Tinder clone"}
            paragraph={
              "Tinder app features clone; register, login, swipe, match and chat. "
            }
            alt={"tinder clone app image"}
            url={"https://tinderapp-clone.netlify.app/"}
            height={120}
            width={120}
          />
          <ProjectCard
            img={
              "https://www.researchgate.net/profile/Giulia-Bini/publication/331639939/figure/fig2/AS:734865725063171@1552217050976/Template-and-propagation-of-the-Success-Kid-meme-source-Google-search-Sept-18.jpg"
            }
            figcaption={"Memerize"}
            paragraph={"Simple memory matching game featuring meme images"}
            alt={"memerize app image"}
            url={"https://memerize.netlify.app/"}
            height={120}
            width={120}
          />
          <ProjectCard
            img={
              "https://apptomancy.netlify.app/assets/logo-tarot-01-Boq0li0P.png"
            }
            figcaption={"Apptomancy: Tarot"}
            paragraph={
              "Tarot app: insightful, intuitive readings at your fingertips"
            }
            alt={"tarot app image"}
            url={"https://apptomancy.netlify.app/"}
            height={120}
            width={120}
          />
          <ProjectCard
            img={
              "https://media01.stockfood.com/previews/MTM0NDAyODgw/11200240.jpg"
            }
            figcaption={"Shoplistify"}
            paragraph={
              "A shopping app to list, filter, check, and delete items effortlessly"
            }
            alt={"Shoplistify image"}
            url={"https://shoplistify.netlify.app/"}
            height={120}
            width={120}
          />
          <ProjectCard
            img={
              "https://img.freepik.com/free-photo/flat-lay-delicious-healthy-food-concept_23-2148648502.jpg"
            }
            figcaption={"Omnifood"}
            paragraph={
              "Food subscription service. Responsive web design for academics"
            }
            alt={"Omnifood image"}
            url={"https://cssprojectomnifood.netlify.app/"}
            height={120}
            width={120}
          />
          <ProjectCard
            img={
              "https://img1.yeggi.com/page_images_cache/6283278_2d-wall-decoration-pokemon-pikachu-half-face-3d-printer-model-to-downl"
            }
            figcaption={"Pokedex"}
            paragraph={
              "PokeAPI-based app listing the first 151 Pokémon. Filter by type"
            }
            alt={"Pokedex image"}
            url={"https://rrm-pokedex.netlify.app/"}
            height={120}
            width={120}
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
