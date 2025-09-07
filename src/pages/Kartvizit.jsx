import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MessageCircle, Linkedin, Clock, Shield, Bot } from 'lucide-react';

function Kartvizit() {
  // Sayfa yüklendiğinde meta tag'leri güncelle
  useEffect(() => {
    document.title = 'Kartvizit Demo – Kaysia Agency';
    
    // Meta description güncelle
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', '24 saatte hazır kişisel kartvizit siteniz.');
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      meta.setAttribute('content', '24 saatte hazır kişisel kartvizit siteniz.');
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary">
      <div className="flex items-center justify-center p-4" style={{ minHeight: 'calc(100vh - 64px)' }}>
        <div className="w-full max-w-md">
          {/* Kartvizit Kartı */}
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            {/* Logo */}
            <div className="mb-6">
              <img 
                src="/Logo.png" 
                alt="Logo" 
                className="h-16 w-auto mx-auto"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <div className="hidden text-4xl font-bold text-primary">KA</div>
            </div>

            {/* İsim */}
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Ahmet Yılmaz
            </h1>

            {/* Unvan */}
            <h2 className="text-lg text-gray-600 mb-4">
              Dijital Pazarlama Uzmanı
            </h2>

            {/* Bio */}
            <p className="text-gray-700 mb-6 leading-relaxed">
              Dijital dünyada markanızı öne çıkarmak için profesyonel çözümler sunuyorum. 
              Web tasarım, SEO ve sosyal medya yönetimi konularında uzmanım.
            </p>

            {/* İletişim İkonları */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <a
                href="mailto:ahmet@example.com"
                className="w-12 h-12 bg-secondary hover:bg-primary text-white rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="E-posta gönder"
              >
                <Mail size={20} />
              </a>
              <a
                href="tel:+905555555555"
                className="w-12 h-12 bg-secondary hover:bg-primary text-white rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Telefon et"
              >
                <Phone size={20} />
              </a>
              <a
                href="https://wa.me/905555555555"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-secondary hover:bg-primary text-white rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="WhatsApp ile iletişime geç"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/mehmetkaysi/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-secondary hover:bg-primary text-white rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="LinkedIn profili"
              >
                <Linkedin size={20} />
              </a>
            </div>

            {/* CTA */}
            <Link
              to="/satinal?paket=kartvizit"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Ben de böyle kartvizit isterim
            </Link>
          </div>
        </div>
      </div>

      {/* Özellikler */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Kartvizit Sitenizin Özellikleri
          </h2>
          <p className="text-white/80">
            24 saatte profesyonel kartvizit siteniz hazır
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">24 Saat Garantisi</h3>
            <p className="text-white/80">Siteniz 24 saat içinde yayında</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Güvenli & Hızlı</h3>
            <p className="text-white/80">SSL sertifikası ve hızlı yükleme</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Bot className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">AI Destekli</h3>
            <p className="text-white/80">Akıllı içerik önerileri</p>
          </div>
        </div>
      </div>

      {/* CTA Şeridi */}
      <div className="bg-white/10 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Kartvizit siteniz 24 saatte hazır</h3>
            <p className="text-white/80">Profesyonel görünüm, hızlı teslimat</p>
          </div>
          <Link
            to="/satinal?paket=kartvizit"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
          >
            Hemen Başla
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Kartvizit;