import React, { useState, useEffect } from "react";
import "../styles/PopUpNewsletter.css";
import { db } from "../firebase/config";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";

const PopUpNewsletter = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Mostrar modal con animación y deshabilitar scroll
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setIsVisible(true); // Mostrar el modal después de un pequeño retardo para la animación
      }, 10);
      document.body.style.overflow = "hidden"; // Deshabilitar el scroll
      window.scrollTo(0, 0); // Forzar el scroll hacia arriba
    } else {
      setIsVisible(false);
    }
    return () => {
      document.body.style.overflow = "auto"; // Restaurar el scroll al cerrar el modal
    };
  }, [isOpen]);

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
      // Verificar si el correo ya está registrado
      const emailQuery = query(collection(db, "newsletter"), where("email", "==", email));
      const querySnapshot = await getDocs(emailQuery);

      if (!querySnapshot.empty) {
        setErrorMessage("Este correo ya está registrado en nuestro newsletter.");
        setIsSubmitting(false);
        return;
      }

      // Añadir el correo a la base de datos
      await addDoc(collection(db, "newsletter"), {
        email: email,
        timestamp: new Date(),
      });

      setEmail("");
      setSuccessMessage("¡Ya estás suscrito a nuestro Newsletter!");

      // Cerrar el modal después de 3 segundos
      setTimeout(() => {
        setSuccessMessage("");
        handleClose(); // Cerrar el modal automáticamente
      }, 3000);
    } catch (error) {
      console.error("Error al agregar el documento: ", error);
      alert("Hubo un error al suscribirse. Por favor, inténtalo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsVisible(false); // Ocultar modal
    setTimeout(() => {
      onClose(); // Llamar al cierre del modal después de la animación
    }, 300); // Asegurarse de que la animación termine antes de cerrar
  };

  if (!isOpen) return null;

  return (
    <div
      className={`popupOverlay ${isVisible ? "fadeIn" : "fadeOut"}`}
      onClick={handleClose}
    >
      <dialog
        className={`popupNewsletter ${isVisible ? "open" : ""}`}
        open
        onClick={(e) => e.stopPropagation()} // Evitar cerrar el modal al hacer click dentro
      >
        <button className="modalCloseButton" onClick={handleClose}>
          X
        </button>
        <div className="modalNewsletterContainer">
          <h3 className="modalNewsletterTitle">Forma parte de nuestra comunidad</h3>
          <p className="modalNewsletterText">
            Recibe promociones y descuentos exclusivos.
          </p>
          <form className="modalNewsletterForm" onSubmit={handleSubmit}>
            <div className="modalFormGroup">
              <input
                placeholder="email@example.com"
                type="email"
                id="emailPopUp"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {errorMessage && <p className="modalErrorMessage">{errorMessage}</p>}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`modalSubmitButton ${isSubmitting ? "modalSubmitting" : ""}`}
            >
              {isSubmitting ? "Enviando..." : "Suscribirse"}
            </button>
            {successMessage && <p className="modalSuccessMessage">{successMessage}</p>}
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default PopUpNewsletter;
