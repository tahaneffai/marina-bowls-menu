import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="w-full py-3 sm:py-4 md:py-6 lg:py-8 bg-gradient-to-r from-blue-900 to-cyan-900 text-white text-center text-xs sm:text-sm md:text-base lg:text-lg px-4 sm:px-6 md:px-10 lg:px-20">
    <div className="max-w-screen-lg mx-auto">
      <div className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
        <div>
          &copy; {new Date().getFullYear()} Marina Bowls. All rights reserved.
        </div>
        <Link 
          to="/admin" 
          className="text-cyan-300 hover:text-cyan-200 transition-colors duration-200"
        >
          🛠️ Admin Dashboard
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer; 