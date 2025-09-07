import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isThemesOpen, setIsThemesOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleThemes = () => {
    setIsThemesOpen(!isThemesOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/Logo.png" 
                alt="Kaysia Agency" 
                className="h-10 w-auto"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <div className="hidden text-2xl font-bold text-primary">KA</div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors ${
                isActive('/') ? 'text-secondary' : 'text-gray-700 hover:text-secondary'
              }`}
            >
              Ana Sayfa
            </Link>
            
            {/* Temalar Dropdown */}
            <div className="relative">
              <button
                onClick={toggleThemes}
                className="flex items-center gap-1 font-medium text-gray-700 hover:text-secondary transition-colors"
              >
                Temalar
                <ChevronDown size={16} />
              </button>
              
              {isThemesOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                  <Link
                    to="/emlak"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-secondary transition-colors"
                    onClick={() => setIsThemesOpen(false)}
                  >
                    Emlak
                  </Link>
                  <Link
                    to="/kartvizit"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-secondary transition-colors"
                    onClick={() => setIsThemesOpen(false)}
                  >
                    Kartvizit
                  </Link>
                  <Link
                    to="/haber"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-secondary transition-colors"
                    onClick={() => setIsThemesOpen(false)}
                  >
                    Haber
                  </Link>
                </div>
              )}
            </div>
            
            <Link 
              to="/satinal" 
              className={`font-medium transition-colors ${
                isActive('/satinal') ? 'text-secondary' : 'text-gray-700 hover:text-secondary'
              }`}
            >
              Satın Al
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-secondary focus:outline-none focus:text-secondary"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link
                to="/"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/') ? 'text-secondary bg-orange-50' : 'text-gray-700 hover:text-secondary hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Ana Sayfa
              </Link>
              
              <div className="px-3 py-2">
                <div className="text-base font-medium text-gray-700 mb-2">Temalar</div>
                <div className="pl-4 space-y-1">
                  <Link
                    to="/emlak"
                    className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                      isActive('/emlak') ? 'text-secondary bg-orange-50' : 'text-gray-600 hover:text-secondary hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Emlak
                  </Link>
                  <Link
                    to="/kartvizit"
                    className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                      isActive('/kartvizit') ? 'text-secondary bg-orange-50' : 'text-gray-600 hover:text-secondary hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Kartvizit
                  </Link>
                  <Link
                    to="/haber"
                    className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                      isActive('/haber') ? 'text-secondary bg-orange-50' : 'text-gray-600 hover:text-secondary hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Haber
                  </Link>
                </div>
              </div>
              
              <Link
                to="/satinal"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/satinal') ? 'text-secondary bg-orange-50' : 'text-gray-700 hover:text-secondary hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Satın Al
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
