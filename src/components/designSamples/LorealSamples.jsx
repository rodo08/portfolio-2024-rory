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
      url1={"https://i.postimg.cc/FRVVQqFj/j9u22l-QN-portfolio-or-album-1.png"}
      url2={"https://i.postimg.cc/nhnZF91B/8d481415969465-5629963c24438.jpg"}
      url3={
        "https://i.postimg.cc/zvp7TQ9J/650040adda65f63de7167050-ezgif-2-368b3503cf.png"
      }
      url4={"https://i.postimg.cc/K8QbRc9V/95ae4915969465-56299628ae7a0.jpg"}
      url5={"https://i.postimg.cc/yd4LKcmz/68565e15969465-5629974a05dd8.png"}
    />
  );
};

export default LorealSamples;
