import DesignSample from "./DesignSample";
import Photoshop from "../../assets/icons/Photoshop";
import Illustrator from "../../assets/icons/Illustrator";

const CapelSamples = () => {
  return (
    <DesignSample
      title={"Capel"}
      icon1={<Photoshop />}
      icon2={<Illustrator />}
      tasks={"#Branding #Retail"}
      summary={
        "Developed creative visuals for Capel's BTL campaigns, collaborating with marketing to create engaging, fun, and exciting illustrations, animations, POS materials, and social media posts. "
      }
      url1={
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ce957e10476259.560e588f825ab.jpg"
      }
      url2={
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/03886e10476259.560e588e68a1f.jpg"
      }
    />
  );
};

export default CapelSamples;
