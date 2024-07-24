import React from 'react';
import { Link } from 'react-router-dom';
import cartel from '../../assets/images/back.png';
import './Page3.css';
import Gallery from '../../components/Gallery/Gallery';

const Page3 = () => {
  return (
    <div className="content-page">
      <Link to="/">
        <img src={cartel} className="cartel-image" alt="Cartel" />
      </Link>
      <div className="frame-container-marco"></div>
      <Gallery />
    </div>
  );
};

export default Page3;
