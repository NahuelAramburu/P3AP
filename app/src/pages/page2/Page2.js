import React from 'react';
import Page2Image from '../../assets/images/marco.png';
import cartel from '../../assets/images/back.png';
import './Page2.css';
import { Link } from 'react-router-dom';

const Page2 = () => {
  return (
    <div className="page-contentB">

      <Link to="/">
        <img src={cartel} className="cartel-image" alt="Cartel" />
      </Link>

      <img src={Page2Image} className="marco-imageB" alt="Marco" />

      <div className="text-wrapperB">
        <h2 className='tituloB'>Leonardo Vladimir (Leovlad R.T.F)</h2>

        <div className='text-containerB'>
          <p className='textoB'>Nació en la Republica Argentina. Ha estudiado con importantes profesores de su natal ciudad de Ensenada, Ciudad de La Plata, y Ciudad de Buenos Aires, y desde su tierna niñez ha tomado el pincel hasta el dia de hoy. La Escuela de Bellas Artes de la Universidad Nacional de La Plata ha sido su lugar de estudios principal, escuela que tantos conocimientos le ha aportado. Ha expuesto y participado en numerosas muestras y concursos a lo largo de toda su carrera. Él mismo se autodenomina como un "Autor Libre y Creativo".
          </p>
        </div>
      </div>

    </div>
  );
};


export default Page2;