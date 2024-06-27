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
        <Link to="./ItemListContainer.jsx" className="footerNavLink">
          Tienda
        </Link>
      </ul>
      <ul>
        <Link to="/men's clothing" className="footerNavLink">
          Men's Clothing
        </Link>
      </ul>
      <ul>
        <Link to="/women's clothing" className="footerNavLink">
          Women's Clothing
        </Link>
      </ul>
      <ul>
        <Link to="/jewelery" className="footerNavLink">
          Jewelery
        </Link>
      </ul>
      <ul>
        <Link to="/electronics" className="footerNavLink">
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
