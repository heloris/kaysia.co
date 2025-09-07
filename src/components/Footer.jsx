import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MessageCircle, Linkedin } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Sol Blok - Logo ve Açıklama */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/Logo.png" 
                alt="Kaysia Agency Logo" 
                className="h-8 w-auto mr-3"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <div className="hidden text-xl font-bold text-white">KA</div>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed">
              Kaysia Agency – 24 saatte hazır siteler.
            </p>
          </div>

          {/* Orta Blok - Hızlı Menü */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hızlı Menü</h3>
            <nav className="space-y-2">
              <Link 
                to="/" 
                className="block text-blue-100 hover:text-white transition-colors text-sm"
              >
                Ana Sayfa
              </Link>
              <Link 
                to="/emlak" 
                className="block text-blue-100 hover:text-white transition-colors text-sm"
              >
                Emlak Teması
              </Link>
              <Link 
                to="/kartvizit" 
                className="block text-blue-100 hover:text-white transition-colors text-sm"
              >
                Kartvizit Teması
              </Link>
              <Link 
                to="/haber" 
                className="block text-blue-100 hover:text-white transition-colors text-sm"
              >
                Haber Teması
              </Link>
              <Link 
                to="/satinal" 
                className="block text-blue-100 hover:text-white transition-colors text-sm"
              >
                Satın Al
              </Link>
            </nav>
          </div>

          {/* Sağ Blok - İletişim */}
          <div>
            <h3 className="text-lg font-semibold mb-4">İletişim</h3>
            <div className="space-y-3">
              {/* Telefon */}
              <a 
                href="tel:+905305616747"
                className="flex items-center gap-3 text-blue-100 hover:text-white transition-colors text-sm"
              >
                <Phone size={16} />
                <span>+90 530 561 6747</span>
              </a>

              {/* E-posta */}
              <a 
                href="mailto:kaysia.store@gmail.com"
                className="flex items-center gap-3 text-blue-100 hover:text-white transition-colors text-sm"
              >
                <Mail size={16} />
                <span>kaysia.store@gmail.com</span>
              </a>

              {/* Sosyal Medya */}
              <div className="flex items-center gap-4 mt-4">
                <a
                  href="https://www.linkedin.com/in/mehmetkaysi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                
                <a
                  href="https://wa.me/905305616747"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center justify-center transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Alt Çizgi - Copyright */}
        <div className="border-t border-blue-800 mt-8 pt-6 text-center">
          <p className="text-blue-100 text-sm">
            © {currentYear} Kaysia Agency – Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
