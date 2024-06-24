import { useState } from 'react';
import { Link } from 'react-router-dom';
import CastleImage from '../../assets/images/castle1.jpeg';
import Door from '../../components/Door/Door';
import './MainContent.css'; 

const MainContent = () => {
  const [isDoorVisible, setIsDoorVisible] = useState(true);
  const [activeLink, setActiveLink] = useState('');

  const handleDoorClose = () => {
    setIsDoorVisible(false);
  }

  const handleClick = (linkName) => {
    setActiveLink(linkName);
    setTimeout(() => setActiveLink(''), 2000); // Remueve la clase después de que la animación se complete
  }

  return (
    <div className="main-content" style={{ backgroundImage: `url(${CastleImage})`, backgroundPosition: 'center' }}>
      {isDoorVisible ? (
        <Door onClose={handleDoorClose} />
      ) : (
        <div className="navigation-links-container">
          <Link to="/page1" className={`navigation-link ${activeLink === 'page1' ? 'zoom-out' : ''}`} onClick={() => handleClick('page1')}>Artista</Link>
          <Link to="/page2" className={`navigation-link ${activeLink === 'page2' ? 'zoom-out' : ''}`} onClick={() => handleClick('page2')}>Historia</Link>
          <Link to="/page3" className={`navigation-link ${activeLink === 'page3' ? 'zoom-out' : ''}`} onClick={() => handleClick('page3')}>Obras</Link>
          <Link to="/page4" className={`navigation-link ${activeLink === 'page4' ? 'zoom-out' : ''}`} onClick={() => handleClick('page4')}>Zona Exclusiva</Link>
        </div>
      )}
    </div>
  );
};

export default MainContent;

// import { useState, useEffect } from 'react';
// import CastleImage from '../../assets/images/castle1.jpeg';
// import Door from '../../components/Door/Door';
// import './MainContent.css'; 

// const MainContent = () => {
//   const [isDoorVisible, setIsDoorVisible] = useState(false);

//   useEffect(() => {
//     const isFirstVisit = localStorage.getItem('isFirstVisit');
//     if (!isFirstVisit) {
//       setIsDoorVisible(true);
//       localStorage.setItem('isFirstVisit', 'no');
//     }
//   }, []);

//   const handleDoorClose = () => {
//     setIsDoorVisible(false);
//   }

//   return (
//     <div className="main-content" style={{ backgroundImage: `url(${CastleImage})`, backgroundPosition: 'center' }}>
//       {isDoorVisible ? (
//         <Door onClose={handleDoorClose} />
//       ) : (
//         <div className="navigation-links-container">
//           <a href="/page1" className="navigation-link">Artista</a>
//           <a href="/page2" className="navigation-link">Historia</a>
//           <a href="/page3" className="navigation-link">Obras</a>
//           <a href="/page4" className="navigation-link">Zona Exclusiva</a>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MainContent;


