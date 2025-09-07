import React, { useState, useEffect } from 'react';
import { 
  Search, 
  MapPin, 
  DollarSign, 
  Bed, 
  Shield, 
  Briefcase, 
  Zap,
  Calculator,
  MessageCircle,
  RotateCcw
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DomainModal from '../components/DomainModal';
import ListingCard from '../components/ListingCard';
import GalleryModal from '../components/GalleryModal';
import { getStoredDomain, setStoredDomain, removeStoredDomain, sanitizeDomain } from '../utils/domain';
import { getJson } from '../utils/fetcher';

const DATA_URL = 'https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLg9E89A6Kojkw4UjPGeXFz_Sd4kbiJQbbnVTEa8iGPqtlwmtioGHs0tumABgnMOVRcckw2n2tIAYBenW7pE2CxAUhg7tfmyA5Shqm_ohgXdCMFHRPYcv-5w4eneh3Nk0NxYCdu78d5Z5z-AsSqIaJ12iBtvPL8EmTjWXHWddbuNXRtZils0A3HEztAPGt_H7HvgsxKpDqenkCIzxf8f2bBLcbmUTnkDZ1xhZY5oB3WUL6h2ib1a7AniNctLUWq_b2_oDS9d8HcB95QoikMcHfhIb_BPxQ&lib=MaPdlmLILRUW8FAJMsAB-mV4Ifv_FrRG6';

function EmlakPage() {
  const [domain, setDomain] = useState('');
  const [showDomainModal, setShowDomainModal] = useState(false);
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedListing, setSelectedListing] = useState(null);
  const [showGallery, setShowGallery] = useState(false);
  const [searchForm, setSearchForm] = useState({
    konum: '',
    fiyatMin: '',
    fiyatMax: '',
    oda: ''
  });
  const [calculationPrice, setCalculationPrice] = useState('');

  // Sayfa yüklendiğinde domain kontrolü
  useEffect(() => {
    const storedDomain = getStoredDomain();
    if (storedDomain) {
      setDomain(storedDomain);
      updatePageTitle(storedDomain);
    } else {
      setShowDomainModal(true);
    }
    
    // Veri yükle
    loadListings();
  }, []);

  // Domain değiştiğinde sayfa başlığını güncelle
  const updatePageTitle = (newDomain) => {
    document.title = `${newDomain} – Emlak Demo by Kaysia`;
    
    // Open Graph meta tag'lerini güncelle
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', `${newDomain} – Emlak Demo by Kaysia`);
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:title');
      meta.setAttribute('content', `${newDomain} – Emlak Demo by Kaysia`);
      document.head.appendChild(meta);
    }
  };

  // Domain modal onayı
  const handleDomainConfirm = (inputDomain) => {
    const sanitizedDomain = sanitizeDomain(inputDomain);
    setStoredDomain(sanitizedDomain);
    setDomain(sanitizedDomain);
    setShowDomainModal(false);
    updatePageTitle(sanitizedDomain);
  };

  // Domain sıfırlama
  const handleDomainReset = () => {
    if (window.confirm('Alan adını sıfırlamak istediğinizden emin misiniz?')) {
      removeStoredDomain();
      window.location.reload();
    }
  };

  // Veri yükleme
  const loadListings = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getJson(DATA_URL);
      
      // Veriyi array'e çevir (eğer object ise)
      const listingsArray = Array.isArray(data) ? data : Object.values(data);
      setListings(listingsArray);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Arama formu gönderimi
  const handleSearch = (e) => {
    e.preventDefault();
    const element = document.getElementById('one-cikan-ilanlar');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Kira/Taksit hesaplama
  const calculateMonthly = (price) => {
    if (!price || isNaN(price)) return 0;
    return Math.round(price / 120);
  };

  // İlanları filtrele (öne çıkanlar ve diğerleri)
  const featuredListings = listings.filter(ilan => ilan.one_cikan === true);
  const otherListings = listings.filter(ilan => ilan.one_cikan !== true);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Domain Modal */}
      <DomainModal
        open={showDomainModal}
        initial=""
        onConfirm={handleDomainConfirm}
      />

      <Header />

      {/* Domain Reset Link */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex justify-end">
            <button
              onClick={handleDomainReset}
              className="text-sm text-gray-500 hover:text-secondary transition-colors flex items-center gap-1"
            >
              <RotateCcw size={14} />
              Alan adını sıfırla
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {domain} ile hayalinizdeki evi bulun
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Profesyonel emlak danışmanlığı ile doğru karar verin
          </p>
        </div>
      </section>

      {/* Arama Formu */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Konum
              </label>
              <div className="relative">
                <MapPin size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Şehir, İlçe"
                  value={searchForm.konum}
                  onChange={(e) => setSearchForm({...searchForm, konum: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Min Fiyat
              </label>
              <div className="relative">
                <DollarSign size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="number"
                  placeholder="Min TL"
                  value={searchForm.fiyatMin}
                  onChange={(e) => setSearchForm({...searchForm, fiyatMin: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Max Fiyat
              </label>
              <div className="relative">
                <DollarSign size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="number"
                  placeholder="Max TL"
                  value={searchForm.fiyatMax}
                  onChange={(e) => setSearchForm({...searchForm, fiyatMax: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Oda Sayısı
              </label>
              <div className="relative">
                <Bed size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <select
                  value={searchForm.oda}
                  onChange={(e) => setSearchForm({...searchForm, oda: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                >
                  <option value="">Tümü</option>
                  <option value="1+0">1+0</option>
                  <option value="1+1">1+1</option>
                  <option value="2+1">2+1</option>
                  <option value="3+1">3+1</option>
                  <option value="4+1">4+1</option>
                  <option value="5+1">5+1</option>
                </select>
              </div>
            </div>

            <div className="md:col-span-4 flex justify-center">
              <button
                type="submit"
                className="bg-secondary hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
              >
                <Search size={20} />
                Ara
              </button>
            </div>
          </form>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Öne Çıkan İlanlar */}
        {featuredListings.length > 0 && (
          <section id="one-cikan-ilanlar" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              ⭐ Öne Çıkan İlanlar
            </h2>
            
            {loading ? (
              <div className="text-center py-12">
                <div className="text-lg text-gray-600">İlanlar yükleniyor…</div>
              </div>
            ) : error ? (
              <div className="text-center py-12">
                <div className="text-lg text-red-600 mb-4">Şu an ilanlar yüklenemiyor.</div>
                <button
                  onClick={loadListings}
                  className="bg-secondary text-white px-6 py-2 rounded-lg font-semibold"
                >
                  Tekrar dene
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredListings.map((ilan) => (
                  <ListingCard
                    key={ilan.id}
                    ilan={ilan}
                    onDetailClick={(listing) => {
                      setSelectedListing(listing);
                      setShowGallery(true);
                    }}
                  />
                ))}
              </div>
            )}
          </section>
        )}

        {/* Diğer İlanlar */}
        {otherListings.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Diğer İlanlar
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherListings.map((ilan) => (
                <ListingCard
                  key={ilan.id}
                  ilan={ilan}
                  onDetailClick={(listing) => {
                    setSelectedListing(listing);
                    setShowGallery(true);
                  }}
                />
              ))}
            </div>
          </section>
        )}

        {/* Kurumsal Bölüm */}
        <section className="py-16 bg-white rounded-2xl shadow-lg mb-16">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Neden Bizi Tercih Etmelisiniz?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Güvenilir Hizmet</h3>
                <p className="text-gray-600">Yılların deneyimi ile güvenilir emlak danışmanlığı</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Profesyonel Ekip</h3>
                <p className="text-gray-600">Uzman kadromuz ile en doğru yatırım kararları</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Hızlı Çözüm</h3>
                <p className="text-gray-600">7/24 destek ile hızlı ve etkili çözümler</p>
              </div>
            </div>
          </div>
        </section>

        {/* Danışmanlar */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Uzman Danışmanlarımız
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Ahmet Yılmaz', expertise: 'Konut Satış', phone: '+90 555 123 4567' },
              { name: 'Fatma Demir', expertise: 'Kira Yönetimi', phone: '+90 555 234 5678' },
              { name: 'Mehmet Kaya', expertise: 'Ticari Emlak', phone: '+90 555 345 6789' }
            ].map((danisman, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-600">
                    {danisman.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{danisman.name}</h3>
                <p className="text-secondary font-medium mb-4">{danisman.expertise}</p>
                <a
                  href={`https://wa.me/${danisman.phone.replace(/\s/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Kira/Taksit Hesap */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Kira/Taksit Hesaplayıcı
          </h2>
          
          <div className="max-w-md mx-auto">
            <div className="flex gap-4 mb-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Fiyat (TL)
                </label>
                <input
                  type="number"
                  placeholder="Örn: 500000"
                  value={calculationPrice}
                  onChange={(e) => setCalculationPrice(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                />
              </div>
              <div className="flex items-end">
                <button
                  onClick={() => setCalculationPrice('')}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-3 rounded-lg font-semibold transition-colors"
                >
                  <Calculator size={20} />
                </button>
              </div>
            </div>
            
            {calculationPrice && (
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-secondary mb-2">
                  {calculateMonthly(calculationPrice).toLocaleString()} TL/ay
                </div>
                <p className="text-sm text-gray-600">
                  Tahmini aylık ödeme (120 taksit)
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  Demo amaçlıdır
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Şeridi */}
        <section className="bg-gradient-to-r from-secondary to-orange-600 text-white rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Kendi emlak sitenizi 24 saatte yayına almak ister misiniz?
          </h2>
          <p className="text-xl mb-6 text-orange-100">
            Profesyonel emlak siteniz ile daha fazla müşteriye ulaşın
          </p>
          <a
            href={`/satinal?paket=profesyonel&domain=${domain}`}
            className="bg-white text-secondary hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-colors inline-block"
          >
            Hemen Başla
          </a>
        </section>
      </main>

      <Footer />

      {/* Gallery Modal */}
      <GalleryModal
        open={showGallery}
        onClose={() => setShowGallery(false)}
        ilan={selectedListing}
      />
    </div>
  );
}

export default EmlakPage;
