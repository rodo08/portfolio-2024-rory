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
      url1={"https://imgur.com/ZWNOZT1.png"}
      url2={"https://imgur.com/s21ZEdK.png"}
      url3={"https://imgur.com/t7v1c4X.png"}
      url4={"https://imgur.com/aFH2QD4.png"}
      url5={"https://imgur.com/azgGuIu.png"}
      url6={"https://imgur.com/uihCtFs.png"}
    />
  );
};

export default PizzaHutSamples;
