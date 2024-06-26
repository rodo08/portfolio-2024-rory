import DesignSample from "./DesignSample";
import Photoshop from "../../assets/icons/Photoshop";
import Illustrator from "../../assets/icons/Illustrator";

const UdlaSamples = () => {
  return (
    <DesignSample
      title={"Universidad de las Americas"}
      icon1={<Photoshop />}
      icon2={<Illustrator />}
      tasks={"#ArtDirection #Retail"}
      summary={
        "I designed print-ready graphics for the University de las Americas' admissions campaign, collaborating with the marketing team to convey academic excellence and student success. "
      }
      url1={
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/874a0310523469.560e65b9ce736.jpg"
      }
      url2={
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f228f110523469.560e64aad5951.jpg"
      }
    />
  );
};

export default UdlaSamples;
