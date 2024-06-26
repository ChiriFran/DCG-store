import { Link } from "react-router-dom";
import "../styles/MusicItem.css";

const MusicItem = ({ disco }) => {
  return (
    <div className="musicItem">
      <div className="musicItemImgContainer">
        <img src={disco.image} alt={disco.title} className="musicItemImg"></img>
        <Link
          to={`/ProductoDetalles/${disco.id}`}
          className="ver-mas musicItemButton"
        ></Link>
        <div className="musicItemOverlay">
          <div className="musicItemTitle">{disco.title}</div>
        </div>
      </div>
    </div>
  );
};

export default MusicItem;
