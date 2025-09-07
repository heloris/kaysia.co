import React from 'react';

function TagList({ tags, onTagClick, activeTag = null }) {
  if (!tags || tags.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <button
          key={index}
          onClick={() => onTagClick(tag)}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
            activeTag === tag
              ? 'bg-secondary text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          #{tag}
        </button>
      ))}
    </div>
  );
}

export default TagList;
