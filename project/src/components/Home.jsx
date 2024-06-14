import "../styles/Home.css";
import ItemListContainerDestacados from "./ItemListContainerDestacados";
import HomeVideo from "./HomeVideo";

const Home = () => {
  return (
    <section className="homeContainer">
      <HomeVideo />
      <h3 className="homeText">DCG Basics</h3>
      <ItemListContainerDestacados />
    </section>
  );
};

export default Home;
