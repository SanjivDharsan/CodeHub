import React from 'react';
import './VideoBackground.css'; 
import Video from './vdo.mp4'
// import './VideoHome.css'

const VideoBackground = () => {
  return (
    <div className="video-background">
      <video autoPlay muted loop className="video" src={Video} type="video/mp4" />
    </div>
  );
};

export default VideoBackground;
