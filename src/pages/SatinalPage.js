import React, { useState } from 'react';
import { 
  CheckCircle, 
  XCircle, 
  Gift,
  X
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function SatinalPage() {
  const [domain, setDomain] = useState('');
  const [domainStatus, setDomainStatus] = useState(null);
  const [isCheckingDomain, setIsCheckingDomain] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedDuration, setSelectedDuration] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    notes: '',
    kvkkAccepted: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [showKvkkModal, setShowKvkkModal] = useState(false);

  // Scarcity banner mesajları
  const getScarcityMessage = () => {
    const day = new Date().getDay();
    const messages = {
      1: { count: 5, message: "⏳ Bugün sadece 5 proje kabul ediyoruz." },
      2: { count: 4, message: "⏳ Bugün sadece 4 proje kabul ediyoruz." },
      3: { count: 3, message: "⏳ Bugün sadece 3 proje kabul ediyoruz." },
      4: { count: 1, message: "⏳ Bugün sadece 1 proje kabul ediyoruz." },
      5: { count: 1, message: "⏳ Bugün sadece 1 proje kabul ediyoruz." },
      6: { count: 2, message: "⏳ Bugün sadece 2 proje kabul ediyoruz." },
      0: { count: 2, message: "⏳ Bugün sadece 2 proje kabul ediyoruz." }
    };
    return messages[day];
  };

  // Paket fiyatları (hafta içi / hafta sonu)
  const packages = {
    kartvizit: {
      name: 'Kartvizit',
      description: 'Tek sayfa, 24 saatte hazır',
      weekdayPrice: 4000,
      weekendPrice: 3000,
      badge: '⏱️ 24 saatte teslim',
      features: ['Tek sayfa tasarım', 'Mobil uyumlu', '24 saat teslimat', 'Temel SEO']
    },
    profesyonel: {
      name: 'Profesyonel',
      description: 'Blog, form, çoklu sayfa',
      weekdayPrice: 6000,
      weekendPrice: 4000,
      badge: '⭐ En çok tercih edilen',
      features: ['Çoklu sayfa', 'Blog sistemi', 'İletişim formu', 'Gelişmiş SEO', 'Sosyal medya entegrasyonu']
    },
    premium: {
      name: 'Premium',
      description: 'E-ticaret, entegrasyon',
      weekdayPrice: 9000,
      weekendPrice: 7000,
      badge: '',
      features: ['E-ticaret sistemi', 'Ödeme entegrasyonu', 'Stok yönetimi', 'Müşteri paneli', 'API entegrasyonu']
    }
  };

  // Hafta içi/sonu kontrolü
  const isWeekend = () => {
    const day = new Date().getDay();
    return day === 0 || day === 6; // Pazar veya Cumartesi
  };

  // Alan adı kontrolü
  const checkDomain = async () => {
    if (!domain.trim()) return;
    
    setIsCheckingDomain(true);
    try {
      const response = await fetch(
        `https://domains-api.p.rapidapi.com/tlds/com?domain=${encodeURIComponent(domain)}`,
        {
          method: 'GET',
          headers: {
            'x-rapidapi-host': 'domains-api.p.rapidapi.com',
            'x-rapidapi-key': '27da5197d8msh04ded78a42048d9p126554jsn8ddee442ba92'
          }
        }
      );
      
      const data = await response.json();
      setDomainStatus(data.available);
    } catch (error) {
      console.error('Domain check error:', error);
      setDomainStatus(false);
    } finally {
      setIsCheckingDomain(false);
    }
  };

  // Toplam fiyat hesaplama
  const calculateTotal = () => {
    if (!selectedPackage) return 0;
    
    const packageData = packages[selectedPackage];
    const basePrice = isWeekend() ? packageData.weekendPrice : packageData.weekdayPrice;
    const extraYears = selectedDuration - 1;
    const domainCost = extraYears * 1250;
    
    return basePrice + domainCost;
  };

  // Form gönderimi
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.kvkkAccepted) {
      alert('KVKK onayını vermeniz gerekmektedir.');
      return;
    }

    setIsSubmitting(true);
    
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('company', formData.company);
    formDataToSend.append('domain', domain);
    formDataToSend.append('package', selectedPackage ? packages[selectedPackage].name : '');
    formDataToSend.append('duration', selectedDuration);
    formDataToSend.append('total', calculateTotal());
    formDataToSend.append('notes', formData.notes);

    try {
      const response = await fetch('https://formspree.io/f/xovnyepb', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({
          name: '',
          phone: '',
          email: '',
          company: '',
          notes: '',
          kvkkAccepted: false
        });
        setDomain('');
        setSelectedPackage(null);
        setSelectedDuration(1);
        setDomainStatus(null);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };


  const scarcityInfo = getScarcityMessage();

  return (
    <div className="min-h-screen bg-white">
      {/* Scarcity Banner */}
      <div className="bg-secondary text-white py-2 text-center font-semibold">
        {scarcityInfo.message}
      </div>

      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Başlık */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Web Sitenizi Hemen Başlatın
          </h1>
          <p className="text-xl text-gray-600">
            24 saatte profesyonel web siteniz hazır!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sol Kolon - Alan Adı ve Paket Seçimi */}
          <div className="lg:col-span-2 space-y-8">
            {/* Alan Adı Seçimi */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Alan Adınızı Seçin</h2>
              
              <div className="flex gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Alan Adınızı Girin"
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                />
                <button
                  onClick={checkDomain}
                  disabled={isCheckingDomain || !domain.trim()}
                  className="bg-secondary hover:bg-orange-600 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  {isCheckingDomain ? 'Kontrol Ediliyor...' : 'Kontrol Et'}
                </button>
              </div>

              {/* Domain Status */}
              {domainStatus !== null && (
                <div className={`flex items-center gap-2 p-3 rounded-lg ${
                  domainStatus ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                }`}>
                  {domainStatus ? <CheckCircle size={20} /> : <XCircle size={20} />}
                  <span>
                    {domainStatus ? '✅ Alan adı uygun' : '❌ Kullanımda'}
                  </span>
                </div>
              )}

              {/* Süre Seçimi */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Alan Adı Süresi
                </label>
                <select
                  value={selectedDuration}
                  onChange={(e) => setSelectedDuration(parseInt(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                >
                  <option value={1}>1 yıl (dahil)</option>
                  <option value={2}>2 yıl (+1.250 TL)</option>
                  <option value={3}>3 yıl (+2.500 TL) ⭐ Önerilen</option>
                  <option value={4}>4 yıl (+3.750 TL)</option>
                </select>
              </div>
            </div>

            {/* Paket Seçimi */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Paketinizi Seçin</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {Object.entries(packages).map(([key, pkg]) => (
                  <div
                    key={key}
                    className={`rounded-2xl shadow-lg p-6 cursor-pointer transition-all duration-300 hover:scale-105 ${
                      selectedPackage === key 
                        ? 'border-2 border-secondary bg-orange-50' 
                        : 'border border-gray-200 hover:shadow-xl'
                    }`}
                    onClick={() => setSelectedPackage(key)}
                  >
                    <div className="text-center mb-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                      {pkg.badge && (
                        <span className="inline-block bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold mb-2">
                          {pkg.badge}
                        </span>
                      )}
                      <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>
                    </div>

                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-primary">
                        {isWeekend() ? pkg.weekendPrice.toLocaleString() : pkg.weekdayPrice.toLocaleString()} TL
                      </div>
                      <div className="text-sm text-gray-500">
                        {isWeekend() ? 'Hafta Sonu Fiyatı' : 'Hafta İçi Fiyatı'}
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {pkg.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <button
                      className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                        selectedPackage === key
                          ? 'bg-secondary text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {selectedPackage === key ? 'Seçildi' : 'Bu Paketi Seç'}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Kampanya Kutusu */}
            <div className="bg-gray-100 rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <Gift className="text-secondary" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-900">Özel Kampanya!</h3>
                  <p className="text-gray-600">
                    .com alan adı satın alan müşterilerimize .com.tr alan adı ücretsiz!
                    <br />
                    <span className="text-sm text-gray-500">(Vergi numarası şarttır.)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sağ Kolon - Sipariş Özeti ve Form */}
          <div className="space-y-8">
            {/* Sipariş Özeti */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Sipariş Özeti</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Domain:</span>
                  <span className="font-semibold">{domain || 'Seçilmedi'}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Süre:</span>
                  <span className="font-semibold">{selectedDuration} yıl</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Paket:</span>
                  <span className="font-semibold">
                    {selectedPackage ? packages[selectedPackage].name : 'Seçilmedi'}
                  </span>
                </div>
                
                {selectedPackage && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Paket Fiyatı:</span>
                    <span className="font-semibold">
                      {isWeekend() 
                        ? packages[selectedPackage].weekendPrice.toLocaleString() 
                        : packages[selectedPackage].weekdayPrice.toLocaleString()
                      } TL
                    </span>
                  </div>
                )}
                
                {selectedDuration > 1 && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Ekstra Yıllar:</span>
                    <span className="font-semibold">
                      +{((selectedDuration - 1) * 1250).toLocaleString()} TL
                    </span>
                  </div>
                )}
                
                <hr className="border-gray-200" />
                
                <div className="flex justify-between text-lg font-bold">
                  <span>Toplam:</span>
                  <span className="text-secondary">
                    {calculateTotal().toLocaleString()} TL
                  </span>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Sipariş Bilgileri</h2>
              
              {submitSuccess ? (
                <div className="text-center py-8">
                  <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">✅ Teşekkürler!</h3>
                  <p className="text-gray-600">
                    Aynı gün içinde WhatsApp / Telefon ile dönüş yapacağız.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Ad Soyad *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      E-posta *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Şirket / Vergi No
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Domain
                    </label>
                    <input
                      type="text"
                      value={domain}
                      readOnly
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Paket
                    </label>
                    <input
                      type="text"
                      value={selectedPackage ? packages[selectedPackage].name : ''}
                      readOnly
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Süre
                    </label>
                    <input
                      type="text"
                      value={`${selectedDuration} yıl`}
                      readOnly
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Proje Notunuz
                    </label>
                    <textarea
                      rows={4}
                      value={formData.notes}
                      onChange={(e) => setFormData({...formData, notes: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                      placeholder="Projeniz hakkında özel isteklerinizi yazabilirsiniz..."
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="kvkk"
                      checked={formData.kvkkAccepted}
                      onChange={(e) => setFormData({...formData, kvkkAccepted: e.target.checked})}
                      className="mt-1"
                    />
                    <label htmlFor="kvkk" className="text-sm text-gray-600">
                      <button
                        type="button"
                        onClick={() => setShowKvkkModal(true)}
                        className="text-secondary hover:underline"
                      >
                        KVKK
                      </button> politikalarını okudum ve kabul ediyorum. *
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || !selectedPackage || !domain || domainStatus === false}
                    className="w-full bg-secondary hover:bg-orange-600 disabled:bg-gray-400 text-white py-4 rounded-lg font-semibold text-lg transition-colors"
                  >
                    {isSubmitting ? 'Gönderiliyor...' : `Siparişi Tamamla - ${calculateTotal().toLocaleString()} TL`}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* KVKK Modal */}
      {showKvkkModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-gray-900">KVKK Aydınlatma Metni</h3>
                <button
                  onClick={() => setShowKvkkModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="prose max-w-none text-gray-600">
                <p>
                  Kaysia Agency olarak, kişisel verilerinizin korunması konusunda hassasiyetle yaklaşıyoruz. 
                  Bu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında 
                  kişisel verilerinizin işlenmesi hakkında sizi bilgilendirmek amacıyla hazırlanmıştır.
                </p>
                
                <h4>Toplanan Kişisel Veriler</h4>
                <p>
                  Web sitesi hizmetlerimiz kapsamında aşağıdaki kişisel verilerinizi topluyoruz:
                </p>
                <ul>
                  <li>Ad, soyad</li>
                  <li>E-posta adresi</li>
                  <li>Telefon numarası</li>
                  <li>Şirket bilgileri ve vergi numarası</li>
                  <li>Proje notları ve özel istekler</li>
                </ul>
                
                <h4>Verilerin İşlenme Amacı</h4>
                <p>
                  Kişisel verileriniz, web sitesi hizmetlerinin sunulması, müşteri iletişimi, 
                  proje takibi ve yasal yükümlülüklerin yerine getirilmesi amacıyla işlenmektedir.
                </p>
                
                <h4>Veri Güvenliği</h4>
                <p>
                  Kişisel verileriniz, teknik ve idari güvenlik önlemleri ile korunmakta olup, 
                  üçüncü kişilerle paylaşılmamaktadır.
                </p>
                
                <h4>Haklarınız</h4>
                <p>
                  KVKK kapsamında kişisel verilerinizle ilgili olarak başvuru, bilgi talep etme, 
                  düzeltme, silme ve işleme itiraz etme haklarınız bulunmaktadır.
                </p>
              </div>
              
              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setShowKvkkModal(false)}
                  className="bg-secondary text-white px-6 py-2 rounded-lg font-semibold"
                >
                  Anladım
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SatinalPage;
