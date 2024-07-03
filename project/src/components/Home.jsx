import "../styles/Home.css";
import ItemListContainerDestacados from "./ItemListContainerDestacados";
import HomeVideo from "./HomeVideo";
import HomeNavLinks from "./HomeNavLinks";
import Newsletter from "./Newsletter";
import PopUpNewsletter from "./PopUpNewsletter";
import Contacto from "./Contacto";

const Home = () => {
  return (
    <section className="homeContainer">
      <HomeVideo />
      <ItemListContainerDestacados />
      <div className="linksContainer">
        <div className="links">
          <HomeNavLinks />
          <Newsletter />
          <PopUpNewsletter />
          <Contacto />
        </div>
      </div>
    </section>
  );
};

export default Home;
