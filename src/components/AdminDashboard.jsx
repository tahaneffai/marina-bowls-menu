import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import MenuList from './MenuList';
import MenuForm from './MenuForm';

const AdminDashboard = () => {
  const location = useLocation();
  const [currentView, setCurrentView] = useState(
    location.pathname.includes('/add') || location.pathname.includes('/edit') ? 'form' : 'list'
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-cyan-900 to-blue-800">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-3 sm:py-4 md:py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white text-center sm:text-left">
              🍽️ Marina Bowls Admin
            </h1>
            <Link 
              to="/" 
              className="w-full sm:w-auto px-3 sm:px-4 md:px-6 py-2 sm:py-3 bg-cyan-500 hover:bg-cyan-600 text-white text-xs sm:text-sm md:text-base font-semibold rounded-lg transition-colors duration-200 text-center"
            >
              ← Back to Menu
            </Link>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white/5 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-3 sm:py-4">
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
            <Link
              to="/admin"
              className={`w-full sm:w-auto px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-lg transition-colors duration-200 text-xs sm:text-sm md:text-base text-center ${
                currentView === 'list'
                  ? 'bg-cyan-500 text-white'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
              onClick={() => setCurrentView('list')}
            >
              📋 Menu List
            </Link>
            <Link
              to="/admin/add"
              className={`w-full sm:w-auto px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-lg transition-colors duration-200 text-xs sm:text-sm md:text-base text-center ${
                currentView === 'form'
                  ? 'bg-cyan-500 text-white'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
              onClick={() => setCurrentView('form')}
            >
              ➕ Add/Edit Item
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-screen-lg mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-4 sm:py-6 md:py-8 lg:py-12">
        <Routes>
          <Route path="/" element={<MenuList />} />
          <Route path="/add" element={<MenuForm />} />
          <Route path="/edit/:id" element={<MenuForm />} />
        </Routes>
      </main>
    </div>
  );
};

export default AdminDashboard; 