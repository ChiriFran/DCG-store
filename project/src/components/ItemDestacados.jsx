import { Link } from "react-router-dom";
import "../styles/ItemDestacados.css";

const ItemDestacados = ({ producto }) => {
  // Asegúrate de que 'producto' no es undefined
  if (!producto) {
    return null;
  }

  // Asegúrate de que 'producto.title' no es undefined
  const title = producto.title ? producto.title : "";

  return (
    <>
      <div className="card itemDestacados">
        <div className="card-img itemDestacadosImgContainer">
          <img
            src={producto.image}
            alt={title}
            className="itemDestacadosImg"
          ></img>
          <Link
            to={`/ProductoDetalles/${producto.id}`}
            className="ver-mas itemDestacadosButton"
          ></Link>
        </div>
        <div className="card-info">
          <h4 className="text-body">
            {title.length > 6 ? title.substring(0, 10) + "..." : title}
          </h4>
        </div>
        <div className="card-footer">
          <span className="ntext-title itemDestacadosPrice">
            ${producto.price}
          </span>{" "}
          <div className="card-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-shopping-cart"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#f4f4f4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
              <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
              <path d="M17 17h-11v-14h-2"></path>
              <path d="M6 5l14 1l-1 7h-13"></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDestacados;
