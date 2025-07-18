import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './HeroSection';
import MenuSection from './MenuSection';
import Footer from './Footer';
import AdminDashboard from './components/AdminDashboard';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleViewMenu = () => {
    setCurrentPage('menu');
    // Smooth scroll to menu section
    setTimeout(() => {
      const menuSection = document.getElementById('menu-section');
      if (menuSection) {
        menuSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Router>
      <div className="min-h-screen w-full flex flex-col bg-white">
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection onViewMenu={handleViewMenu} />
              <MenuSection />
              <Footer />
            </>
          } />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 