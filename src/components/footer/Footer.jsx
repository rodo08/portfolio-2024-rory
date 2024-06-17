import "./Footer.css";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer>
      <section className="footer-info">
        <ul>
          <li style={{ display: "flex", gap: "0.5rem", color: "#fff" }}>
            <p>&#169; Rodrigo Rosales Moya, </p>
            <span style={{ color: "#ffa800" }}>{year}</span>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
