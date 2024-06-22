import React from "react";
import Eventos from "../components/Eventos";
import Blogs from "../components/Blogs";
import "../styles/EventosBlogs.css";

function EventosBlogs() {
  return (
    <>
      <div className="eventosBlogsContainer">
        <div className="eventosContainer">
          <Eventos />
        </div>
        <div className="blogsContainer">
          <Blogs />
        </div>
      </div>
    </>
  );
}

export default EventosBlogs;
