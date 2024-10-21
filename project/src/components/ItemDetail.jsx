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

        <div className="itemmDetailDescriptionList">
          <ul>
            <li>Unisex Hoodie</li>
            <li>Relaxed Fit</li>
            <li>70% premium cotton / 30% polyester</li>
            <li>Logo puff print on the back</li>
            <li>Faux leather logo patch on the sleeve</li>
            <li>Includes our unique Mutual Rytm rubber tag, a Bandcamp download code and stickers</li>
          </ul>

          <div className="sizeChartContainer">
            <ul>
              <li>
                <span>SIZE 1:</span><p>Marco is 1.80m and wears a Size M. For a comfortable, relaxed fit, choose your regular size. For an oversized look, go one size up!</p>
              </li>
              <li>
                <span>SIZE 2:</span><p> Nina is 1.71m and wears a Size S. For a comfortable, relaxed fit, choose your regular size. For an oversized look, go one size up!</p>
              </li>
            </ul>

            <div className="sizeGridContainer">
              <div class="sizeGrid">
                <div class="div1"></div>
                <div class="div2">S</div>
                <div class="div3">M</div>
                <div class="div4">L</div>
                <div class="div5">XL</div>
                <div class="div6">XXL</div>
                <div class="div7">Length</div>
                <div class="div8">60</div>
                <div class="div9">62</div>
                <div class="div10">66</div>
                <div class="div11">68</div>
                <div class="div12">70</div>
                <div class="div13">Chest</div>
                <div class="div14">62</div>
                <div class="div15">64</div>
                <div class="div16">66</div>
                <div class="div17">68</div>
                <div class="div18">70</div>
              </div>
            </div>
          </div>

          <div className="careIntructions">
            <p>Care Instructions</p>
            <ul>
              <li>Wash before use for the perfect look</li>
              <li>Desired vintage effect can be enhanced by washing</li>
              <li>Gentle cycle 30°</li>
              <li>Wash with similar colors</li>
              <li>Wash and iron inside-out</li>
            </ul>
          </div>


        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
