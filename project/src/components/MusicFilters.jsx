import { useState } from "react";
import '../styles/MusicFilters.css';

const MusicFilters = ({ onSearch, authors }) => {
    const [author, setAuthor] = useState("");
    const [order, setOrder] = useState("desc");
    const [suggestions, setSuggestions] = useState([]);

    const handleSearch = () => {
        onSearch({ author: author.toLowerCase(), order: order });
        setSuggestions([]); // Limpiar sugerencias después de buscar
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    };

    const handleChange = (e) => {
        const value = e.target.value;
        setAuthor(value);

        // Filtrar autores según el término de búsqueda
        if (value.length > 0) {
            const filteredSuggestions = authors.filter((a) =>
                a.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        setAuthor(suggestion);
        setSuggestions([]);
    };

    return (
        <div className="music-filters">
            <div className="musicInputContainer">
                <input
                    className="authorSearch"
                    type="text"
                    placeholder="Search by author"
                    value={author}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                />

                {suggestions.length > 0 && (
                    <ul className="suggestions-list">
                        {suggestions.map((suggestion, index) => (
                            <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
                                {suggestion}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

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
