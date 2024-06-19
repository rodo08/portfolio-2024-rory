import DesignSample from "./DesignSample";
import Photoshop from "../../assets/icons/Photoshop";
import Illustrator from "../../assets/icons/Illustrator";
import Indesign from "../../assets/icons/Indesign";

const PizzaHutSamples = () => {
  return (
    <DesignSample
      title={"Pizza Hut"}
      icon1={<Photoshop />}
      icon2={<Illustrator />}
      icon3={<Indesign />}
      tasks={"#GraphicDesign #Marketing #Branding"}
      summary={
        "I created and developed graphics for restaurants and mass media, collaborating with the marketing team to ensure effective brand communication. My work included logos, promotional materials, social media graphics, website banners, menu boards, and table tents."
      }
      url={
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/8d4a0b10523755.5a70af4976340.jpg"
      }
    />
  );
};

export default PizzaHutSamples;
