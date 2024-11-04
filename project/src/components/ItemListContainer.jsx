import { useState } from "react";
import { useParams } from "react-router-dom";

import ItemList from "./ItemList";
import MusicList from "./MusicList";
import Loader from "./Loader";
import SearchFilters from "./SearchFilters";
import useProductos from "../helpers/useProductos";

import "../styles/ItemListContainer.css";

const ItemListContainer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const { category: urlCategory } = useParams();

  const { productos, isLoading, titulo } = useProductos(
    searchTerm,
    category,
    urlCategory
  );

  const handleSearch = (searchFilters) => {
    setSearchTerm(searchFilters.title);
    setCategory(searchFilters.category);
  };

  if (isLoading) return <Loader />;

  return (
    <div className="shopContainer">
      <SearchFilters onSearch={handleSearch} />
      <div className="productosContainer">
        <ItemList productos={productos} titulo={titulo} />
        <MusicList
          searchTerm={searchTerm}
          category={category}
          urlCategory={urlCategory}
        />
      </div>
    </div>
  );
};

export default ItemListContainer;
