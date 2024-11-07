import React, { useState, useContext, useEffect, useRef } from "react";
import "../styles/Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import logo from '../../media/logo/logo.svg';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { carrito } = useContext(CartContext);

  const menuRef = useRef();
  const location = useLocation();

  const getTotalItems = () => carrito.reduce((total, prod) => total + prod.cantidad, 0);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    document.body.classList.toggle("no-scroll");
  };

  const handleLogout = () => setIsLoggedIn(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        if (showMenu) toggleMenu();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showMenu]);

  return (
    <>
      <nav className={`nav ${showMenu ? "active" : ""}`}>
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
          <img src={logo} alt="Logo" />
          <h1 className="brand">D-troit Class'c Galery</h1>
        </Link>

        <ul className="carritoContainerDesktop">
          <li>
            <Link to="/Carrito" className="link">
              Cart {getTotalItems()}
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
            {["/", "/Productos", "/Music", "/Eventos", "/Blogs", "/AboutUs", "/Faq"].map((path, index) => (
              <li key={index}>
                <Link to={path} className={`link ${location.pathname === path ? "active" : ""}`} onClick={toggleMenu}>
                  {path === "/" ? "Home" : path === "/Productos" ? "Shop" : path.slice(1)}
                </Link>
              </li>
            ))}
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

      <div className="navBarDesktopContainer">
        <ul className="navMenuDesktop">
          {["/", "/Productos", "/Music", "/Eventos", "/Blogs", "/AboutUs", "/Faq"].map((path, index) => (
            <li key={index}>
              <Link to={path} className={`link ${location.pathname === path ? "active" : ""}`}>
                {path === "/"
                  ? "Home"
                  : path === "/Productos"
                    ? "Shop"
                    : path === "/Eventos"
                      ? "Events"
                      : path.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
