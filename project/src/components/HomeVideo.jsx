import { Link } from "react-router-dom";
import React, { useRef, useState } from 'react';
import '../styles/HomeVideo.css';

function HomeVideo() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);  // Inicialmente el video está silenciado

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);  // Cambia el estado de isMuted
    }
  };

  return (
    <div className="homeVideoContainer">
      <video 
        ref={videoRef} 
        autoPlay
        muted={isMuted}
        onEnded={() => videoRef.current.pause()}
      >
        <source src="../../media/homeVideo.mp4" type="video/mp4" />
        Su navegador no soporta la etiqueta de vídeo.
      </video>
      <button onClick={toggleMute}>
        <img 
          src={isMuted ? "../../media/audio-off-svgrepo-com.svg" : "../../media/audio-svgrepo-com.svg" } 
          alt={isMuted ? "Reproducir audio." : "Silenciar reproduccion de audio."} 
        />
      </button>
      <Link to={`/Productos`} className="homeLink buttonShopNow">
        SHOP NOW
      </Link>
    </div>
  );
}

export default HomeVideo;
