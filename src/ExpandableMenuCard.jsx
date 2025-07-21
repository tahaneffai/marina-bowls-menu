import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ExpandableMenuCard = ({ category }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="bg-gradient-to-br from-blue-800/80 to-cyan-700/80 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-2xl border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300"
      whileHover={{ y: -5, scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
            {category.name}
          </h3>
          <p className="text-cyan-200 text-sm lg:text-base">
            {category.description}
          </p>
        </div>
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </motion.div>
        </motion.button>
      </div>

      {/* Items */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="space-y-4 pt-4 border-t border-cyan-400/20">
              {category.image && (
                <div className="flex justify-center mb-4">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-24 h-24 rounded-full shadow-xl border-4 border-cyan-400/30 bg-white/10 object-cover object-center"
                  />
                </div>
              )}
              {category.items.map((item, index) => (
                <motion.div
                  key={item.title ? `${item.title}-${index}` : index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-gradient-to-r from-blue-700/50 to-cyan-600/50 rounded-xl p-4 lg:p-6 backdrop-blur-sm border border-cyan-400/10 hover:border-cyan-400/30 transition-all duration-300"
                >
                  {/* Item Image */}
                  {item.image && (
                    <div className="flex justify-center mb-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-20 h-20 rounded-full shadow-lg border-2 border-cyan-400/30 bg-white/10 object-cover object-center"
                      />
                    </div>
                  )}
                  <div className="mb-3">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg lg:text-xl font-semibold text-white">
                        {item.title}
                      </h4>
                      {item.price && (
                        <span className="bg-gradient-to-r from-cyan-500/90 to-blue-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm lg:text-base font-bold shadow-lg border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300">
                          {item.price}
                        </span>
                      )}
                    </div>
                  </div>
                  {/* Content/Ingredients */}
                  {item.content && (
                    <div className="mt-2">
                      <p className="text-cyan-300 text-sm font-medium mb-2">
                        {Array.isArray(item.content) ? 'Ingredients:' : 'Description:'}
                      </p>
                      <ul className="flex flex-col gap-2 list-disc list-inside text-cyan-200 text-sm lg:text-base">
                        {Array.isArray(item.content)
                          ? item.content.map((ingredient, idx) => (
                              <li key={ingredient + idx}>{ingredient}</li>
                            ))
                          : <li>{item.content}</li>
                        }
                      </ul>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ExpandableMenuCard; 