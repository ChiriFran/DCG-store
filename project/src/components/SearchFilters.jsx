import { useState } from "react";
import '../styles/SearchFilters.css'

const SearchFilters = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");

  const handleSearch = () => {
    onSearch({ title: searchTerm, category: category.toLowerCase() });
  };

  return (
    <div className="search-filters">
      <input
        className="barraBusqueda"
        type="text"
        placeholder="Buscar por nombre"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select className="categorySelect" value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Todas las categorías</option>
        <option value="Remeras">Remeras</option>
        <option value="Buzos">Buzos</option>
        <option value="Gorras">Gorras</option>
        <option value="Bolsas">Bolsas</option>
      </select>
      <button className="btnBuscar" onClick={handleSearch}>Buscar</button>
    </div>
  );
};

export default SearchFilters;
