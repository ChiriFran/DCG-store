import { useContext } from "react";
import "../styles/Carrito.css";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import ItemListContainerDestacados from "./ItemListContainerDestacados";

const Carrito = () => {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const handleVaciar = () => {
    vaciarCarrito();
  };

  return (
    <div className="carritoContainer">
      <div className="carritoCard">
        <h1 className="carritoTitle">
          {carrito.length > 0 ? "Shopping Cart" : "Oops, you don't have any items in your cart! Here below are some of our products"}
        </h1>
        {carrito.length > 0 ? (
          <>
            <div className="carritoHeader">
              <span className="headerItem">Products</span>
              <span className="headerItem">Unit Price</span>
              <span className="headerItem">Quantity</span>
              <span className="headerItem">Total Price</span>
            </div>
            {carrito.map((prod) => (
              <div className="carritoItem" key={prod.id}>
                <div className="productDetails">
                  <img
                    src={prod.image}
                    alt={prod.title}
                    className="productImage"
                  />
                  <h2 className="titulo">{prod.title}</h2>
                </div>
                <h3 className="precio">${prod.price}</h3>
                <h3 className="carritoCantidad">
                  {" "}
                  <p className="mobileCantidad">Quantity: </p>
                  {prod.cantidad}
                </h3>
                <h3 className="precioTotal">
                  ${prod.price * prod.cantidad}{" "}
                </h3>
              </div>
            ))}
            <h2 className="precioFinal">Total: ${precioTotal()}</h2>
            <div className="buttonContainer">
              <div className="detallesCompra">
                <p className="detalleCompraText">Intrucciones especiales:</p>
                <textarea className="detallesInput" resize="none"/>
              </div>
              <div className="finalizarCompraContainer">
                <Link className="finalizarCompra" to="/Checkout">
                  Checkout
                </Link>
                <button onClick={handleVaciar} className="vaciarCarrito">
                  Vaciar Carrito
                </button>
              </div>
            </div>
          </>
        ) : null}
      </div>
      {carrito.length === 0 && <ItemListContainerDestacados />}
    </div>
  );
};

export default Carrito;
