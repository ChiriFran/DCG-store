import React, { useState, useEffect } from "react";
import MusicItem from "./MusicItem";
import Loader from "./Loader";
import MusicFilters from "./MusicFilters"; // Importar el componente de filtros
import useMusicItems from "../helpers/useMusicList";  // Asegúrate de que useMusicItems se llame dentro de un componente

import "../styles/MusicList.css";

function MusicList() {
  const [filters, setFilters] = useState({
    author: "", // Filtrado por autor
    order: "desc", // Orden descendente por defecto
  });
  const [discos, setDiscos] = useState([]); // Almacenar discos aquí
  const { discos: musicData, isLoading } = useMusicItems(); // Llamar a useMusicItems directamente aquí

  useEffect(() => {
    if (musicData.length > 0) {
      setDiscos(musicData); // Almacenar los discos una vez obtenidos
    }
  }, [musicData]); // Dependencia para actualizar discos cuando los datos cambian

  if (isLoading) return <Loader />;

  // Filtrar discos por autor
  const filteredByAuthor = discos.filter((disc) =>
    disc.author.toLowerCase().includes(filters.author.toLowerCase())
  );

  // Ordenar discos
  const sortedDiscos = filteredByAuthor.sort((a, b) =>
    filters.order === "asc" ? a.order - b.order : b.order - a.order
  );

  const handleSearch = (newFilters) => {
    setFilters({ ...filters, ...newFilters });
  };

  return (
    <>
      <MusicFilters onSearch={handleSearch} />
      <div className="musicContenedor">
        {sortedDiscos.map((disc) => (
          <MusicItem disco={disc} key={disc.id} />
        ))}
      </div>
    </>
  );
}

export default MusicList;
