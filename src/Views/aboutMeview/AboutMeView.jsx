import { Aws } from "../../assets/icons/Aws";
import { Bootstrap } from "../../assets/icons/Bootstrap";
import { Css } from "../../assets/icons/Css";
import { Express } from "../../assets/icons/Express";
import { Figma } from "../../assets/icons/Figma";
import { Git } from "../../assets/icons/Git";
import { Html } from "../../assets/icons/Html";
import Illustrator from "../../assets/icons/Illustrator";
import Indesign from "../../assets/icons/Indesign";
import { Java } from "../../assets/icons/Java";
import { Javascript } from "../../assets/icons/Javascript";
import { Mongo } from "../../assets/icons/Mongo";
import { Node } from "../../assets/icons/Node";
import Photoshop from "../../assets/icons/Photoshop";
import { React } from "../../assets/icons/React";
import { Sass } from "../../assets/icons/Sass";
import { Spring } from "../../assets/icons/Spring";
import { Vue } from "../../assets/icons/Vue";
import "./AboutMeView.css";

const AboutMeView = () => {
  return (
    <>
      <section className="about-me">
        <h1>
          <span> &lt;!-- </span> aboutMe <span> --&gt; </span>
        </h1>
        <aside className="profile">
          <div className="profile-description">
            <h2>Hi, I&apos;m Rodrigo!</h2>
            <p>
              a Web Developer and Designer with a background as an Art Director.
              My blend of creativity and technical expertise drives unique,
              functional designs. I&apos;m passionate about solving challenges
              at the intersection of design and programming, with a focus on
              adaptability and attention to detail. <br />
              <br /> I trained as a Graphic and Web Designer and have experience
              working in design studios, advertising, and marketing agencies in
              Chile. I further honed my programming skills in Barcelona.
              Additionally, I studied and worked in Canada and New Zealand,
              where I expanded my skills and learned English.
            </p>

            <div className="curriculum-vitae">
              <h2>Get My CV and Cover Letter for Additional Information</h2>
              <a href="#">
                <button>
                  <div className="cv-button">
                    <span>&#91;</span> Download CV <span>&#93;</span>
                  </div>
                </button>
              </a>
            </div>
          </div>
          <div className="profile-skills">
            <h2>#Tech Stack</h2>
            <ul className="stack-icons">
              <li className="icons-detail">
                <Html />
              </li>
              <li className="icons-detail">
                <Css />
              </li>
              <li className="icons-detail">
                <Sass />
              </li>
              <li className="icons-detail">
                <Javascript />
              </li>
              <li className="icons-detail">
                <Bootstrap />
              </li>
              <li className="icons-detail">
                <React />
              </li>
              <li className="icons-detail">
                <Vue />
              </li>
              <li className="icons-detail">
                <Node />
              </li>
              <li className="icons-detail">
                <Java />
              </li>
              <li className="icons-detail">
                <Spring />
              </li>
              <li className="icons-detail">
                <Aws />
              </li>
              <li className="icons-detail">
                <Mongo />
              </li>
              <li className="icons-detail">
                <Express />
              </li>
              <li className="icons-detail">
                <Git />
              </li>
              <li className="icons-detail">
                <Figma />
              </li>
              <li className="icons-detail">
                <Photoshop />
              </li>
              <li className="icons-detail">
                <Illustrator />
              </li>
              <li className="icons-detail">
                <Indesign />
              </li>
            </ul>
          </div>
        </aside>
      </section>
    </>
  );
};

export default AboutMeView;
