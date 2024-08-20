import DesignSample from "./DesignSample";
import Photoshop from "../../assets/icons/Photoshop";
import Illustrator from "../../assets/icons/Illustrator";
import Indesign from "../../assets/icons/Indesign";

const EntelSamples = () => {
  return (
    <DesignSample
      title={"Entel"}
      icon1={<Photoshop />}
      icon2={<Illustrator />}
      icon3={<Indesign />}
      tasks={"#ArtDirection #Marketing #Branding #Retail"}
      summary={
        "I created and developed graphics for advertisement in mixed media (such as magazines, brand displays, and store's requirements) working at the art direction and production department."
      }
      url1={"https://i.postimg.cc/C17k2qJ7/taquillaq.png"}
      url2={
        "https://i.postimg.cc/5NRq18Jk/optimized_product_thumb_uploaded_stage_image_(1).png"
      }
      url3={"https://i.postimg.cc/63rYpqc4/76025b10512979-5a4d22e95a512.png"}
      url4={"https://i.postimg.cc/5tvmsyZK/optimized-product-thumb-3383-el.png"}
      url5={"https://i.postimg.cc/fR1K7mg0/bam.png"}
    />
  );
};

export default EntelSamples;
