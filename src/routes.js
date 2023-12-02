import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import BestSeller from './components/BestSeller/BestSeller';
import ArtWorks from './components/ArtWorks/ArtWorks';
import ArtDetail from './pages/ArtDetail/ArtDetail';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/bestseller" element={<BestSeller />} />
        <Route path="/artworks" element={<ArtWorks />} />
        <Route path="/artdetail" element={<ArtDetail />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
