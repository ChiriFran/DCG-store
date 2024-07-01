import React from "react";
import { Link } from "react-router-dom";
import "../styles/FooterNavLinks.css";

function FooterNavLinks() {
  return (
    <div className="footerNavLinksContainer">
      <ul>
        <Link to="/" className="footerNavLink">
          Inicio
        </Link>
      </ul>
      <ul>
        <Link to="/Productos/gorras"  className="footerNavLink">
          Gorras
        </Link>
      </ul>
      <ul>
        <Link to="/Productos/remeras" className="footerNavLink">
          Remeras
        </Link>
      </ul>
      <ul>
        <Link to="/Productos/bolsos" className="footerNavLink">
          Bolsos
        </Link>
      </ul>
      <ul>
        <Link to="/Productos/buzos" className="footerNavLink">
          Buzos
        </Link>
      </ul>
      <ul>
        <Link to="/EventosBlogs" className="footerNavLink">
          Events and Blogs
        </Link>
      </ul>
    </div>
  );
}

export default FooterNavLinks;
