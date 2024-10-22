import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import Navbar from "./components/Navbar.jsx";
import Eventos from "./components/Eventos.jsx";
import Blogs from "./components/Blogs.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Faq from "./components/Faq.jsx";
import LogIn from "./components/LogIn.jsx";
import SignUp from "./components/SingUp.jsx";
import Carrito from "./components/Carrito.jsx";
import Checkout from "./components/Checkout.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import MusicList from "./components/MusicList.jsx";
import ContactFooter from "./components/ContactFooter.jsx";
import Footer from "./components/Footer.jsx";
import { CartProvider } from "./context/CartContext.jsx";

function App() {
  return (
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
            <Route path="/music" element={<MusicList />} />
            <Route
              path="/ProductoDetalles/:id"
              element={<ItemDetailContainer />}
            />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Faq" element={<Faq />} />
            <Route path="/Eventos" element={<Eventos />} />
            <Route path="/Blogs" element={<Blogs />} />
            <Route path="*" element={<p>Not Found</p>} />
            <Route path="/LogIn" element={<LogIn />} />
            <Route path="/SingUp" element={<SignUp />} />
            <Route path="/Carrito" element={<Carrito />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </ScrollToTop>
        <ContactFooter />
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
