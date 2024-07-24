import React, { useState, useEffect } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const [currentCategory, setCurrentCategory] = useState('All');

  useEffect(() => {
    const fetchObras = async () => {
      try {
        const response = await fetch('/obras.json');
        const data = await response.json();
        setItems(data);
        setFilteredItems(data); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchObras();

    const preventContextMenu = (event) => {
      event.preventDefault();
      const warningPopup = document.createElement('div');
      warningPopup.textContent = 'Acción no permitida';
      warningPopup.className = 'gallery-context-menu-warning'; 
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

  const filterItems = (category) => {
    if (category === 'All') {
      setFilteredItems(items);
    } else {
      const filtered = items.filter(item => item.tematica === category);
      setFilteredItems(filtered);
    }
    setCurrentCategory(category);
  };

  const openModal = (imageUrl) => {
    setCurrentImage(imageUrl);
    setModalVisible(true);
  };

  return (
    <div className="gallery-gallery-container">
      <div className="gallery-filter-buttons">
        <button onClick={() => filterItems('All')} className={currentCategory === 'All' ? 'gallery-active' : ''}>Todo</button>
        <button onClick={() => filterItems('Temática 1')} className={currentCategory === 'Temática 1' ? 'gallery-active' : ''}>Categoría 1</button>
        <button onClick={() => filterItems('Temática 2')} className={currentCategory === 'Temática 2' ? 'gallery-active' : ''}>Categoría 2</button>
        <button onClick={() => filterItems('Temática 3')} className={currentCategory === 'Temática 3' ? 'gallery-active' : ''}>Categoría 3</button>
        <button onClick={() => filterItems('Temática 4')} className={currentCategory === 'Temática 4' ? 'gallery-active' : ''}>Categoría 4</button>
      </div>
      <div className="gallery-gallery">
        {filteredItems.map((item, index) => (
          <div key={index} className="gallery-gallery-item" onClick={() => openModal(item.src)}>
            <div className="gallery-card">
              <img src={item.src} alt={item.alt} />
              <div className="gallery-card-content">
                <h3>{item.nombre}</h3>
                <p><strong>País:</strong> {item.pais}</p>
                <p><strong>Técnica:</strong> {item.tecnica}</p>
                <p><strong>Soportes:</strong> {item.soportes}</p>
                <p><strong>Medidas:</strong> {item.medidas}</p>
                <p><strong>En Artelista desde:</strong> {item.enArtelistaDesde}</p>
                <p><strong>Descripción:</strong> {item.descripcion}</p>
                <p><strong>Precio:</strong> {item.precio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {modalVisible && (
        <div className="gallery-modal">
          <span className="gallery-close-modal" onClick={() => setModalVisible(false)}>&times;</span>
          <img src={currentImage} alt="Ampliada" className="gallery-modal-content" />
        </div>
      )}
    </div>
  );
};

export default Gallery;
