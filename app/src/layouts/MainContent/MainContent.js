import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CastleImage from '../../assets/images/castle3.jpeg';
import Door from '../../components/Door/Door';
import ventana from '../../assets/images/ventana.png';
import salida from '../../assets/images/salida.png';
import './MainContent.css';

const MainContent = () => {
  const [isDoorVisible, setIsDoorVisible] = useState(() => {
    const savedState = localStorage.getItem('isDoorVisible');
    return savedState !== null ? JSON.parse(savedState) : true;
  });
  const [activeLink, setActiveLink] = useState('');
  const [isContentVisible, setIsContentVisible] = useState(() => {
    const savedState = localStorage.getItem('isContentVisible');
    return savedState !== null ? JSON.parse(savedState) : false;
  });

  const location = useLocation();

  useEffect(() => {
    if (!isDoorVisible) {
      setTimeout(() => setIsContentVisible(true), 1000);
    }
  }, [isDoorVisible]);

  useEffect(() => {
    localStorage.setItem('isDoorVisible', isDoorVisible);
    localStorage.setItem('isContentVisible', isContentVisible);
  }, [isDoorVisible, isContentVisible]);

  useEffect(() => {
    if (location.pathname === '/') {
      setIsDoorVisible(false);
      setIsContentVisible(true);
    }
  }, [location.pathname]);

  const handleDoorClose = () => {
    setIsDoorVisible(false);
  };

  const handleClick = (linkName) => {
    if (linkName === 'salida') {
      setIsDoorVisible(true);
      setIsContentVisible(false);
    } else {
      setActiveLink(linkName);
      setTimeout(() => setActiveLink(''), 2000);
    }
  };

  return (
    <div className="main-content" style={{ backgroundImage: `url(${CastleImage})`, backgroundPosition: 'center' }}>
      {isDoorVisible ? (
        <Door onClose={handleDoorClose} />
      ) : (
        <div className={`navigation-links-container ${isContentVisible ? 'visible' : ''}`}>
          <Link to="/page1" className={`navigation-link ${activeLink === 'page1' ? 'zoom-out' : ''}`} onClick={() => handleClick('page1')}>
            <div className="image-hover-container">
              <img src={ventana} alt="Artista" />
              <span className="hover-text">Artista</span>
            </div>
          </Link>
          <Link to="/page2" className={`navigation-link ${activeLink === 'page2' ? 'zoom-out' : ''}`} onClick={() => handleClick('page2')}>
            <div className="image-hover-container">
              <img src={ventana} alt="Historia" />
              <span className="hover-text">Historia</span>
            </div>
          </Link>
          <Link to="/page3" className={`navigation-link ${activeLink === 'page3' ? 'zoom-out' : ''} obras-link`} onClick={() => handleClick('page3')}>
            <div className="image-hover-container">
              <img src={ventana} alt="Obras" />
              <span className="hover-text">Obras</span>
            </div>
          </Link>
          <Link to="/page4" className={`navigation-link ${activeLink === 'page4' ? 'zoom-out' : ''} exclusiva-link`} onClick={() => handleClick('page4')}>
            <div className="image-hover-container">
              <img src={ventana} alt="Zona Exclusiva" />
              <span className="hover-text">Zona Exclusiva</span>
            </div>
          </Link>
          <Link to="#" className={`navigation-link ${activeLink === 'salida' ? 'zoom-out' : ''} exclusiva-link salida-custom-position`} onClick={() => handleClick('salida')}>
            <div className="image-hover-container">
              <img src={salida} alt="Salida" />
              <span className="hover-text">Salida</span>
            </div>
         </Link>
        </div>
      )}
    </div>
  );
};

export default MainContent;


