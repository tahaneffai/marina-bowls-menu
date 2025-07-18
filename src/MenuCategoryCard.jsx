import React from 'react';

const MenuCategoryCard = ({ title, items }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        {title}
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-lg p-4 border border-gray-200 shadow-md transition-shadow hover:shadow-lg"
          >
            <h4 className="text-lg font-semibold text-gray-800 mb-3">
              {item.title}
            </h4>
            <ul className="space-y-2">
              {item.content.map((contentItem, contentIndex) => (
                <li key={contentIndex} className="text-sm text-gray-600 flex items-start">
                  <span className="text-green-500">•</span> {contentItem}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuCategoryCard; 