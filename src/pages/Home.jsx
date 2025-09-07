import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Clock, Shield, Bot, Globe, Zap, Timer, Users, Headphones, Star,
  ArrowRight, CheckCircle
} from 'lucide-react';

function Home() {
  // Scarcity/FOMO rozeti - günlük slot sayısı
  const getScarcityInfo = () => {
    const day = new Date().getDay(); // 0=Pazar, 1=Pazartesi, ...
    const slots = {
      1: 5, // Pazartesi
      2: 4, // Salı
      3: 3, // Çarşamba
      4: 2, // Perşembe
      5: 1, // Cuma
      6: 2, // Cumartesi
      0: 2  // Pazar
    };
    return slots[day] || 2;
  };

  const remainingSlots = getScarcityInfo();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-secondary text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Kaysia Agency
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            24 saatte profesyonel web siteniz hazır
          </p>
          
          {/* Scarcity Badge */}
          <div className="inline-flex items-center bg-orange-100 text-orange-700 rounded-full px-4 py-2 text-sm font-medium mb-8">
            <Timer className="w-4 h-4 mr-2" />
            Bugün kalan: {remainingSlots} slot
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/satinal" 
              className="bg-secondary hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
            >
              Hemen Başla
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/satinal#domain" 
              className="border-2 border-white hover:bg-white hover:text-primary text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-200"
            >
              Alan Adı Sorgula
            </Link>
          </div>
        </div>
      </section>

      {/* Biz Kimiz Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Biz Kimiz?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Kaysia Agency olarak, işletmenizin dijital dünyada güçlü bir varlık göstermesi için 
              hızlı, güvenilir ve AI destekli web çözümleri sunuyoruz.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24 Saat Garantisi</h3>
              <p className="text-gray-600">Web siteniz 24 saat içinde yayında</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Güvenilir Hizmet</h3>
              <p className="text-gray-600">SSL sertifikası ve güvenlik önlemleri</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Bot className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Destekli</h3>
              <p className="text-gray-600">Yapay zeka ile içerik optimizasyonu</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vizyon & Misyon */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 border">
              <div className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center mb-4">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Vizyonumuz</h3>
              <p className="text-gray-600">
                Türkiye'deki her işletmenin dijital dünyada güçlü bir varlık göstermesi ve 
                müşterilerine en iyi hizmeti sunabilmesi için teknolojiyi erişilebilir kılmak.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 border">
              <div className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Misyonumuz</h3>
              <p className="text-gray-600">
                Hızlı, kaliteli ve uygun fiyatlı web çözümleri ile işletmelerin dijital 
                dönüşüm süreçlerini hızlandırmak ve başarılarına katkıda bulunmak.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Temalar Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Temalar
            </h2>
            <p className="text-lg text-gray-600">
              İhtiyacınıza uygun hazır temalarımızı keşfedin
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link 
              to="/emlak" 
              target="_blank"
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">🏠</div>
                  <h3 className="text-xl font-semibold">Emlak</h3>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-secondary transition-colors">
                  Emlak Teması
                </h3>
                <p className="text-gray-600">
                  İlan yönetimi, arama filtreleri ve modern tasarım
                </p>
              </div>
            </Link>
            
            <Link 
              to="/kartvizit" 
              target="_blank"
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">💼</div>
                  <h3 className="text-xl font-semibold">Kartvizit</h3>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-secondary transition-colors">
                  Kartvizit Teması
                </h3>
                <p className="text-gray-600">
                  24 saatte hazır kişisel kartvizit siteniz
                </p>
              </div>
            </Link>
            
            <Link 
              to="/haber" 
              target="_blank"
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">📰</div>
                  <h3 className="text-xl font-semibold">Haberler</h3>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-secondary transition-colors">
                  Haber Teması
                </h3>
                <p className="text-gray-600">
                  Blog ve haber yönetimi için profesyonel tema
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Neden Biz Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Neden Biz?
            </h2>
            <p className="text-lg text-gray-600">
              Farkımızı yaratan özelliklerimiz
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-6">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-3">
                <Timer className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-1">Hızlı Teslimat</h3>
              <p className="text-sm text-gray-600">24 saat garantisi</p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-1">Güvenli</h3>
              <p className="text-sm text-gray-600">SSL ve güvenlik</p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-3">
                <Bot className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-1">AI Destekli</h3>
              <p className="text-sm text-gray-600">Akıllı optimizasyon</p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-1">Uzman Ekip</h3>
              <p className="text-sm text-gray-600">Deneyimli geliştiriciler</p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-3">
                <Headphones className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-1">7/24 Destek</h3>
              <p className="text-sm text-gray-600">Sürekli yardım</p>
            </div>
          </div>
        </div>
      </section>

      {/* Yorumlar Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Müşteri Yorumları
            </h2>
            <p className="text-lg text-gray-600">
              Müşterilerimizin deneyimleri
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "24 saatte siteniz hazır olmuş, gerçekten hızlı ve kaliteli hizmet. 
                Müşteri desteği de çok iyiydi."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <h4 className="font-semibold">Ahmet Yılmaz</h4>
                  <p className="text-sm text-gray-500">Emlak Danışmanı</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Kartvizit sitem çok profesyonel görünüyor. Fiyat performans açısından 
                çok memnun kaldım."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <h4 className="font-semibold">Fatma Demir</h4>
                  <p className="text-sm text-gray-500">Pazarlama Uzmanı</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "AI destekli içerik önerileri çok faydalı oldu. Sitemin SEO performansı 
                çok iyi."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <h4 className="font-semibold">Mehmet Kaya</h4>
                  <p className="text-sm text-gray-500">İşletme Sahibi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Hemen Başlayın
          </h2>
          <p className="text-xl mb-8 opacity-90">
            24 saatte profesyonel web siteniz hazır olsun
          </p>
          <Link 
            to="/satinal" 
            className="bg-secondary hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-200 inline-flex items-center"
          >
            <CheckCircle className="w-5 h-5 mr-2" />
            Hemen Başla
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
