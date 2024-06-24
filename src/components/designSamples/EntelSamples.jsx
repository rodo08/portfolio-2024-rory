import DesignSample from "./DesignSample";
import Photoshop from "../../assets/icons/Photoshop";
import Illustrator from "../../assets/icons/Illustrator";
import Indesign from "../../assets/icons/Indesign";

const PizzaHutSamples = () => {
  return (
    <DesignSample
      title={"Entel"}
      icon1={<Photoshop />}
      icon2={<Illustrator />}
      icon3={<Indesign />}
      tasks={"#GraphicDesign #Marketing #Branding"}
      summary={
        "I created and developed graphics for advertisement in mixed media (such as magazines, brand displays, and store's requirements) working at the art direction and production department."
      }
      url1={"https://imgur.com/lSQiIzh.png"}
      url2={"https://imgur.com/IVuuD6t.png"}
      url3={"https://imgur.com/xTP5vC4.png"}
      url4={"https://imgur.com/j3jE8SR.png"}
      url5={"https://imgur.com/vc41TWU.png"}
      url6={"https://imgur.com/4t8CEjb.png"}
    />
  );
};

export default PizzaHutSamples;
