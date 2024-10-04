import React, { useState } from 'react';
import video from '../../assets/video.mp4'; 
import '../../styles/VideoPlayer.css'; 

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVideo = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className='video-container'>
      <div className='video-main'>
        <video controls autoPlay={isPlaying} onPause={() => setIsPlaying(false)} onPlay={() => setIsPlaying(true)}>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {!isPlaying && (
          <button className='play-button' onClick={toggleVideo}>
         𝓹𝓵𝓪𝔂 𝓿𝓲𝓭𝓮𝓸
          </button>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;




