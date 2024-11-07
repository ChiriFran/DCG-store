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
              <div className="ratingsContainer">
                <input value="5" name="rating" id="star5" type="radio"></input>
                <label for="star5"></label>
                <input value="4" name="rating" id="star4" type="radio"></input>
                <label for="star4"></label>
                <input value="3" name="rating" id="star3" type="radio"></input>
                <label for="star3"></label>
                <input value="2" name="rating" id="star2" type="radio"></input>
                <label for="star2"></label>
                <input value="1" name="rating" id="star1" type="radio"></input>
                <label for="star1"></label>
              </div>

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

