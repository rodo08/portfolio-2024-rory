import DesignSample from "./DesignSample";
import Photoshop from "../../assets/icons/Photoshop";
import Illustrator from "../../assets/icons/Illustrator";

const LorealSamples = () => {
  return (
    <DesignSample
      title={"L'Oréal"}
      icon1={<Photoshop />}
      icon2={<Illustrator />}
      tasks={"#ArtDirection #Marketing #Retail"}
      summary={
        "I designed eye-catching graphics for L'Oréal, including product ads, packaging, displays, and infographics for magazines and retail outlets. "
      }
      url1={"https://imgur.com/8sTRtk4.png"}
      url2={"https://imgur.com/dsAkwTE.png"}
      url3={"https://imgur.com/MrKLvRg.png"}
      url4={"https://imgur.com/w58pHph.png"}
      url5={"https://imgur.com/e7qubUs.png"}
    />
  );
};

export default LorealSamples;
