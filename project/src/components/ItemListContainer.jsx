import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";
import { useParams } from "react-router-dom";

import ItemList from "./ItemList";
import MusicList from "./MusicList";
import Loader from "./Loader";
import SearchFilters from "./SearchFilters";
import FooterNavLinks from "./FooterNavLinks";
import Contacto from "./Contacto";
import Newsletter from "./Newsletter";

import "../styles/ItemListContainer.css";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [discos, setDiscos] = useState([]);
  const [titulo, setTitulo] = useState("Todos los productos");
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const { category: urlCategory } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const productosDb = collection(db, "productos");
    const musicDb = collection(db, "music");
    let qProductos = productosDb;
    let qMusic = musicDb;

    // Construir la consulta según los filtros aplicados
    if (searchTerm && category) {
      qProductos = query(
        productosDb,
        where("title", "==", searchTerm),
        where("category", "==", category)
      );
      qMusic = query(
        musicDb,
        where("title", "==", searchTerm),
        where("category", "==", category)
      );
    } else if (searchTerm) {
      qProductos = query(productosDb, where("title", "==", searchTerm));
      qMusic = query(musicDb, where("title", "==", searchTerm));
    } else if (category) {
      qProductos = query(productosDb, where("category", "==", category));
      qMusic = query(musicDb, where("category", "==", category));
    } else if (urlCategory) {
      qProductos = query(productosDb, where("category", "==", urlCategory));
      qMusic = query(musicDb, where("category", "==", urlCategory));
    }

    Promise.all([getDocs(qProductos), getDocs(qMusic)])
      .then(([productosResp, musicResp]) => {
        setProductos(
          productosResp.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
        const sortedDiscos = musicResp.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }))
          .sort((a, b) => parseInt(b.id) - parseInt(a.id)); // Ordenar de mayor a menor según el id convertido a número
        setDiscos(sortedDiscos);
        setIsLoading(false);
        if (category) {
          setTitulo(capitalizeFirstLetter(category));
        } else if (urlCategory) {
          setTitulo(capitalizeFirstLetter(urlCategory));
        } else {
          setTitulo("Todos los productos");
        }
      })
      .catch((error) => {
        console.error("Error fetching documents: ", error);
        setIsLoading(false);
      });
  }, [searchTerm, category, urlCategory]);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const handleSearch = (searchFilters) => {
    setSearchTerm(searchFilters.title);
    setCategory(searchFilters.category);
  };

  if (isLoading) return <Loader />;

  return (
    <>
      <SearchFilters onSearch={handleSearch} />
      <div className="productosContainer">
        <ItemList productos={productos} titulo={titulo} />
        <MusicList discos={discos} titulo="Music" />
      </div>

      <div className="footerNavlinksContainer">
        <div className="footerNavlinks">
          <FooterNavLinks />
          <Newsletter />
          <Contacto />
        </div>
      </div>
    </>
  );
};

export default ItemListContainer;
