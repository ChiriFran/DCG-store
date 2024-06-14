import React from "react";
import { Link } from "react-router-dom";
import '../styles/HomeNavLinks.css'

function HomeNavLinks() {
  return (
    <div className="homeNavLinksContainer">
      <ul>
        <Link to="/" className="homeNavLink">
          Inicio
        </Link>
      </ul>
      <ul>
        <Link to="/Productos" className="homeNavLink">
          Tienda
        </Link>
      </ul>
    </div>
  );
}

export default HomeNavLinks;
