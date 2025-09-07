import React, { useEffect } from 'react';
import { Mail, Phone, MessageCircle, Linkedin } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function KartvizitPage() {
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
      <Header />
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
          <p className="text-sm text-gray-500 mb-8 leading-relaxed">
            Markanızı dijital dünyada büyütüyorum. Web sitesi, SEO ve reklam yönetimi konularında uzmanım.
          </p>

          {/* İletişim İkonları */}
          <div className="flex justify-center gap-4 mb-8">
            <a
              href="mailto:info@ornek.com"
              className="w-12 h-12 bg-secondary hover:bg-primary text-white rounded-full flex items-center justify-center transition-colors duration-300"
              aria-label="E-posta gönder"
            >
              <Mail size={20} />
            </a>
            
            <a
              href="tel:+905555555555"
              className="w-12 h-12 bg-secondary hover:bg-primary text-white rounded-full flex items-center justify-center transition-colors duration-300"
              aria-label="Telefon ara"
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
            
            <button
              className="w-12 h-12 bg-secondary hover:bg-primary text-white rounded-full flex items-center justify-center transition-colors duration-300"
              aria-label="LinkedIn profili"
            >
              <Linkedin size={20} />
            </button>
          </div>

          {/* Alt Bilgi */}
          <div className="text-xs text-gray-400 border-t pt-4">
            <p>Profesyonel Dijital Hizmetler</p>
            <p>24/7 Destek • Güvenilir Çözümler</p>
          </div>
        </div>

        {/* CTA Butonu */}
        <div className="mt-8 text-center">
          <a
            href="/satinal?paket=kartvizit"
            className="bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-lg font-bold text-lg transition-colors duration-300 inline-block shadow-lg hover:shadow-xl"
          >
            Ben de böyle kartvizit isterim
          </a>
        </div>

        {/* Alt Açıklama */}
        <div className="mt-6 text-center text-white text-sm opacity-80">
          <p>24 saatte hazır • Mobil uyumlu • SEO optimizasyonlu</p>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default KartvizitPage;
