import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const MenuForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = !!id;

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: 'Poké Bowls',
    image: null,
    imagePreview: null
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Mock data for editing - replace with actual backend fetch
  useEffect(() => {
    if (isEditing) {
      // Simulate fetching item data
      const mockItem = {
        id: '1',
        title: 'Salmon Poké Bowl',
        content: 'Fresh salmon, Avocado, Cucumber, Rice',
        category: 'Poké Bowls',
        image: null
      };
      setFormData({
        title: mockItem.title,
        content: mockItem.content,
        category: mockItem.category,
        image: null,
        imagePreview: null
      });
    }
  }, [isEditing]);

  const categories = [
    'Poké Bowls',
    'Drinks',
    'Desserts',
    'Appetizers',
    'Sides'
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }

    if (!formData.content.trim()) {
      newErrors.content = 'Content is required';
    }

    if (!formData.category) {
      newErrors.category = 'Category is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        image: file,
        imagePreview: URL.createObjectURL(file)
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Here you would make the actual API call
      console.log('Form data:', formData);
      
      // Navigate back to list
      navigate('/admin');
    } catch (error) {
      console.error('Error saving item:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    navigate('/admin');
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Header */}
      <div className="mb-4 sm:mb-6 md:mb-8">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3 text-center">
          {isEditing ? '✏️ Edit Menu Item' : '➕ Add New Menu Item'}
        </h2>
        <p className="text-white/70 text-sm sm:text-base text-center">
          {isEditing ? 'Update the menu item details below.' : 'Fill in the details to add a new menu item.'}
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl border border-white/20 p-4 sm:p-6 md:p-8">
          
          {/* Title */}
          <div className="mb-4 sm:mb-6">
            <label htmlFor="title" className="block text-white font-medium mb-2 text-sm sm:text-base">
              Item Title *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className={`block w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border transition-colors duration-200 text-sm sm:text-base ${
                errors.title 
                  ? 'border-red-400 bg-red-500/10' 
                  : 'border-white/20 bg-white/10 focus:border-cyan-400'
              } text-white placeholder-white/50`}
              placeholder="Enter item title..."
            />
            {errors.title && (
              <p className="text-red-400 text-xs sm:text-sm mt-1">{errors.title}</p>
            )}
          </div>

          {/* Category */}
          <div className="mb-4 sm:mb-6">
            <label htmlFor="category" className="block text-white font-medium mb-2 text-sm sm:text-base">
              Category *
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className={`block w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border transition-colors duration-200 text-sm sm:text-base ${
                errors.category 
                  ? 'border-red-400 bg-red-500/10' 
                  : 'border-white/20 bg-white/10 focus:border-cyan-400'
              } text-white`}
            >
              {categories.map(category => (
                <option key={category} value={category} className="bg-gray-800">
                  {category}
                </option>
              ))}
            </select>
            {errors.category && (
              <p className="text-red-400 text-xs sm:text-sm mt-1">{errors.category}</p>
            )}
          </div>

          {/* Content */}
          <div className="mb-4 sm:mb-6">
            <label htmlFor="content" className="block text-white font-medium mb-2 text-sm sm:text-base">
              Ingredients/Description *
            </label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              rows={4}
              className={`block w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border transition-colors duration-200 text-sm sm:text-base ${
                errors.content 
                  ? 'border-red-400 bg-red-500/10' 
                  : 'border-white/20 bg-white/10 focus:border-cyan-400'
              } text-white placeholder-white/50 resize-none`}
              placeholder="Enter ingredients or description (separate with commas)..."
            />
            {errors.content && (
              <p className="text-red-400 text-xs sm:text-sm mt-1">{errors.content}</p>
            )}
            <p className="text-white/60 text-xs sm:text-sm mt-1">
              Separate ingredients with commas (e.g., "Salmon, Avocado, Rice")
            </p>
          </div>

          {/* Image Upload */}
          <div className="mb-4 sm:mb-6">
            <label htmlFor="image" className="block text-white font-medium mb-2 text-sm sm:text-base">
              Item Image
            </label>
            <div className="space-y-3 sm:space-y-4">
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
              <label
                htmlFor="image"
                className="block w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-white/20 bg-white/10 hover:bg-white/20 transition-colors duration-200 cursor-pointer text-center text-white/70 hover:text-white text-sm sm:text-base"
              >
                📷 {formData.image ? 'Change Image' : 'Choose Image'}
              </label>
              
              {/* Image Preview */}
              {formData.imagePreview && (
                <div className="mt-3 sm:mt-4">
                  <p className="text-white/70 text-xs sm:text-sm mb-2">Preview:</p>
                  <div className="w-full h-32 sm:h-40 md:h-48 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg overflow-hidden">
                    <img
                      src={formData.imagePreview}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
          <button
            type="button"
            onClick={handleCancel}
            className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200 text-sm sm:text-base"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 bg-cyan-500 hover:bg-cyan-600 disabled:bg-cyan-500/50 disabled:cursor-not-allowed text-white rounded-lg transition-colors duration-200 text-sm sm:text-base"
          >
            {isSubmitting ? 'Saving...' : (isEditing ? 'Update Item' : 'Add Item')}
          </button>
        </div>
      </form>
    </div>
  );
};

export default MenuForm; 