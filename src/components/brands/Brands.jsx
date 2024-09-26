import { useEffect, useState } from "react";
import "./Brands.css";
import Loader from "../Loader";

const brandsData = [
  {
    src: "https://i.postimg.cc/ncrjg3fj/logo-primary-pizzahut.png",
    alt: "Pizza Hut logo",
  },
  {
    src: "https://i.postimg.cc/JzBy4tnR/logo-tena.png",
    alt: "Tena logo",
  },
  {
    src: "https://i.postimg.cc/HxTj22tL/loreal-paris-logo.png",
    alt: "Loreal logo",
  },
  {
    src: "https://i.postimg.cc/ncS7h6GG/Fridays-logo.png",
    alt: "TGI Fridays logo",
  },
  {
    src: "https://i.postimg.cc/vHZfMQfm/Entel-Chile-Logo.png",
    alt: "Entel logo",
  },
  {
    src: "https://i.postimg.cc/NjWH1mVy/ex8-QRhv-E5g2-L57cat-200-x.png",
    alt: "Mamut logo",
  },
  {
    src: "https://i.postimg.cc/cJyvKZgw/logo-transp.png",
    alt: "Schopdog logo",
  },
  {
    src: "https://i.postimg.cc/LXVgK7sf/logo-bancoestado.png",
    alt: "Banco Estado logo",
  },
  {
    src: "https://i.postimg.cc/nrzr8hgb/logo-udla.png",
    alt: "UDLA logo",
  },
  {
    src: "https://i.postimg.cc/zvXbJjLQ/GREEN-LION-COFFEE.png",
    alt: "Green Lion logo",
  },
  {
    src: "https://i.postimg.cc/rFH0k5qh/logo-pisco-capel.png",
    alt: "Capel logo",
  },
  {
    src: "https://i.postimg.cc/PqjqX49M/ventisquero.png",
    alt: "Vantisquero logo",
  },
];

const Brands = () => {
  const [brandsImgs, setBrandsImgs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getBrands = async () => {
      const promises = brandsData.map((brand) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = brand.src;
          img.onload = () => resolve(img);
          img.onerror = () => reject();
        });
      });

      Promise.all(promises).then((images) => {
        setBrandsImgs(
          images.map((img, index) => (
            <li key={index}>
              <img src={img.src} alt={brandsData[index].alt} loading="lazy" />
            </li>
          ))
        );
        setIsLoading(false);
      });
    };

    getBrands();
  }, []);

  return (
    <aside className="brands">
      <h3>Brands I&apos;ve Collaborated With:</h3>
      <ul className="brands-list" style={{ position: "relative" }}>
        {!isLoading ? (
          brandsImgs
        ) : (
          <div
            style={{
              position: "absolute",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "120px",
              width: "100%",
              gap: "1rem",
            }}
          >
            <h1
              style={{
                fontSize: "2rem",
                color: "#ad9c7c",
                padding: "2rem 0",
              }}
            >
              Loading
            </h1>
            <Loader />
          </div>
        )}
      </ul>
    </aside>
  );
};

export default Brands;
