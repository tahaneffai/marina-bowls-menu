import React from 'react';
import { motion } from 'framer-motion';
import ExpandableMenuCard from './ExpandableMenuCard';
import { menu } from './data/menu';

const MenuSection = () => {
  return (
    <section
      id="menu-section"
      className="px-4 sm:px-6 md:px-10 lg:px-20 py-6 sm:py-8 md:py-12 lg:py-16 space-y-4 sm:space-y-6 md:space-y-8 relative overflow-hidden min-h-[100vh]"
      style={{
        backgroundImage: 'url(/Tropical.png)',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-cyan-700/80"></div>
      
      {/* Additional overlay for mobile optimization */}
      <div className="absolute inset-0 bg-black/30 md:bg-black/20"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Our Menu
          </h2>
          <p className="text-lg md:text-xl text-cyan-100 max-w-2xl mx-auto drop-shadow-md">
            Discover our fresh and delicious offerings
          </p>
        </motion.div>

        {/* Menu Cards Container */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12">
            <ExpandableMenuCard category={{ name: 'Breakfast', items: menu.breakfast, image: menu.breakfastImage }} />
            <ExpandableMenuCard category={{ name: 'Poké Bowls', items: menu.pokebowls }} />
            <ExpandableMenuCard category={{ name: 'Desserts & Drinks', items: menu.dessertsAndDrinks }} />
          </div>
        </div>

        {/* Back to Home Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 drop-shadow-lg"
          >
            Back to Home
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection; 