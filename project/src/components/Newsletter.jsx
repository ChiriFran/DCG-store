import React, { useState } from "react";
import "../styles/Newsletter.css";
import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail|hotmail|yahoo)\.com$/;

    if (!emailPattern.test(email)) {
      setErrorMessage(
        "Por favor, ingresa un correo electrónico válido que termine en @gmail.com, @hotmail.com, o @yahoo.com"
      );
      setIsSubmitting(false);
      return;
    }

    try {
      await addDoc(collection(db, "newsletter"), {
        email: email,
        timestamp: new Date(),
      });

      setEmail("");
      setSuccessMessage("¡Ya estas suscrito a nuestro Newsletter!");

      setTimeout(() => {
        setSuccessMessage("");
      }, 5000);
    } catch (error) {
      console.error("Error al agregar el documento: ", error);
      alert("Hubo un error al suscribirse. Por favor, inténtalo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="newsletterContainer">
      <h3 className="newsletterTitle">Forma parte de nuestra comunidad</h3>
      <p className="newsletterText">
        Forma parte de nuestra comunidad y recibe promociones y descuentos
        exclusivos.
      </p>
      <form className="newsletterForm" onSubmit={handleSubmit}>
        <div className="formGroup">
          <input
            placeholder="email@example.com"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {errorMessage && <p className="errorMessage">{errorMessage}</p>}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`submitButton ${isSubmitting ? "submitting" : ""}`}
        >
          {isSubmitting ? "Enviando..." : "Suscribirse"}
        </button>
        {successMessage && <p className="successMessage">{successMessage}</p>}
      </form>
    </div>
  );
}

export default Newsletter;
