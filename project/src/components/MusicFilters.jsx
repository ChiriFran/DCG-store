import { useState } from "react";
import '../styles/MusicFilters.css';

const MusicFilters = ({ onSearch }) => {
    const [author, setAuthor] = useState(""); // Filtro por autor
    const [order, setOrder] = useState("desc"); // 'asc' para ascendente, 'desc' para descendente

    const handleSearch = () => {
        onSearch({ author: author.toLowerCase(), order: order });
    };

    // Detectar la tecla Enter en el campo de búsqueda
    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <div className="music-filters">
            <input
                className="authorSearch"
                type="text"
                placeholder="Search by author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                onKeyDown={handleKeyDown}  // Detectar Enter en el input
            />
            <select
                className="orderSelect"
                value={order}
                onChange={(e) => setOrder(e.target.value)}
            >
                <option value="asc">From oldest to newest</option>
                <option value="desc">From newest to oldest</option>
            </select>
            <button className="btnBuscar" onClick={handleSearch}>Search</button>
        </div>
    );
};

export default MusicFilters;
