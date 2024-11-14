import React, { useState, useEffect } from "react";
import MusicItem from "./MusicItem";
import Loader from "./Loader";
import MusicFilters from "./MusicFilters";
import useMusicItems from "../helpers/useMusicList";
import "../styles/MusicList.css";

function MusicList() {
  const [filters, setFilters] = useState({
    author: "",
    order: "desc",
  });
  const [discos, setDiscos] = useState([]);
  const { discos: musicData, isLoading } = useMusicItems();

  useEffect(() => {
    if (musicData.length > 0) {
      setDiscos(musicData);
    }
  }, [musicData]);

  if (isLoading) return <Loader />;

  // Filtrar discos por autor
  const filteredByAuthor = discos.filter((disc) =>
    disc.author.toLowerCase().includes(filters.author.toLowerCase())
  );

  // Obtener lista de autores únicos
  const uniqueAuthors = [...new Set(discos.map((disc) => disc.author))];

  // Ordenar discos
  const sortedDiscos = filteredByAuthor.sort((a, b) =>
    filters.order === "asc" ? a.order - b.order : b.order - a.order
  );

  const handleSearch = (newFilters) => {
    setFilters({ ...filters, ...newFilters });
  };

  return (
    <>
      <MusicFilters onSearch={handleSearch} authors={uniqueAuthors} />
      <div className="musicContenedor">
        {sortedDiscos.map((disc) => (
          <MusicItem disco={disc} key={disc.id} />
        ))}
      </div>
    </>
  );
}

export default MusicList;
