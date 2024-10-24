import React from "react";
import { Link } from "react-router-dom";
import "../styles/HomeNavLinks.css";

function HomeNavLinks() {
  return (
    <div className="homeNavLinksContainer">

      <ul>
        <Link to="/Productos/gorras" className="homeNavLink">
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
