import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CastleImage from '../../assets/images/castle2.png';
import Door from '../../components/Door/Door';
import './MainContent.css';
import cartel from '../../assets/images/back.png';

const MainContent = () => {
  const [isDoorVisible, setIsDoorVisible] = useState(() => {
    const doorState = sessionStorage.getItem('isDoorVisible');
    return doorState === null || doorState === 'true';
  });
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    if (isDoorVisible) {
      sessionStorage.setItem('isDoorVisible', 'false');
    }
  }, [isDoorVisible]);

  useEffect(() => {
    if (!isDoorVisible) {
      setTimeout(() => setIsContentVisible(true), 1000);
    }
  }, [isDoorVisible]);

  const handleDoorClose = () => {
    setIsDoorVisible(false);
  };

  const handleClick = (linkName) => {
    if (linkName === 'salida') {
      setIsDoorVisible(true);
      setIsContentVisible(false);
      sessionStorage.setItem('isDoorVisible', 'true');
    } else {
      setActiveLink(linkName);
      setTimeout(() => setActiveLink(''), 2000);
    }
  };

  const handleCartelClick = () => {
    setIsDoorVisible(true);
    setIsContentVisible(false);
    sessionStorage.setItem('isDoorVisible', 'true');
  };

  return (
    <div className="main-content">
      <img src={CastleImage} alt="Castle Background" className="background-image" />
      {isDoorVisible ? (
        <Door onClose={handleDoorClose} />
      ) : (
        <>
          <h1 className="title">Leonardo Vladimir</h1>
          <h2>Artista Plástico</h2>
          <h3>Autor libre y creativo</h3>
          <div className={`navigation-links-container ${isContentVisible ? 'visible' : ''}`}>
            <Link to="/page1" className={`navigation-link ${activeLink === 'page1' ? 'zoom-out' : ''}`} onClick={() => handleClick('page1')}>
              Artista
            </Link>
            <Link to="/page2" className={`navigation-link ${activeLink === 'page2' ? 'zoom-out' : ''}`} onClick={() => handleClick('page2')}>
              Historia
            </Link>
            <Link to="/page3" className={`navigation-link ${activeLink === 'page3' ? 'zoom-out' : ''} obras-link`} onClick={() => handleClick('page3')}>
              Obras
            </Link>
            <Link to="/page4" className={`navigation-link ${activeLink === 'page4' ? 'zoom-out' : ''} exclusiva-link`} onClick={() => handleClick('page4')}>
              Zona Exclusiva
            </Link>
            <Link to="#" onClick={handleCartelClick}>
              <img src={cartel} className="cartel-image" alt="Cartel" />
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default MainContent;
