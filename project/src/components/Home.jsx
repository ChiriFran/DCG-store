import { Link } from "react-router-dom";
import "../styles/Home.css";
import ItemListContainerDestacados from "./ItemListContainerDestacados";

const Home = () => {
  return (
    <section className="homeContainer">
      <section className="inicioVideo">
      </section>
      <Link to={`/Productos`} className="homeLink">
        Shop now!
      </Link>
      <h3 className="homeText">DCG Basics</h3>
      <ItemListContainerDestacados />
    </section>
  );
};

export default Home;
