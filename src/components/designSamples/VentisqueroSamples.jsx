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
      url1={"https://i.postimg.cc/fRPHH6ky/42e40f16634807-5a4fdf23732d3.png"}
      url2={
        "https://i.postimg.cc/rwsnN8V7/10-7ce7644c-cca0-40c5-ae6b-ecb566f326c7n.png"
      }
      url3={
        "https://i.postimg.cc/zvdwyggv/optimized_product_thumb_document-_42_.png"
      }
    />
  );
};

export default VentisqueroSamples;
