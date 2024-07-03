import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";
import MusicItem from "./MusicItem";
import "../styles/MusicList.css";

function MusicList({ searchTerm, category, urlCategory }) {
  const [discos, setDiscos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const musicDb = collection(db, "music");
    let qMusic = musicDb;

    if (searchTerm && category) {
      qMusic = query(
        musicDb,
        where("title", "==", searchTerm),
        where("category", "==", category)
      );
    } else if (searchTerm) {
      qMusic = query(musicDb, where("title", "==", searchTerm));
    } else if (category) {
      qMusic = query(musicDb, where("category", "==", category));
    } else if (urlCategory) {
      qMusic = query(musicDb, where("category", "==", urlCategory));
    }

    getDocs(qMusic)
      .then((musicResp) => {
        const sortedDiscos = musicResp.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }))
          .sort((a, b) => parseInt(b.id) - parseInt(a.id)); // Ordenar de mayor a menor según el id convertido a número
        setDiscos(sortedDiscos);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching music documents: ", error);
        setIsLoading(false);
      });
  }, [searchTerm, category, urlCategory]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <h2 className="musicCategoryTitle">Music</h2>
      <div className="musicContenedor">
        {discos.map((disc) => (
          <MusicItem disco={disc} key={disc.id} />
        ))}
      </div>
    </>
  );
}

export default MusicList;
