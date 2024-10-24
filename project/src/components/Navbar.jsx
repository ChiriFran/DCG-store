import React, { useState, useContext, useEffect, useRef } from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { carrito } = useContext(CartContext);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuRef = useRef(); // Referencia para el menú

  const getTotalItems = () => {
    return carrito.reduce((total, prod) => total + prod.cantidad, 0);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    document.body.classList.toggle("no-scroll");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  // Detecta clics fuera del menú
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        if (showMenu) {
          toggleMenu(); // Cierra el menú si el clic es fuera de él
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`nav ${showMenu ? "active" : ""} ${isScrolled ? "scrolled" : ""}`}>
        <ul className="userMenuDesktop">
          {isLoggedIn ? (
            <li>
              <Link to="/" className="link" onClick={handleLogout}>
                Log out
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/LogIn" className="link">Log in</Link>
            </li>
          )}
        </ul>

        <Link to="/" className="link">
          <h1 className="brand">D-troit Class'c Galery</h1>
        </Link>

        <ul className="carritoContainerDesktop">
          <li>
            <Link to="/Carrito" className="link">
              Cart {getTotalItems()}
              {carrito.length > 0 ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart-check" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#f4f4f4" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                  <path d="M11.5 17h-5.5v-14h-2" />
                  <path d="M6 5l14 1l-1 7h-13" />
                  <path d="M15 19l2 2l4 -4" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#f4f4f4" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M17 17h-11v-14h-2" />
                  <path d="M6 5l14 1l-1 7h-13" />
                </svg>
              )}
            </Link>
          </li>
        </ul>

        <div className={`menuIcon ${showMenu ? "hidden" : ""}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>


        <div ref={menuRef} className={`mobileMenu ${showMenu ? "active" : "inactive"}`}>
          <div className="closeIcon" onClick={toggleMenu}>
            &#10005;
          </div>
          <ul className="navMenu">
            <li><Link to="/Productos" className="link" onClick={toggleMenu}>Shop</Link></li>
            <li><Link to="/Music" className="link" onClick={toggleMenu}>Music</Link></li>
            <li><Link to="/Eventos" className="link" onClick={toggleMenu}>Events</Link></li>
            <li><Link to="/Blogs" className="link" onClick={toggleMenu}>Blogs</Link></li>
            <li><Link to="/AboutUs" className="link" onClick={toggleMenu}>About Us</Link></li>
            <li><Link to="/Faq" className="link" onClick={toggleMenu}>FAQ</Link></li>
          </ul>

          <ul className="carritoContainer">
            <li>
              <Link to="/Carrito" className="link" onClick={toggleMenu}>
                Cart {getTotalItems()}
              </Link>
            </li>
          </ul>

          <ul className="userMenu">
            {isLoggedIn ? (
              <li>
                <Link to="/" className="link" onClick={handleLogout}>Log out</Link>
              </li>
            ) : (
              <>
                <li><Link to="/LogIn" className="link">Log in</Link></li>
                <li><Link to="/SingUp" className="link">Create account</Link></li>
              </>
            )}
          </ul>
        </div>
      </nav>

      <div className={`navBarDesktopContainer ${isScrolled ? "stickySlideAnimation" : ""} ${isScrolled ? "scrolled" : ""}`}>
        <ul className="navMenuDesktop">
          <li><Link to="/" className="link">Home</Link></li>
          <li><Link to="/Productos" className="link">Shop</Link></li>
          <li><Link to="/Music" className="link">Music</Link></li>
          <li><Link to="/Eventos" className="link">Events</Link></li>
          <li><Link to="/Blogs" className="link">Blogs</Link></li>
          <li><Link to="/AboutUs" className="link">About us</Link></li>
          <li><Link to="/Faq" className="link">FAQ</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
