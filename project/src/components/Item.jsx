import { Link } from "react-router-dom";
import "../styles/Item.css";

const Item = ({ producto }) => {
  return (
    <div className="item">
      <div className="itemImgContainer">
        <img
          src={producto.image}
          alt={producto.title}
          className="itemImg"
        ></img>
        <Link
          to={`/ProductoDetalles/${producto.id}`}
          className="ver-mas itemButton"
        ></Link>
      </div>
      <h2 className="itemTitle">
        {producto.title} ({producto.id})
      </h2>
      <h4 className="itemCategory">{producto.category}</h4>
      <h3 className="itemPrice">Price: ${producto.price}</h3>{" "}
    </div>
  );
};

export default Item;