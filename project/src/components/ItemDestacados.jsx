import { Link } from "react-router-dom";
import "../styles/ItemDestacados.css";

const ItemDestacados = ({ producto }) => {
  return (
    <div className="itemDestacados">
      <div className="itemDestacadosImgContainer">
        <img
          src={producto.image}
          alt={producto.title}
          className="itemDestacadosImg"
        ></img>
        <Link
          to={`/ProductoDetalles/${producto.id}`}
          className="ver-mas itemDestacadosButton"
        ></Link>
      </div>
      <h4 className="itemDestacadosCategory">{producto.category}</h4>
      <h3 className="itemDestacadosPrice">Price: ${producto.price}</h3>{" "}
    </div>
  );
};

export default ItemDestacados;
