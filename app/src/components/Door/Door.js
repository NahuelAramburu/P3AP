import { useState } from 'react';
import './Door.css'; 

const Door = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    setIsVisible(false);

    setTimeout(() => {
      onClose();
    }, 2000);
  };

  return (
    <div className={`door ${isVisible ? '' : 'fade-out'}`} onClick={handleClick}></div>
  );
};

export default Door;
