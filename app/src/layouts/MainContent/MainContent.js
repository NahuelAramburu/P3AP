import { useState } from 'react';
import CastleImage from '../../assets/images/castle1.jpeg';
import Door from '../../components/Door/Door';
import './MainContent.css'; 

const MainContent = () => {
  const [isDoorVisible, setIsDoorVisible] = useState(true);

  const handleDoorClose = () => {
    setIsDoorVisible(false);
  }

  return (
    <div className="main-content" style={{ backgroundImage: `url(${CastleImage})`, backgroundPosition: 'center' }}>
      {isDoorVisible ? (
        <Door onClose={handleDoorClose} />
      ) : (
        <>
          <a href="/page1" className="link-window">Page 1</a>
          <a href="/page2" className="link-door">Page 2</a>
          <a href="/page3" className="link-window">Page 3</a>
          <a href="/page4" className="link-door">Page 4</a>
        </>
      )}
    </div>
  );
};

export default MainContent;