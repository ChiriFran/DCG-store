import React, { useState } from "react";
import "../styles/Newsletter.css";

function Newsletter() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos del formulario
    console.log("Nombre:", name);
    console.log("Email:", email);
    // Limpiar los campos del formulario después de enviar
    setName("");
    setEmail("");
  };

  return (
    <div className="newsletterContainer">
      <h3 className="newsletterTitle">Forma parte de nuestra comunidad</h3>
      <p className="newsletterText">
        Forma parte de nuestra comunidad y
        recibi promociones y descuentos exclusivos para miembros de nuestra
        comunidad.
      </p>
      <form className="newsletterForm" onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Suscribirse</button>
      </form>
    </div>
  );
}

export default Newsletter;
