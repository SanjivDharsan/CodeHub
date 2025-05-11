import React from 'react';
import './VideoBackground.css'; // Import your CSS file for styling
import vdo from './Home.mp4'
import './Login.css'

const VideoHome = () => {
  return (
    <div className="video-background">
      <video autoPlay muted loop className="video" src={vdo} type="video/mp4" />
    </div>
  );
};

export default VideoHome;
