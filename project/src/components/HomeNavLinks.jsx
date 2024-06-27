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
        <Link to="/Productos" className="homeNavLink">
          Tienda
        </Link>
      </ul>
      <ul>
        <Link to="/Productos/men's clothing" className="homeNavLink">
          Men's Clothing
        </Link>
      </ul>
      <ul>
        <Link to="/Productos/women's clothing" className="homeNavLink">
          Women's Clothing
        </Link>
      </ul>
      <ul>
        <Link to="/Productos/jewelery" className="homeNavLink">
          Jewelery
        </Link>
      </ul>
      <ul>
        <Link to="/Productos/electronics" className="homeNavLink">
          Electronics
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
