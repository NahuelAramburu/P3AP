import React, { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = () => {
  const [obras, setObras] = useState([]);
  const [current, setCurrent] = useState(0);
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
    const preventContextMenu = (event) => {
      event.preventDefault();
      const warningPopup = document.createElement('div');
      warningPopup.textContent = 'Acción no permitida';
      warningPopup.className = 'carousel-context-menu-warning'; 
      document.body.appendChild(warningPopup);

      warningPopup.style.top = `${event.pageY}px`;
      warningPopup.style.left = `${event.pageX}px`;

      setTimeout(() => {
        warningPopup.remove();
      }, 1000);
    };

    document.addEventListener('contextmenu', preventContextMenu);

    return () => {
      document.removeEventListener('contextmenu', preventContextMenu);
    };
  }, []);

  return (
    <div className="carousel-container">
      {obras.length > 0 && (
        <>
          <div className="carousel-card">
            <div className="carousel-art-description">
              <h2>{obras[current].nombre}</h2>
              <p><strong>País:</strong> {obras[current].pais}</p>
              <p><strong>Temática:</strong> {obras[current].tematica}</p>
              <p><strong>Técnica y soportes:</strong> {obras[current].tecnica}, {obras[current].soportes}</p>
              <p><strong>Medidas:</strong> {obras[current].medidas}</p>
              <p><strong>En Artelista desde:</strong> {obras[current].enArtelistaDesde}</p>
              <p><strong>Descripción:</strong> {obras[current].descripcion}</p>
              <p><strong>Precio: $</strong>{obras[current].precio}</p>
            </div>
            <div className="carousel-slider">
              {obras.map((art, index) => (
                <div className={index === current ? 'carousel-slide active' : 'carousel-slide'} key={index}>
                  {index === current && (
                    <div className="carousel-image-container" onClick={() => openModal(art.src)}>
                      <img src={art.src} alt={art.alt} className="carousel-image" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <button className="carousel-left-arrow" onClick={prevSlide}>
            &lt;
          </button>
          <button className="carousel-right-arrow" onClick={nextSlide}>
            &gt;
          </button>
        </>
      )}
      {modalVisible && (
        <div className="carousel-modal">
          <span className="carousel-close-modal" onClick={() => setModalVisible(false)}>&times;</span>
          <img src={currentImage} alt="Ampliada" className="carousel-modal-content" />
        </div>
      )}
    </div>
  );
};

export default Carousel;