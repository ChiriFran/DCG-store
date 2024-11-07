import React, { useState } from "react";
import "../styles/MusicItem.css";

const MusicGrid = ({ discos }) => {
  const [compactView, setCompactView] = useState(false);

  const toggleView = () => {
    setCompactView(!compactView);
  };

  return (
    <div className="musicContainer">
      <button className="toggleViewButton" onClick={toggleView}>
        {compactView ? "Vista estándar" : "Vista compacta"}
      </button>
      <div className={`musicGrid ${compactView ? "compact" : ""}`}>
        {discos.map((disco, index) => (
          <div className="musicItem" key={index}>
            <iframe
              className="musicIframe"
              title="Reproductor de música"
              src={disco.urlSong}
              seamless
            ></iframe>
            <a
              className="BuyBtn"
              href={disco.urlToBuy}
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy now for ${disco.price}
              <span className="bandcampBackground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-bandcamp"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="#00abfb34"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M8.5 6h13.5l-7 12h-13z" />
                </svg>{" "}
                Bandcamp
              </span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MusicGrid;
