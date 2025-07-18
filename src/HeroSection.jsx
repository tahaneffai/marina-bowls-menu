import React from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';

const HeroSection = ({ onViewMenu }) => {
  return (
    <section
      className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(/Tropical.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/70 via-blue-900/60 to-emerald-700/70 z-0" />
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4">
        <img
          src="/IMG_3105.PNG"
          alt="Marina Bowls Logo"
          className="w-44 sm:w-56 md:w-72 lg:w-80 xl:w-96 mb-8 drop-shadow-2xl rounded-full border-4 border-white/30 bg-white/10 backdrop-blur-md"
        />
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-xl mb-4 text-center tracking-tight">
          Marina Bowls
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-cyan-100 mb-10 max-w-2xl mx-auto text-center drop-shadow-md font-medium">
          Fresh, bold, and tropical flavors in every bowl
        </p>
        <button
          onClick={onViewMenu}
          className="py-4 px-10 text-white text-xl sm:text-2xl font-bold rounded-full shadow-xl bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-500 hover:from-yellow-500 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-300/50"
        >
          View Our Menu
        </button>
      </div>
    </section>
  );
};

export default HeroSection; 