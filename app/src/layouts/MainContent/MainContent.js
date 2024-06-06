import React from 'react';
import CastleImage from '../../assets/images/Castle.jpg';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Carrousel from '../../components/Carrousel/Carrousel';
import './MainContent.css'; 

const MainContent = () => {
  return (
    <div className="main-content">
      <Header />
      <Navbar />
      <Carrousel />
      <div className="castle-container">
        <img src={CastleImage} alt="Medieval Castle" className="castle-image"/>
        <a href="/page1" className="link-window">Page 1</a>
        {/* <a href="/page2" className="link-door">Page 2</a>
        <a href="/page3" className="link-window">Page 3</a>
        <a href="/page4" className="link-door">Page 4</a> */}
      </div>
    </div>
  );
};

export default MainContent;
