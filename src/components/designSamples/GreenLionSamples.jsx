import DesignSample from "./DesignSample";
import Photoshop from "../../assets/icons/Photoshop";
import Illustrator from "../../assets/icons/Illustrator";

const GreenLionSamples = () => {
  return (
    <DesignSample
      title={"Green Lion Coffee"}
      icon1={<Photoshop />}
      icon2={<Illustrator />}
      tasks={"#ArtDirection #Branding #Retail"}
      summary={
        "Design of appealing logo that reflects quality, health, and naturalness of a medicinal cannabis coffee brand. It should be recognizable and usable in all media."
      }
      url1={
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/9a76b361742473.5a78a7711ca5b.jpg"
      }
      url2={
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d2a21d61742473.5a78a7711c33d.jpg"
      }
      url3={
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a2435361742473.5a78a7711babb.jpg"
      }
      url4={
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6234f161742473.5a78a7711c75d.jpg"
      }
    />
  );
};

export default GreenLionSamples;
