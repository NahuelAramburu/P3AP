import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainContent from '../layouts/MainContent/MainContent';
import Page1 from '../pages/page1/Page1'; 
import Page2 from '../pages/page2/Page2';  
import Page3 from '../pages/page3/Page3';
import Page4 from '../pages/page4/Page4';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainContent />} exact />
      <Route path="/page1" element={<Page1 />} />
      <Route path="/page2" element={<Page2 />} />
      <Route path="/page3" element={<Page3 />} />
      <Route path="/page4" element={<Page4 />} />
    </Routes>
  );
};

export default AppRoutes;

