import DesignSample from "./DesignSample";
import Photoshop from "../../assets/icons/Photoshop";
import Illustrator from "../../assets/icons/Illustrator";
import Indesign from "../../assets/icons/Indesign";

const PizzaHutSamples = () => {
  return (
    <DesignSample
      title={"Pizza Hut"}
      icon1={<Photoshop />}
      icon2={<Illustrator />}
      icon3={<Indesign />}
      tasks={"#GraphicDesign #Marketing #Branding"}
      summary={
        "I created and developed graphics for restaurants and mass media, collaborating with the marketing team to ensure effective brand communication. My work included logos, promotional materials, social media graphics, website banners, menu boards, and table tents."
      }
      url1={"https://i.postimg.cc/Vs4WG3Vw/newspaper.png"}
      url2={"https://i.postimg.cc/63XfgwKW/newspaper-fullpage.png"}
      url3={
        "https://i.postimg.cc/vmRrxMcr/people-hanging-out-together-coffee-shop_53876-12189.png"
      }
      url4={"https://i.postimg.cc/VsFKyS53/67311110523755-5a70ba2552191.png"}
      url5={
        "https://i.postimg.cc/wTvcS0Cm/optimized_product_thumb_uploaded_stage_image.png"
      }
      url6={"https://i.postimg.cc/PJdKpHV3/57760010523755-5a70af4976813.png"}
    />
  );
};

export default PizzaHutSamples;
