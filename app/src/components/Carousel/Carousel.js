// import React, { useState } from 'react';
// import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
// import img1 from '../../assets/images/img1.jpg';
// import img2 from '../../assets/images/img2.jpg';
// import img3 from '../../assets/images/img3.jpg';
// import './Carousel.css';

// const artworks = [
//   { src: img1, alt: 'Obra de arte 1', nombre: 'Nombre 1', pais: 'País 1', tematica: 'Temática 1', precio: 'Precio 1' },
//   { src: img2, alt: 'Obra de arte 2', nombre: 'Nombre 2', pais: 'País 2', tematica: 'Temática 2', precio: 'Precio 2' },
//   { src: img3, alt: 'Obra de arte 3', nombre: 'Nombre 3', pais: 'País 3', tematica: 'Temática 3', precio: 'Precio 3' },
// ];

// const Carousel = () => {
//   const [current, setCurrent] = useState(0);
  
//   const nextSlide = () => {
//     setCurrent(current === artworks.length - 1 ? 0 : current + 1);
//   };

//   const prevSlide = () => {
//     setCurrent(current === 0 ? artworks.length - 1 : current - 1);
//   };

//   return (
//     <div className="carousel">
//       <div className="art-description">
//         <h2>{artworks[current].nombre}</h2>
//         <p><strong>País:</strong> {artworks[current].pais}</p>
//         <p><strong>Temática:</strong> {artworks[current].tematica}</p>
//         <p><strong>Precio: $</strong>{artworks[current].precio}</p>
//       </div>
//       <div className="slider">
//         {artworks.map((art, index) => (
//           <div className={index === current ? 'slide active' : 'slide'} key={index}>
//             {index === current && (
//               <div className="image-container">
//                 <img src={art.src} alt={art.alt} className="image" />
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//       <button className="left-arrow" onClick={prevSlide}>
//         <FaArrowAltCircleLeft />
//       </button>
//       <button className="right-arrow" onClick={nextSlide}>
//         <FaArrowAltCircleRight />
//       </button>
//     </div>
//   );
// };

// export default Carousel;


import React, { useState, useEffect } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import img1 from '../../assets/images/img1.jpg';
import img2 from '../../assets/images/img2.jpg';
import img3 from '../../assets/images/img3.jpg';
import './Carousel.css';

const artworks = [
  { src: img1, alt: 'Obra de arte 1', nombre: 'Nombre 1', pais: 'País 1', tematica: 'Temática 1', precio: 'Precio 1' },
  { src: img2, alt: 'Obra de arte 2', nombre: 'Nombre 2', pais: 'País 2', tematica: 'Temática 2', precio: 'Precio 2' },
  { src: img3, alt: 'Obra de arte 3', nombre: 'Nombre 3', pais: 'País 3', tematica: 'Temática 3', precio: 'Precio 3' },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [popupVisible, setPopupVisible] = useState(false);

  const nextSlide = () => {
    setCurrent(current === artworks.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? artworks.length - 1 : current - 1);
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
      <div className="art-description">
        <h2>{artworks[current].nombre}</h2>
        <p><strong>País:</strong> {artworks[current].pais}</p>
        <p><strong>Temática:</strong> {artworks[current].tematica}</p>
        <p><strong>Precio: $</strong>{artworks[current].precio}</p>
      </div>
      <div className="slider">
        {artworks.map((art, index) => (
          <div className={index === current ? 'slide active' : 'slide'} key={index}>
            {index === current && (
              <div className="image-container">
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
      {popupVisible && (
        <div className="popup">
          <p>Acción no permitida</p>
          <button onClick={() => setPopupVisible(false)}>Cerrar</button>
        </div>
      )}
    </div>
  );
};

export default Carousel;
