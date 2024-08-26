import DesignSample from "./DesignSample";
import Illustrator from "../../assets/icons/Illustrator";
import { Figma } from "../../assets/icons/Figma";

const AchsSamples = () => {
  return (
    <DesignSample
      title={"ACHS"}
      icon1={<Figma />}
      icon2={<Illustrator />}
      tasks={"#UX #UI-Kit #Branding "}
      summary={
        "Development of a repository web platform for the UI module implementation kit for the communication products of the Chilean Security Association. These modules were frameworks designed and implemented by the team to facilitate their implementation for the ACHS development team."
      }
      url1={"https://i.postimg.cc/ZqHwtMj1/2-154.webp"}
      url2={"https://i.postimg.cc/ydNvVybW/3-154.webp"}
      url3={"https://i.postimg.cc/pdRsSHQf/4-150.webp"}
      url4={"https://i.postimg.cc/fytCdTZN/c2-W3e-PMOAh2-Dji-EFh-P50.webp"}
    />
  );
};

export default AchsSamples;
