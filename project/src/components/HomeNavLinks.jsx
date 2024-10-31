import React from "react";
import { Link } from "react-router-dom";
import "../styles/HomeNavLinks.css";

function HomeNavLinks() {
  return (
    <div className="homeNavLinksContainer">

      <ul>
        <Link to="/Productos" className="homeNavLink">
          Shop
        </Link>
      </ul>
      <ul>
        <Link to="/Eventos" className="homeNavLink">
          Events
        </Link>
      </ul>
      <ul>
        <Link to="/Blogs" className="homeNavLink">
          Blogs
        </Link>
      </ul>
      <ul>
        <Link to="/AboutUs" className="homeNavLink">
          About Us
        </Link>
      </ul>
      <ul>
        <Link to="/Faq" className="homeNavLink">
          FAQ
        </Link>
      </ul>
    </div>
  );
}

export default HomeNavLinks;
