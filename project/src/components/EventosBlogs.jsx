import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import Loader from "./Loader";
import Eventos from "../components/Eventos";
import Blogs from "../components/Blogs";
import "../styles/EventosBlogs.css";

const EventosBlogs = () => {
  const [eventos, setEventos] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEventsAndBlogs = async () => {
      setIsLoading(true);
      const eventosDb = collection(db, "eventos");
      const blogsDb = collection(db, "blogs");

      try {
        const [eventosResp, blogsResp] = await Promise.all([
          getDocs(eventosDb),
          getDocs(blogsDb),
        ]);
        setEventos(
          eventosResp.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
        setBlogs(blogsResp.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (error) {
        console.error("Error fetching documents: ", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEventsAndBlogs();
  }, []);

  if (isLoading) return <Loader />;

  return (
    <div className="eventosBlogsContainer">
      <div className="eventosContainer">
        <Eventos eventos={eventos} />
      </div>
      <div className="blogsContainer">
        <Blogs blogs={blogs} />
      </div>
    </div>
  );
};

export default EventosBlogs;
