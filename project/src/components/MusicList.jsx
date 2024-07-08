import React from "react";
import MusicItem from "./MusicItem";
import Loader from "./Loader";
import useMusicItems from "../helpers/useMusicList";

import "../styles/MusicList.css";

function MusicList({ searchTerm, category, urlCategory }) {
  const { discos, isLoading } = useMusicItems(
    searchTerm,
    category,
    urlCategory
  );

  if (isLoading) return <Loader />;

  // Sort discos by order in descending order
  const sortedDiscos = discos.sort((a, b) => b.order - a.order);

  return (
    <>
      <h2 className="musicCategoryTitle">Music</h2>
      <div className="musicContenedor">
        {sortedDiscos.map((disc) => (
          <MusicItem disco={disc} key={disc.id} />
        ))}
      </div>
    </>
  );
}

export default MusicList;
