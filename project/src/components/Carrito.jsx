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
      <h1 className="carritoTitle">Carrito vacio</h1>
      {carrito.length > 0 ? (
        <>
          {carrito.map((prod) => (
            <div className="carritoItem" key={prod.id}>
              <h2 className="titulo">{prod.title}</h2>
              <h3 className="cantidad">Cantidad: {prod.cantidad} unidad</h3>
              <h3 className="precio">Precio: ${prod.price}</h3>
              <h2 className="precioTotal">
                Total: $ {prod.price * prod.cantidad}
              </h2>
            </div>
          ))}
          <h2 className="precioFinal">Precio final: ${precioTotal()}</h2>
          <div className="buttonContainer">
            <Link className="finalizarCompra" to="/Checkout">
              Finalizar Compra
            </Link>
            <button onClick={handleVaciar} className="vaciarCarrito">
              Vaciar Carrito
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-shopping-cart-down"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#000000"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
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
      ) : (
        <ItemListContainerDestacados />
      )}
    </div>
  );
};

export default Carrito;
