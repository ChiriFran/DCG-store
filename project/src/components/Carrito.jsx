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
          {carrito.length > 0 ? "Cart" : "Oops, you don't have any items in your cart! Here below are some of our products"}
        </h1>
        {carrito.length > 0 ? (
          <>
            <div className="carritoHeader">
              <span className="headerItem">Products</span>
              <span className="headerItem">Price</span>
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
                <h3 className="cantidad">
                  {" "}
                  <p className="mobileCantidad">Quantity: </p>
                  {prod.cantidad}
                </h3>
                <h3 className="precioTotal">
                  ${prod.price * prod.cantidad}{" "}
                  <svg
                    className="deleteSvg"
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-trash"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    stroke-width="1"
                    stroke="#ffffff"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 7l16 0" />
                    <path d="M10 11l0 6" />
                    <path d="M14 11l0 6" />
                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                  </svg>
                </h3>
              </div>
            ))}
            <h2 className="precioFinal">${precioTotal()}</h2>
            <div className="buttonContainer">
              <Link className="finalizarCompra" to="/Checkout">
                Finalizar Compra
              </Link>
              <button onClick={handleVaciar} className="vaciarCarrito">
                Vaciar Carrito
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-shopping-cart-down"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#000000"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                  <path d="M12.5 17h-6.5v-14h-2" />
                  <path d="M6 5l14 1l-.859 6.011m-2.641 .989h-10.5" />
                  <path d="M19 16v6" />
                  <path d="M22 19l-3 3l-3 -3" />
                </svg>
              </button>
            </div>
          </>
        ) : null}
      </div>
      {carrito.length === 0 && <ItemListContainerDestacados />}
    </div>
  );
};

export default Carrito;
