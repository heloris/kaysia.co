import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = '404 - Sayfa Bulunamadı | Kaysia Agency';
    const metaDescription = document.querySelector('meta[name="description"]');
    const content = 'Aradığınız sayfa bulunamadı. Ana sayfaya dönmek için tıklayın.';
    if (metaDescription) {
      metaDescription.setAttribute('content', content);
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      meta.setAttribute('content', content);
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      {/* MAIN */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-orange-500 mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl text-gray-700 mb-4">Sanırım yanlış yola saptınız.</h2>
          <p className="text-lg text-gray-500 mb-8 max-w-md mx-auto">
            Aradığınız sayfa bulunamadı ya da taşınmış olabilir.
            Ana sayfaya dönerek aradığınızı bulabilirsiniz.
          </p>

          <div className="max-w-md mx-auto mb-8">
            <img
              src="https://picsum.photos/seed/404/400/300"
              alt="404 - Sayfa bulunamadı"
              className="w-full h-auto rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => navigate('/')}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-300 flex items-center gap-2"
              aria-label="Ana sayfaya dön"
            >
              <Home size={20} />
              Ana Sayfaya Dön
            </button>

            <button
              onClick={() => navigate(-1)}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold transition-colors duration-300 flex items-center gap-2"
              aria-label="Geri dön"
            >
              <ArrowLeft size={20} />
              Geri Dön
            </button>
          </div>

          <div className="mt-12 text-sm text-gray-400">
            <p>Yardıma mı ihtiyacınız var?</p>
            <p className="mt-1">
              <a href="/satinal" className="text-orange-500 hover:text-orange-600 transition-colors">Web sitenizi oluşturun</a>
              {' '}veya{' '}
              <a href="/#contact" className="text-orange-500 hover:text-orange-600 transition-colors">bizimle iletişime geçin</a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default NotFound;
