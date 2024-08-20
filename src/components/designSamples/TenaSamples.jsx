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
      url1={"https://i.postimg.cc/m2XVD0Yj/646982199905039-66595daad5163.png"}
      url2={"https://i.postimg.cc/hPLcR1VK/85bb2710483285-5a73628189312.jpg"}
      url3={
        "https://i.postimg.cc/nhX2Q0TJ/free-a4-magazine-mockup-FDR-310820-Prev3.png"
      }
    />
  );
};

export default TenaSamples;
