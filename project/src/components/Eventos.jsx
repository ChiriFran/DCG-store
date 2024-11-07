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
    <>
      <div className="eventosContainer">
        <h2 className="eventosTitle">Upcoming events</h2>
        {eventos.map((evento) => (
          <div key={evento.id} className="eventoCard">
            <div className="imgEventosContainer">
              <img src={evento.image} alt="" />
            </div>
          </div>
        ))}
      </div>

      <div className="pastEventosContainer">
        <h2 className="pastEventosTitle">Past events</h2>
        {eventos.map((evento) => (
          <div key={evento.id} className="pastEventoCard">
            <div className="pastImgEventosContainer">
              <img src={evento.image} alt="" />
              <img src={evento.image} alt="" />
              <img src={evento.image} alt="" />
              <img src={evento.image} alt="" />
            </div>
          </div>
        ))}
      </div>

    </>
  );
};

export default Eventos;
