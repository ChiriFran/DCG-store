import { useContext, useState, useEffect } from "react";
import "../styles/Carrito.css";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { getUserLocation } from "../helpers/UserLocation";
import axios from "axios";
import ItemListContainerDestacados from "./ItemListContainerDestacados";

const Carrito = () => {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
  const [pais, setPais] = useState("");

  // Código postal de origen (ajústalo según tu ubicación)
  const zipCode = "1706";

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

  const handleMercadoPago = async () => {
    try {
      // Ejemplo de costo de envío (ajusta según la lógica de tu negocio)
      const shippingCost = pais === "Argentina" ? 500 : 0;

      const response = await axios.post("http://localhost:3001/crear-preferencia", {
        items: carrito,
        shippingCost,
        zipCode,
      });

      if (response.data.id) {
        window.location.href = `https://www.mercadopago.com/checkout/v1/redirect?pref_id=${response.data.id}`;
      }
    } catch (error) {
      console.error("Error al procesar el pago con Mercado Pago", error);
    }
  };

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
                  <button onClick={handleMercadoPago} className="mercadoPagoBtn">
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
