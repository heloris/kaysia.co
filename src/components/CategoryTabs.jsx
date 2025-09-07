import React from 'react';

function CategoryTabs({ activeCategory, onCategoryChange }) {
  const categories = [
    { id: 'all', name: 'Hepsi' },
    { id: 'Emlak', name: 'Emlak' },
    { id: 'AI', name: 'AI' },
    { id: 'Web', name: 'Web' }
  ];

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
            activeCategory === category.id
              ? 'bg-secondary text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryTabs;
