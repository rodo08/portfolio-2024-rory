import "./Nav.css";
import RodLogo from "../../assets/icons/RodLogo";
import Socials from "../socials/Socials";

const Nav = () => {
  return (
    <>
      <nav className="nav">
        <div className="nav-logo">
          <RodLogo />
          <h1>
            Rodrigo Rosales Moya. <br /> Web Developer <span>&</span> Designer.
          </h1>
        </div>

        <Socials />
      </nav>
    </>
  );
};

export default Nav;
