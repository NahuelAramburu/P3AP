import React, { useState, useEffect } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import './Carousel.css';

const Carousel = () => {
  const [obras, setObras] = useState([]);
  const [current, setCurrent] = useState(0);
  const [popupVisible, setPopupVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  useEffect(() => {
    const fetchObras = async () => {
      try {
        const response = await fetch('/obras.json'); 
        const data = await response.json();
        setObras(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchObras();
  }, []);

  const nextSlide = () => {
    setCurrent(current === obras.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? obras.length - 1 : current - 1);
  };

  const openModal = (imageSrc) => {
    setCurrentImage(imageSrc);
    setModalVisible(true);
  };

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setPopupVisible(true);
      }
    };

    const handleContextMenu = (e) => {
      e.preventDefault();
      setPopupVisible(true);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  return (
    <div className="carousel">
      {obras.length > 0 && (
        <>
          <div className="art-description">
            <h2>{obras[current].nombre}</h2>
            <p><strong>País:</strong> {obras[current].pais}</p>
            <p><strong>Temática:</strong> {obras[current].tematica}</p>
            <p><strong>Técnica y soportes:</strong> {obras[current].tecnica}, {obras[current].soportes}</p>
            <p><strong>Medidas:</strong> {obras[current].medidas}</p>
            <p><strong>En Artelista desde:</strong> {obras[current].enArtelistaDesde}</p>
            <p><strong>Descripción:</strong> {obras[current].descripcion}</p>
            <p><strong>Precio: $</strong>{obras[current].precio}</p>
          </div>
          <div className="slider">
            {obras.map((art, index) => (
              <div className={index === current ? 'slide active' : 'slide'} key={index}>
                {index === current && (
                  <div className="image-container" onClick={() => openModal(art.src)}>
                    <img src={art.src} alt={art.alt} className="image" />
                  </div>
                )}
              </div>
            ))}
          </div>
          <button className="left-arrow" onClick={prevSlide}>
            <FaArrowAltCircleLeft />
          </button>
          <button className="right-arrow" onClick={nextSlide}>
            <FaArrowAltCircleRight />
          </button>
        </>
      )}
      {popupVisible && (
        <div className="popup">
          <p>Acción no permitida</p>
          <button onClick={() => setPopupVisible(false)}>Cerrar</button>
        </div>

        
      )}
      {modalVisible && (
        <div className="modal">
          <span className="close-modal" onClick={() => setModalVisible(false)}>&times;</span>
          <img src={currentImage} alt="Ampliada" className="modal-content" />
        </div>
      )}
      {modalVisible && (
        <div className="modal">
          <span className="close-modal" onClick={() => setModalVisible(false)}>&times;</span>
          <img src={currentImage} alt="Ampliada" className="modal-content" />
        </div>
      )}
    </div>
  );
};

export default Carousel;