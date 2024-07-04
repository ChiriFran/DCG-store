import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import "../styles/PopUpNewsletter.css";
import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";

const PopUpNewsletter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const overlayAnimation = useSpring({
    opacity: isOpen ? 1 : 0,
    pointerEvents: isOpen ? "auto" : "none",
  });

  const contentAnimation = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? `translateY(0)` : `translateY(-20px)`,
  });

  useEffect(() => {
    const isSubscribed = localStorage.getItem("newsletterSubscribed");
    const isClosedPermanently = localStorage.getItem(
      "newsletterClosedPermanently"
    );
    if (!isSubscribed && !isClosedPermanently) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        document.body.style.overflow = "hidden";
      }, 5000);

      return () => {
        clearTimeout(timer);
        document.body.style.overflow = "auto";
      };
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setIsValidEmail(false);
      return;
    }

    try {
      setIsLoading(true);

      await addDoc(collection(db, "newsletter"), {
        email,
        timestamp: new Date(),
      });

      setEmail("");
      setIsValidEmail(true);
      setShowMessage(true);
      localStorage.setItem("newsletterSubscribed", "true");
      setTimeout(() => {
        setShowMessage(false);
        handleClose();
      }, 3000);
    } catch (error) {
      console.error("Error al agregar el documento: ", error);
      alert("Hubo un error al suscribirse. Por favor, inténtalo de nuevo.");
    } finally {
      setIsLoading(false);
    }
  };

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const handlePermanentClose = () => {
    localStorage.setItem("newsletterClosedPermanently", "true");
    handleClose();
  };

  return (
    <animated.div
      style={overlayAnimation}
      className="popup-overlay"
      onClick={handleOverlayClick}
    >
      <animated.div style={contentAnimation} className="popup-content">
        <button className="close-button" onClick={handleClose}>
          X
        </button>
        <h2>Forma parte de esta gran familia</h2>
        <p>
          Obtene un codigo de descuento de bienvenida y enterate de todas las
          novedades
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Ingresa tu email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setIsValidEmail(true);
            }}
            className={!isValidEmail ? "invalid" : ""}
            required
          />
          {!isValidEmail && (
            <p className="error-message">Por favor ingresa un email válido.</p>
          )}
          <button
            className={`subscribe-button ${isLoading ? "loading" : ""}`}
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Cargando..." : "Suscribirse"}
          </button>
        </form>
        {showMessage && (
          <p className="success-message">¡Gracias por suscribirte!</p>
        )}
        <button className="no-show-button" onClick={handlePermanentClose}>
          No mostrar
        </button>
      </animated.div>
    </animated.div>
  );
};

export default PopUpNewsletter;
