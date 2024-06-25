import { useState, useRef } from 'react';
import './Door.css'; 
import doorVideo from '../../assets/images/video.mp4'; 

  const Door = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(true);
  const videoRef = useRef(null); 

  const handleClick = () => {
    setIsVisible(false);


    if (videoRef.current) {
      videoRef.current.play();
    }

    setTimeout(() => {
      onClose();
    }, 2000);
  };

  return (
    <div className={`door ${isVisible ? '' : 'fade-out'}`} onClick={handleClick}>
      <video ref={videoRef} loop muted className="door-video" style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }}>
        <source src={doorVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default Door;