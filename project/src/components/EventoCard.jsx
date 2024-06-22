import React from "react";
import '../styles/EventoCard.css';

function EventoCard({ eventos, titulo }) {
  return (
    <>
      <h2 className="eventosTitle">{titulo}</h2>
      <div className="eventosList">
        {eventos.map(evento => (
          <div key={evento.id} className="event-card-container">
            <div className="eventCardLeft">
              <img className="eventCardImg" src={evento.image} alt={evento.title} />
            </div>
            <div className="eventCardRight">
              <p className="eventCardDate">{evento.date}</p>
              <h3 className="eventCardTitle">{evento.title}</h3>
              <p className="eventCardDescription">{evento.description}</p>
              <h4>
                Por: <span className="eventCardAutor">{evento.author}</span>
              </h4>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default EventoCard;
