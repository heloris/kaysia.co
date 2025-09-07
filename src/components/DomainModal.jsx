import React, { useState, useEffect } from 'react';

function DomainModal({ open, initial = '', onConfirm }) {
  const [domain, setDomain] = useState(initial);

  useEffect(() => {
    if (open) {
      setDomain(initial);
    }
  }, [open, initial]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalDomain = domain.trim() || 'kaysiaemlak.com';
    onConfirm(finalDomain);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  if (!open) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="domain-modal-title"
    >
      <div className="bg-white rounded-2xl max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 id="domain-modal-title" className="text-2xl font-bold text-gray-900">
            Alan Adınızı Girin
          </h2>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="domain-input" className="block text-sm font-medium text-gray-700 mb-2">
              Emlak sitenizin alan adı
            </label>
            <input
              id="domain-input"
              type="text"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="ornek.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
              autoFocus
            />
            <p className="text-sm text-gray-500 mt-2">
              Boş bırakırsanız "kaysiaemlak.com" kullanılacak
            </p>
          </div>
          
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-secondary hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Devam
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DomainModal;
