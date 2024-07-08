import { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import "../styles/ItemDetail.css";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ item }) => {
  const { carrito, agregarAlCarrito, eliminarDelCarrito } =
    useContext(CartContext);

  const [cantidad, setCantidad] = useState(1);

  const handleRestar = () => {
    setCantidad((prevCantidad) => Math.max(prevCantidad - 1, 1));
  };

  const handleSumar = () => {
    setCantidad((prevCantidad) => Math.min(prevCantidad + 1, item.stock));
  };

  const handleAgregarAlCarrito = () => {
    agregarAlCarrito(item, cantidad);
    setCantidad(1);
  };

  const handleEliminarDelCarrito = () => {
    const cantidadEnCarrito =
      carrito.find((producto) => producto.id === item.id)?.cantidad || 0;
    const cantidadAEliminar = Math.min(cantidadEnCarrito, cantidad);
    eliminarDelCarrito(item.id, cantidadAEliminar);
    setCantidad(1);
  };

  // Contar la cantidad de productos en el carrito con el mismo ID que el producto actual
  const cantidadEnCarrito = carrito.reduce((total, producto) => {
    return producto.id === item.id ? total + producto.cantidad : total;
  }, 0);

  return (
    <div className="itemDetailContainer">
      <img className="itemDetailImg" src={item.imageDetail} alt={item.title} />
      <div className="itemDetail">
        <h3 className="itemDetailTitle">{item.title}</h3>
        <p className="itemDetailPrice">$ {item.price}</p>

        {/*         <h3 className="itemId">SKU: #{item.id}</h3>
        <p className="itemDetailCategory">{item.category}</p> */}

        <div className="botonesComprarEliminar">
          <ItemCount
            cantidad={cantidad}
            handleSumar={handleSumar}
            handleRestar={handleRestar}
            handleAgregar={handleAgregarAlCarrito}
          />
          <button
            className="eliminarDelCarrito"
            onClick={handleEliminarDelCarrito}
          >
            Remove
          </button>
        </div>
        <p className="cantidadEnCarrito">
          Cart: {cantidadEnCarrito} unit/s added.
        </p>

        <p className="itemDetailDescription">{item.description}</p>
      </div>
    </div>
  );
};

export default ItemDetail;
