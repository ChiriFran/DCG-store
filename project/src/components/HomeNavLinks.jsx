import React from "react";
import { Link } from "react-router-dom";
import "../styles/HomeNavLinks.css";

function HomeNavLinks() {
  return (
    <div className="homeNavLinksContainer">
      <ul>
        <Link to="/" className="homeNavLink">
          Inicio
        </Link>
      </ul>
      <ul>
        <Link to="/Productos/gorras"  className="homeNavLink">
          Gorras
        </Link>
      </ul>
      <ul>
        <Link to="/Productos/remeras" className="homeNavLink">
          Remeras
        </Link>
      </ul>
      <ul>
        <Link to="/Productos/bolsos" className="homeNavLink">
          Bolsos
        </Link>
      </ul>
      <ul>
        <Link to="/Productos/buzos" className="homeNavLink">
          Buzos
        </Link>
      </ul>
      <ul>
        <Link to="/EventosBlogs" className="homeNavLink">
          Events and Blogs
        </Link>
      </ul>
    </div>
  );
}

export default HomeNavLinks;
