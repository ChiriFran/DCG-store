import EventoCard from "./EventoCard";

const Eventos = ({ eventos }) => {
  return (
    <div className="eventosContainer">
      <EventoCard eventos={eventos} titulo="Eventos" />
    </div>
  );
};

export default Eventos;
