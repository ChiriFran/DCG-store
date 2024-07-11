import "../styles/Home.css";
import ItemListContainerDestacados from "./ItemListContainerDestacados";
import HomeVideo from "./HomeVideo";

const Home = () => {
  return (
    <section className="homeContainer">
      <HomeVideo />
      <ItemListContainerDestacados />
    </section>
  );
};

export default Home;
