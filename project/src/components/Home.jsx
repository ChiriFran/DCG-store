import "../styles/Home.css";
import ItemListContainerDestacados from "./ItemListContainerDestacados";
import HomeVideo from "./HomeVideo";
import HomeNavLinks from "./HomeNavLinks";
import Newsletter from "./Newsletter";
import Contacto from "./Contacto";

const Home = () => {
  return (
    <section className="homeContainer">
      <HomeVideo />
      <h3 className="homeText">DCG Basics</h3>
      <ItemListContainerDestacados />
      <div className="linksContainer">
        <div className="links">
          <HomeNavLinks />
          <Newsletter />
          <Contacto />
        </div>
      </div>
    </section>
  );
};

export default Home;
