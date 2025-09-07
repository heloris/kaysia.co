import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { 
  Clock, 
  Shield, 
  Bot, 
  Globe, 
  Zap, 
  Timer, 
  Users, 
  Headphones,
  Star
} from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import SatinalPage from './pages/SatinalPage';
import EmlakPage from './routes/emlak';
import KartvizitPage from './routes/kartvizit';
import HaberIndex from './routes/haber/index';
import HaberSlug from './routes/haber/[slug]';
import FormPage from './routes/form';
import NotFound from './routes/NotFound';

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-primary to-blue-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Kaysia Agency</h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">24 saatte hazır profesyonel web sitesi</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/satinal" 
              className="bg-secondary hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Hemen Başla
            </a>
            <a 
              href="/satinal#domain" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Alan Adı Sorgula
            </a>
          </div>
        </div>
      </section>

      {/* Biz Kimiz Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Biz Kimiz?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Kaysia Agency, modern işletmeler için hızlı, güvenilir ve AI destekli web çözümleri üretir.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Hız</h3>
              <p className="text-gray-600">Kartvizit siteniz 24 saatte yayında.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Güven</h3>
              <p className="text-gray-600">Domain, hosting ve güvenlik tek pakette.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bot size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Destek</h3>
              <p className="text-gray-600">Otomasyon ve akıllı akışlar.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Vizyonumuz & Misyonumuz</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-secondary text-white w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Globe size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Vizyonumuz</h3>
              </div>
              <p className="text-gray-600">Her işletmenin 24 saatte dijital dünyada yer alabilmesi.</p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-secondary text-white w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Zap size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Misyonumuz</h3>
              </div>
              <p className="text-gray-600">Hızlı, güvenilir ve sürdürülebilir web çözümleriyle markaları geleceğe taşımak.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Temalar Section */}
      <section id="themes" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Temalar</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <a 
              href="/emlak" 
              target="_blank" 
              rel="noopener"
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow hover:scale-105 transform duration-300"
            >
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white font-semibold text-lg">Emlak</span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold text-gray-900">Emlak</h3>
                <span className="bg-secondary text-white px-2 py-1 rounded text-sm">Demo</span>
              </div>
              <p className="text-gray-600">İlan odaklı, gerçek emlak sitesi hissi.</p>
            </a>
            
            <a 
              href="/kartvizit" 
              target="_blank" 
              rel="noopener"
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow hover:scale-105 transform duration-300"
            >
              <div className="aspect-video bg-gradient-to-br from-green-500 to-green-700 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white font-semibold text-lg">Kartvizit</span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold text-gray-900">Kartvizit</h3>
                <span className="bg-green-500 text-white px-2 py-1 rounded text-sm">24h</span>
              </div>
              <p className="text-gray-600">One-page kartvizit; 24 saat garantisi.</p>
            </a>
            
            <a 
              href="/haber" 
              target="_blank" 
              rel="noopener"
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow hover:scale-105 transform duration-300"
            >
              <div className="aspect-video bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white font-semibold text-lg">Haberler</span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold text-gray-900">Haberler</h3>
                <span className="bg-purple-500 text-white px-2 py-1 rounded text-sm">SEO</span>
              </div>
              <p className="text-gray-600">SEO odaklı içerik ve blog akışı.</p>
            </a>
          </div>
        </div>
      </section>

      {/* Neden Biz Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Neden Biz?</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Timer size={24} />
              </div>
              <p className="text-sm text-gray-600">Hızlı Teslimat</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield size={24} />
              </div>
              <p className="text-sm text-gray-600">Güvenli Altyapı</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Bot size={24} />
              </div>
              <p className="text-sm text-gray-600">AI Destekli</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users size={24} />
              </div>
              <p className="text-sm text-gray-600">Uzman Ekip</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Headphones size={24} />
              </div>
              <p className="text-sm text-gray-600">7/24 Destek</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Müşteri Yorumları</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">"24 saatte sitemiz hazırdı. Çok memnun kaldık!"</p>
              <div className="text-sm">
                <p className="font-semibold text-gray-900">Ahmet Yılmaz</p>
                <p className="text-gray-500">Emlak Danışmanı</p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">"Profesyonel hizmet, uygun fiyat. Kesinlikle tavsiye ederim."</p>
              <div className="text-sm">
                <p className="font-semibold text-gray-900">Fatma Demir</p>
                <p className="text-gray-500">Kuaför Salonu</p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">"AI destekli çözümler gerçekten işe yarıyor. Harika!"</p>
              <div className="text-sm">
                <p className="font-semibold text-gray-900">Mehmet Kaya</p>
                <p className="text-gray-500">Restoran Sahibi</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/satinal" element={<SatinalPage />} />
        <Route path="/emlak" element={<EmlakPage />} />
        <Route path="/kartvizit" element={<KartvizitPage />} />
                    <Route path="/haber" element={<HaberIndex />} />
                    <Route path="/haber/:slug" element={<HaberSlug />} />
                    <Route path="/form" element={<FormPage />} />
                    <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
