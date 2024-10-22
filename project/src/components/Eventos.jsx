import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import Loader from "./Loader";
import "../styles/Eventos.css";

const Eventos = () => {
  const [eventos, setEventos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEventos = async () => {
      setIsLoading(true);
      const eventosDb = collection(db, "eventos");

      try {
        const eventosResp = await getDocs(eventosDb);
        setEventos(
          eventosResp.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      } catch (error) {
        console.error("Error fetching eventos: ", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEventos();
  }, []);

  if (isLoading) return <Loader />;

  return (
    <div className="eventosContainer">
      {eventos.map((evento) => (
        <div key={evento.id} className="eventoCard">
          <div className="imgEventosContainer">
            <img src={evento.image} alt="" />
          </div>
          <div className="eventoContent">
            <h3>{evento.title}</h3>
            <p>{evento.description}</p>
            <span>{evento.author}</span> - <span>{evento.date}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Eventos;
