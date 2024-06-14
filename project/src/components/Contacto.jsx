import React from "react";
import "../styles/Contacto.css";

function Contacto() {
  return (
    <div className="contactoContainer">
      <h3>Contacto</h3>
      <p>contactoDCG@gmail.com</p>
      <ul>
        <li>
          <a href="#" target="blank">
            <img src="../../media/youtube.svg" alt="" />
          </a>
        </li>
        <li>
          <a href="#" target="blank">
            <img src="../../media/instagram.svg" alt="" />
          </a>
        </li>
        <li>
          <a href="#" target="blank">
            <img src="../../media/facebook.svg" alt="" />
          </a>
        </li>
        <li>
          <a href="#" target="blank">
            <img src="../../media/telegram.svg" alt="" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contacto;
