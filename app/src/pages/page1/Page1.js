import React from 'react';
import Page1Image from '../../assets/images/marco.png';
import cartel from '../../assets/images/back.png';
import './page1.css'; 
import { Link } from 'react-router-dom';

const Page1 = () => {
  return (
    <div className="page-content">

      <Link to="/">
        <img src={cartel} className="cartel-image" alt="Cartel" />
      </Link>

      <img src={Page1Image} className="marco-image" alt="Marco" />

      <div className="text-wrapper">
        <h2 className='titulo'>Leonardo Vladimir (Leovlad R.T.F)</h2>

        <div className='text-container'>
          <p className='texto'>LEOVLAD es un destacado artista plástico, conocido por sus obras pictóricas de autor. Su trabajo se caracteriza por una diversidad temática y el uso de técnicas mixtas sobre tela, incluyendo pinturas al óleo y acrílico. Entre sus creaciones se encuentran trípticos, cuadros medianos y grandes, que destacan por sus imágenes creativas y únicas. Su estilo abarca desde lo figurativo hasta lo abstracto, ofreciendo una rica variedad de expresiones artísticas.
          </p>
        </div>
      </div>

    </div>
  );
};

export default Page1;