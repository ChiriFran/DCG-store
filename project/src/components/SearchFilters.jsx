import { useState } from "react";
import '../styles/SearchFilters.css';

const SearchFilters = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");

  const handleSearch = () => {
    onSearch({ title: searchTerm, category: category.toLowerCase() });
  };

  // Detectar la tecla Enter en el campo de búsqueda
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search-filters">
      <input
        className="barraBusqueda"
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}  // Detecta Enter en el input
      />
      <select
        className="categorySelect"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">See all categories</option>
        <option value="Remeras">T-shirts</option>
        <option value="Buzos">Hoodie</option>
        <option value="Gorras">Caps</option>
        <option value="Bolsas">Bags</option>
      </select>
      <button className="btnBuscar" onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchFilters;
