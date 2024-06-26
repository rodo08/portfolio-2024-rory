import DesignSample from "./DesignSample";
import Photoshop from "../../assets/icons/Photoshop";
import Illustrator from "../../assets/icons/Illustrator";

const TenaSamples = () => {
  return (
    <DesignSample
      title={"Tena"}
      icon1={<Photoshop />}
      icon2={<Illustrator />}
      tasks={"#ArtDirection #Marketing #Branding #Retail"}
      summary={
        "Created promotional graphics for Tena across web, print, and in-store, collaborating with marketing to ensure visually appealing, persuasive designs that conveyed confidence and comfort. "
      }
      url1={"https://imgur.com/fxGjqh3.png"}
      url2={"https://imgur.com/WLvIqmv.png"}
      url3={"https://imgur.com/rFvhEgN.png"}
      url4={"https://imgur.com/eEmX7TG.png"}
      url5={"https://imgur.com/fMgYLU5.png"}
      url6={"https://imgur.com/tEac8Jw.png"}
    />
  );
};

export default TenaSamples;
