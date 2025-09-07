import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = '404 Sayfa Bulunamadı – Kaysia Agency';
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Aradığınız sayfa bulunamadı.');
  }, []);

  const handleGoHome = () => {
    navigate('/');
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex items-center justify-center flex-col text-center px-4" style={{ minHeight: 'calc(100vh - 64px)' }}>
        {/* Ana İçerik */}
        <div className="max-w-2xl mx-auto">
          {/* 404 Başlığı */}
          <h1 className="text-6xl md:text-8xl font-bold text-orange-500 mb-4">
            404
          </h1>

          {/* Alt Başlık */}
          <h2 className="text-2xl md:text-3xl text-gray-700 mb-4">
            Sanırım yanlış yola saptınız.
          </h2>

          {/* Açıklama */}
          <p className="text-lg text-gray-600 mb-8">
            Aradığınız sayfa bulunamadı...
          </p>

          {/* İllüstrasyon */}
          <div className="mb-8">
            <div className="w-64 h-64 mx-auto bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-6xl">🔍</span>
            </div>
          </div>

          {/* Butonlar */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleGoHome}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center transition-colors"
            >
              <Home className="w-5 h-5 mr-2" />
              Ana Sayfaya Dön
            </button>
            
            <button
              onClick={handleGoBack}
              className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-8 py-3 rounded-lg font-semibold flex items-center justify-center transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Geri Dön
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
