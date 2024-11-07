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
              <div className="pastImgEventos">
                <img src={evento.image} alt="" />
                {/* From Uiverse.io by PriyanshuGupta28  */}
                <div class="EventoRating">
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

              <div className="pastImgEventos">
                <img src={evento.image} alt="" />
                {/* From Uiverse.io by PriyanshuGupta28  */}
                <div class="EventoRating">
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

              <div className="pastImgEventos">
                <img src={evento.image} alt="" />
                {/* From Uiverse.io by PriyanshuGupta28  */}
                <div class="EventoRating">
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

              <div className="pastImgEventos">
                <img src={evento.image} alt="" />
                {/* From Uiverse.io by PriyanshuGupta28  */}
                <div class="EventoRating">
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

              <div className="pastImgEventos">
                <img src={evento.image} alt="" />
                {/* From Uiverse.io by PriyanshuGupta28  */}
                <div class="EventoRating">
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
            </div>
          </div>
        ))}
      </div>

    </>
  );
};

export default Eventos;
