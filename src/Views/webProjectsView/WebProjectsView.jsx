import "./WebProjectsView.css";
import BasicButton from "../../components/basicButton/BasicButton";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { useNavigate } from "react-router-dom";
import ProjectHeader from "../../components/projectHeader/ProjectHeader";
import { Wordpress } from "../../assets/icons/Wordepress";
import { Figma } from "../../assets/icons/Figma";
import { Mysql } from "../../assets/icons/Mysql";
import { Vue } from "../../assets/icons/Vue";
import { React } from "../../assets/icons/React";
import { Html } from "../../assets/icons/Html";
import { Css } from "../../assets/icons/Css";
import { Javascript } from "../../assets/icons/Javascript";
import { Spring } from "../../assets/icons/Spring";
import Postgresql from "../../assets/icons/Postgresql";
import { Express } from "../../assets/icons/Express";
import Tailwindcss from "../../assets/icons/Tailwind";

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
            img={"https://i.postimg.cc/MpYCfg5n/previwork.png"}
            figcaption={"Previwork"}
            paragraph={
              "Accredited External Prevention Service website (Official website)."
            }
            alt={"Previwork logo image"}
            url={"https://www.previwork.es/"}
            height={120}
            width={120}
            icon1={<Figma height={18} style={{ margin: "0" }} />}
            icon2={<Wordpress width={20} style={{ margin: "0" }} />}
            icon3={<Mysql width={30} />}
          />
          <ProjectCard
            img={"https://i.postimg.cc/VkPrzG0k/eclectica-isologo-01-01.jpg"}
            figcaption={"Eclectica"}
            paragraph={"Personal Social Media project; still on Development."}
            alt={"vertex app image"}
            url={"https://eclecticasite.netlify.app/"}
            height={120}
            width={120}
            icon1={<React width={15} style={{ margin: "0" }} />}
            icon2={<Tailwindcss width={20} />}
            icon3={<Express width={40} style={{ margin: "0" }} />}
            icon4={<Postgresql width={20} />}
          />
          <ProjectCard
            img={"https://i.postimg.cc/85YMDSQf/vertexlogopink-Ddib-SXV.png"}
            figcaption={"Vertex"}
            paragraph={
              "Event management. Login / Register; create and list events."
            }
            alt={"vertex app image"}
            url={"https://vertex-events-project.netlify.app/"}
            height={120}
            width={120}
            icon1={<Vue width={15} />}
            icon2={<Spring width={35} style={{ margin: "0" }} />}
            icon3={<Css width={20} />}
            icon4={<Mysql width={30} />}
          />

          <ProjectCard
            img={
              "https://img.freepik.com/free-photo/flat-lay-delicious-healthy-food-concept_23-2148648502.jpg"
            }
            figcaption={"Omnifood"}
            paragraph={"Food subscription service. Responsive web design"}
            alt={"Omnifood image"}
            url={"https://cssprojectomnifood.netlify.app/"}
            height={120}
            width={120}
            icon1={<Html width={20} />}
            icon2={<Css width={20} />}
            icon3={<Javascript width={18} />}
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
            icon1={<Html width={20} />}
            icon2={<Css width={20} />}
            icon3={<Javascript width={18} />}
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
