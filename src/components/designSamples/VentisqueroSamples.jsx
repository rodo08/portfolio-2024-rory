import DesignSample from "./DesignSample";
import Photoshop from "../../assets/icons/Photoshop";
import Illustrator from "../../assets/icons/Illustrator";
import Indesign from "../../assets/icons/Indesign";

const VentisqueroSamples = () => {
  return (
    <DesignSample
      title={"Ventisquero"}
      icon1={<Photoshop />}
      icon2={<Illustrator />}
      icon3={<Indesign />}
      tasks={"#ArtDirection #Marketing #Branding"}
      summary={
        "Design of various graphic elements for Ventisquero, including logos, illustrations and other visual materials to promote their brand and products."
      }
      url1={"https://imgur.com/3s7r4Op.png"}
      url2={"https://imgur.com/3dksJPD.png"}
      url3={"https://imgur.com/6GJlCH8.png"}
      url4={"https://imgur.com/Dbz1QTj.png"}
      url5={"https://imgur.com/yYiZRMn.png"}
    />
  );
};

export default VentisqueroSamples;
