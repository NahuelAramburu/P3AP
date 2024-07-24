import React, { useState } from 'react';
import Page4Image from '../../assets/images/pag4.jpeg';
import { Link } from 'react-router-dom';
import './Page4.css'; 
import cartel from '../../assets/images/back.png';
import Carousel from '../../components/Carousel/Carousel';

const Page4 = () => {
  const [ageVerified, setAgeVerified] = useState(false);
  const [showAgeWarning, setShowAgeWarning] = useState(false);
  const [ageCheckDone, setAgeCheckDone] = useState(false);

  const verifyAge = () => {
    const age = prompt('Por favor, ingresa tu edad:');
    if (age && parseInt(age) >= 18) {
      setAgeVerified(true);
    } else {
      setShowAgeWarning(true);
    }
    setAgeCheckDone(true);
  };

  return (
    <div className="page-content">
      <div className={`background-image ${ageVerified ? '' : 'blurred'}`} style={{ backgroundImage: `url(${Page4Image})` }}></div>
      {!ageVerified && (
        <div className="age-verification">
          {showAgeWarning && <p className="warning">Contenido no apto para menores de 18 años</p>}
          {!ageCheckDone ? (
            <button onClick={verifyAge}>Verificar Edad</button>
          ) : (
            <Link to="/">
              <button>Volver al Inicio</button>
            </Link>
          )}
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
