import { Link } from "react-router-dom";
import React, { useRef } from 'react';
import '../styles/HomeVideo.css'

function HomeVideo() {
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
    }
  };

  return (
    <div className="homeVideoContainer">
      <video 
        ref={videoRef} 
        autoPlay
        muted
        onEnded={() => videoRef.current.pause()}
      >
        <source src="../../media/homeVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button onClick={toggleMute}>
        Toggle Mute
      </button>
      <Link to={`/Productos`} className="homeLink">
        Shop now
      </Link>
    </div>
  );
}

export default HomeVideo;
