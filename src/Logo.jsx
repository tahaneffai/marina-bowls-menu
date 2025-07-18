import React from 'react';
import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      <motion.div
        className="w-[100px] h-[100px] bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/20 backdrop-blur-sm"
        whileHover={{ scale: 1.05, rotate: 5 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="text-white font-bold text-2xl text-center"
          animate={{ 
            textShadow: [
              "0 0 20px rgba(34, 211, 238, 0.5)",
              "0 0 30px rgba(34, 211, 238, 0.8)",
              "0 0 20px rgba(34, 211, 238, 0.5)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          MB
        </motion.div>
      </motion.div>
      
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 w-[100px] h-[100px] bg-cyan-400/30 rounded-full blur-xl -z-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
};

export default Logo; 