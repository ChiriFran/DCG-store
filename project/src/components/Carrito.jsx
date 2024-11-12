// Carrito.jsx
import { useContext, useState, useEffect } from "react";
import "../styles/Carrito.css";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { getUserLocation } from "../helpers/UserLocation";
import ItemListContainerDestacados from "./ItemListContainerDestacados";

const Carrito = () => {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
  const [pais, setPais] = useState("");

  useEffect(() => {
    if (carrito.length > 0) {
      const obtenerPais = async () => {
        const paisUsuario = await getUserLocation();
        if (paisUsuario) {
          setPais(paisUsuario);
        }
      };
      obtenerPais();
    }
  }, [carrito.length]);

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
                  <img src={prod.image} alt={prod.title} className="productImage" />
                  <h2 className="titulo">{prod.title}</h2>
                </div>
                <h3 className="precio">${prod.price}</h3>
                <h3 className="carritoCantidad">
                  <p className="mobileCantidad">Quantity: </p>
                  {prod.cantidad}
                </h3>
                <h3 className="precioTotal">
                  ${prod.price * prod.cantidad}
                </h3>
              </div>
            ))}
            <h2 className="precioFinal">Total: ${precioTotal()}</h2>
            <div className="buttonContainer">
              <div className="detallesCompra">
                <p className="detalleCompraText">Special Instructions:</p>
                <textarea className="detallesInput" resize="none" />
                <Link to="/Faq" className="carritoFaq">
                  FAQ / Shipping
                </Link>
              </div>
              <div className="finalizarCompraContainer">
                {pais === "Argentina" ? (
                  <button className="mercadoPagoBtn" >
                    Checkout MP
                  </button>
                ) : (
                  <button className="payPalBtn">
                    Checkout PAYPAL
                  </button>
                )}
                <button onClick={handleVaciar} className="vaciarCarrito">
                empty cart
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
