import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

import Loader from "./Loader";
import EventoCard from "./EventoCard";

import "../styles/Eventos.css";

const Eventos = () => {
  const [eventos, setEventos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      setIsLoading(true);
      const eventosDb = collection(db, "eventos");

      try {
        const resp = await getDocs(eventosDb);
        setEventos(resp.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (error) {
        console.error("Error fetching documents: ", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (isLoading) return <Loader />;

  return (
    <div className="eventosContainer">
      <EventoCard eventos={eventos} titulo="Eventos" />
    </div>
  );
};

export default Eventos;
