import React, { useState } from 'react';
import Page4Image from '../../assets/images/pag4.jpeg';
import { Link } from 'react-router-dom';
import './Page4.css'; 
import cartel from '../../assets/images/back.png';
import Carousel from '../../components/Carousel/Carousel';

const Page4 = () => {
  const [ageVerified, setAgeVerified] = useState(false);
  const [showAgeWarning, setShowAgeWarning] = useState(false);

  const verifyAge = () => {
    const age = prompt('Por favor, ingresa tu edad:');
    if (age && parseInt(age) >= 18) {
      setAgeVerified(true);
    } else {
      setShowAgeWarning(true);
    }
  };

  return (
    <div className="page-content" style={{ backgroundImage: `url(${Page4Image})`, backgroundPosition: 'center' }}>
      {!ageVerified && (
        <div className="age-verification">
          {showAgeWarning && <p className="warning">Contenido no apto para menores de 18 años</p>}
          <button onClick={verifyAge}>Verificar Edad</button>
        </div>
      )}
      {ageVerified && <Carousel />}
      <Link to="/">
        <img src={cartel} className="cartel-image" alt="Cartel" />
      </Link>
    </div>
  );

  
};

export default Page4;
