import MusicItem from "./MusicItem";
import '../styles/MusicList.css'

function MusicList ({ discos, titulo }) {
  return (
    <>
      <h2 className="musicCategoryTitle">{titulo}</h2>
      <div className="musicContenedor">
        {discos.map((disc) => (
          <MusicItem disco={disc} key={disc.id} />
        ))}
      </div>
    </>
  );
}

export default MusicList;
