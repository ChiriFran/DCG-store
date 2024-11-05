import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import audioOn from '../../media/icons/audio-svgrepo-com.svg';
import audioOff from '../../media/icons/audio-off-svgrepo-com.svg';
import homeVideo from '../../media/video/homeVideo.mp4';
import "../styles/HomeVideo.css";

function HomeVideo() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true); // Inicialmente silenciado
  const [volume, setVolume] = useState(0.1);
  const [textIndex, setTextIndex] = useState(0);
  const texts = ["SHOP NOW", "BUY NOW"];

  useEffect(() => {
    const video = videoRef.current;

    const handleLoadedMetadata = () => {
      video.volume = volume;
      video.muted = isMuted;
      video.play().catch((error) => {
        console.log("Failed to autoplay:", error);
      });
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, [volume, isMuted]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000); // Cambia el texto cada 2 segundos

    return () => clearInterval(interval);
  }, []);

  const toggleMute = () => {
    const newMuteState = !isMuted;
    videoRef.current.muted = newMuteState;
    setIsMuted(newMuteState);
  };

  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    videoRef.current.volume = newVolume;
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  return (
    <div className="homeVideoContainer">
      <div className="clickToPlayMessage">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-click"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="rgba(255, 255, 255, 0.209)"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 12l3 0" />
          <path d="M12 3l0 3" />
          <path d="M7.8 7.8l-2.2 -2.2" />
          <path d="M16.2 7.8l2.2 -2.2" />
          <path d="M7.8 16.2l-2.2 2.2" />
          <path d="M12 12l9 3l-4 2l-2 4l-3 -9" />
        </svg>{" "}
        <p>Click anywhere and listen us</p>
      </div>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted={isMuted}
        onEnded={() => videoRef.current.pause()}
        onClick={toggleMute} // Activar/desactivar audio al hacer clic en el video
      >
        <source src={homeVideo} type="video/mp4" />

        Su navegador no soporta la etiqueta de vídeo.
      </video>
      <div className="videoControlsContainer">
        <button onClick={toggleMute}>
          <img
            src={isMuted ? audioOff : audioOn}
            alt={isMuted ? "Reproducir audio." : "Silenciar reproducción de audio."}
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
      </div>

      <Link to={`/Productos`} className="homeLink buttonShopNow">
        <span className="typedText">
          <span className="typedTextContent">{texts[textIndex]}</span>
        </span>
      </Link>
    </div>
  );
}

export default HomeVideo;
