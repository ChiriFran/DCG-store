import "../styles/MusicItem.css";

const MusicItem = ({ disco }) => {
  return (
    <div className="musicItemContainer">
      <div className="musicItem">
        <iframe src={disco.urlSong} seamless>
          <a href={disco.urlToBuy}>{disco.author}</a>
        </iframe>
      </div>
    </div>
  );
};

export default MusicItem;
