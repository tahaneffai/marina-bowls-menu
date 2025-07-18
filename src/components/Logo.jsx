import React from 'react';
import { motion } from 'framer-motion';

const logoVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: 'easeOut' },
  },
  hover: {
    scale: 1.04,
    rotate: 1,
    boxShadow: '0 8px 32px 0 rgba(34,197,246,0.15)',
    transition: { duration: 0.3 },
  },
};

const Logo = ({ className = '' }) => (
  <motion.div
    variants={logoVariants}
    initial="hidden"
    animate="visible"
    whileHover="hover"
    className={`relative ${className}`}
  >
    <img
      src="/IMG_3105.PNG"
      alt="Marina Bowls Logo"
      className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md mx-auto drop-shadow-2xl"
      draggable={false}
    />
  </motion.div>
);

export default Logo; 