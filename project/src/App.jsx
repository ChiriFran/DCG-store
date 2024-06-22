import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import Navbar from "./components/Navbar.jsx";
import EventosBlogs from "./components/EventosBlogs.jsx";
import LogIn from "./components/LogIn.jsx";
import SignUp from "./components/SingUp.jsx";
import Carrito from "./components/Carrito.jsx";
import Checkout from "./components/Checkout.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import { CartProvider } from "./context/CartContext.jsx";

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <ScrollToTop>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Productos" element={<ItemListContainer />} />
              <Route
                path="/Productos/:category"
                element={<ItemListContainer />}
              />
              <Route
                path="/ProductoDetalles/:id"
                element={<ItemDetailContainer />}
              />
              <Route path="/EventosBlogs" element={<EventosBlogs />} />
              <Route path="*" element={<p>Not Found</p>} />
              <Route path="/LogIn" element={<LogIn />} />
              <Route path="/SingUp" element={<SignUp />} />

              <Route path="/Carrito" element={<Carrito />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </ScrollToTop>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
