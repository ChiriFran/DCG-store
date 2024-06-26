import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/HomeVideo.css";

function HomeVideo() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.03);
  const [textIndex, setTextIndex] = useState(0);
  const texts = ["SHOP NOW", "BUY NOW"];

  useEffect(() => {
    const video = videoRef.current;

    const handleLoadedMetadata = () => {
      video.volume = volume;
      video.muted = isMuted;
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, [volume, isMuted]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 4000); // Cambia el texto cada 4 segundos

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
      <video
        ref={videoRef}
        autoPlay
        muted={isMuted}
        onEnded={() => videoRef.current.pause()}
      >
        <source
          src={`../../media/homeVideo.mp4?${new Date().getTime()}`}
          type="video/mp4"
        />
        Su navegador no soporta la etiqueta de vídeo.
      </video>
      <div className="videoControlsContainer">
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
