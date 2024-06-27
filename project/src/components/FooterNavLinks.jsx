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
        <Link to="/Productos/men's clothing"  className="footerNavLink">
          Men's Clothing
        </Link>
      </ul>
      <ul>
        <Link to="/Productos/women's clothing" className="footerNavLink">
          Women's Clothing
        </Link>
      </ul>
      <ul>
        <Link to="/Productos/jewelery" className="footerNavLink">
          Jewelery
        </Link>
      </ul>
      <ul>
        <Link to="/Productos/electronics" className="footerNavLink">
          Electronics
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
