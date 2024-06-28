

import React from 'react';
import Page1Image from '../../assets/images/pag1.jpeg';
import cartel from '../../assets/images/back.png';
import './page1.css'; 
import { Link } from 'react-router-dom';

const Page1 = () => {
  return (
    <div className="page-content" style={{ backgroundImage: `url(${Page1Image})`, backgroundPosition: 'center' }}>

      <Link to ="/">
        <img src={cartel} className="cartel-image" alt="Cartel" />
      </Link>

      <h2 className='titulo'>Leonardo Vladimir (Leovlad R. T. F)</h2>

      <div className='image-frame'>
        <div className='text'>
          <p>Nació en la Republica Argentina. Ha estudiado con importantes profesores de su natal ciudad de Ensenada, Ciudad de La Plata, y Ciudad de Buenos Aires, y desde su tierna niñez ha tomado el pincel hasta el dia de hoy. La Escuela de Bellas Artes de la Universidad Nacional de La Plata ha sido su lugar de estudios principal, escuela que tantos conocimientos le ha aportado. Ha expuesto y participado en numerosas muestras y concursos a lo largo de toda su carrera. Él mismo se autodenomina como un "Autor Libre y Creativo".
          </p>
        </div>
        <div className='frame'></div>
      </div>

    </div>
  );
};

export default Page1;
