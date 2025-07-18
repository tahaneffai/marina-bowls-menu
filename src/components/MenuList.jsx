import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Mock data - replace with actual backend data
const mockMenuItems = [
  {
    id: '1',
    title: 'Salmon Poké Bowl',
    content: ['Fresh salmon', 'Avocado', 'Cucumber', 'Rice'],
    category: 'Poké Bowls',
    image: null
  },
  {
    id: '2',
    title: 'Tuna Poké Bowl',
    content: ['Fresh tuna', 'Mango', 'Edamame', 'Rice'],
    category: 'Poké Bowls',
    image: null
  },
  {
    id: '3',
    title: 'Green Smoothie',
    content: ['Spinach', 'Banana', 'Apple', 'Almond milk'],
    category: 'Drinks',
    image: null
  }
];

const MenuList = () => {
  const [menuItems, setMenuItems] = useState(mockMenuItems);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(null);

  // Group items by category
  const groupedItems = menuItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  const handleDelete = (id) => {
    setMenuItems(menuItems.filter(item => item.id !== id));
    setShowDeleteConfirm(null);
  };

  const confirmDelete = (id) => {
    setShowDeleteConfirm(id);
  };

  return (
    <div className="space-y-4 sm:space-y-6 md:space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white text-center sm:text-left">
          Menu Items ({menuItems.length})
        </h2>
        <Link
          to="/admin/add"
          className="w-full sm:w-auto px-3 sm:px-4 md:px-6 py-2 sm:py-3 bg-cyan-500 hover:bg-cyan-600 text-white text-xs sm:text-sm md:text-base font-semibold rounded-lg transition-colors duration-200 text-center"
        >
          ➕ Add New Item
        </Link>
      </div>

      {/* Menu Items by Category */}
      <div className="space-y-6 sm:space-y-8 md:space-y-10">
        {Object.entries(groupedItems).map(([category, items]) => (
          <div key={category} className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl border border-white/20 p-4 sm:p-6 md:p-8">
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white mb-3 sm:mb-4 md:mb-6 flex items-center">
              {category === 'Poké Bowls' ? '🥣' : category === 'Drinks' ? '🥤' : '🍽️'} {category}
              <span className="ml-2 text-xs sm:text-sm md:text-base text-white/60">({items.length} items)</span>
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-3 sm:p-4 md:p-6 hover:bg-white/10 transition-colors duration-200"
                >
                  {/* Image Preview */}
                  <div className="w-full h-20 sm:h-24 md:h-32 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg mb-2 sm:mb-3 flex items-center justify-center">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <div className="text-white/40 text-2xl sm:text-3xl md:text-4xl">🍽️</div>
                    )}
                  </div>

                  {/* Item Details */}
                  <div className="space-y-1 sm:space-y-2">
                    <h4 className="font-semibold text-white text-sm sm:text-base md:text-lg">{item.title}</h4>
                    <div className="text-white/70 text-xs sm:text-sm md:text-base">
                      <p className="font-medium mb-1">Ingredients:</p>
                      <ul className="space-y-1">
                        {item.content.map((ingredient, index) => (
                          <li key={index} className="flex items-center">
                            <span className="text-cyan-300 mr-1 sm:mr-2 flex-shrink-0">•</span>
                            <span className="text-xs sm:text-sm">{ingredient}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 mt-3 sm:mt-4">
                    <Link
                      to={`/admin/edit/${item.id}`}
                      className="flex-1 sm:flex-none px-2 sm:px-3 md:px-4 py-1 sm:py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200 text-xs sm:text-sm text-center"
                    >
                      ✏️ Edit
                    </Link>
                    <button
                      onClick={() => confirmDelete(item.id)}
                      className="flex-1 sm:flex-none px-2 sm:px-3 md:px-4 py-1 sm:py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors duration-200 text-xs sm:text-sm"
                    >
                      🗑️ Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl border border-white/20 p-4 sm:p-6 max-w-md w-full mx-4">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Confirm Delete</h3>
            <p className="text-white/80 mb-4 sm:mb-6 text-sm sm:text-base">
              Are you sure you want to delete this menu item? This action cannot be undone.
            </p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
              <button
                onClick={() => setShowDeleteConfirm(null)}
                className="flex-1 px-3 sm:px-4 py-2 sm:py-3 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200 text-sm sm:text-base"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(showDeleteConfirm)}
                className="flex-1 px-3 sm:px-4 py-2 sm:py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors duration-200 text-sm sm:text-base"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuList; 