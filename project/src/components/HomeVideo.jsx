import { Link } from "react-router-dom";
import React, { useRef, useState, useEffect } from "react";
import "../styles/HomeVideo.css";

function HomeVideo() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true); // Inicialmente el video está silenciado
  const [volume, setVolume] = useState(0.1); // Inicialmente el volumen es 50%

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = volume;
      videoRef.current.muted = isMuted;
    }
  }, [volume, isMuted]);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted); // Cambia el estado de isMuted
    }
  };

  const handleVolumeChange = (event) => {
    if (videoRef.current) {
      const newVolume = parseFloat(event.target.value);
      videoRef.current.volume = newVolume;
      setVolume(newVolume);
      if (newVolume > 0 && isMuted) {
        setIsMuted(false); // Si el volumen es mayor que 0, el video no está silenciado
      }
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
          src={
            isMuted
              ? "../../media/audio-off-svgrepo-com.svg"
              : "../../media/audio-svgrepo-com.svg"
          }
          alt={
            isMuted ? "Reproducir audio." : "Silenciar reproduccion de audio."
          }
        />
      </button>
      <input
        type="range"
        className="volumeSlider"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
      />
      <Link to={`/Productos`} className="homeLink buttonShopNow">
        SHOP NOW
      </Link>
    </div>
  );
}

export default HomeVideo;
