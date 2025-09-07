import React, { useState } from 'react';
import SiparisOzeti from '../components/SiparisOzeti';

function Satinal() {
  const [formData, setFormData] = useState({
    alanAdi: '',
    tld: '.com',
    yil: '1',
    paket: 'kartvizit',
    notlar: ''
  });

  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitStatus('success');
    
    // Demo için alert
    alert('Talebiniz alındı! (Demo)');
  };

  const paketler = [
    {
      id: 'kartvizit',
      ad: 'Kartvizit',
      aciklama: '24 saat garantisi',
      fiyat: 299
    },
    {
      id: 'orta',
      ad: 'Orta Paket',
      aciklama: 'Temel özellikler',
      fiyat: 599
    },
    {
      id: 'profesyonel',
      ad: 'Profesyonel',
      aciklama: 'Gelişmiş özellikler',
      fiyat: 999
    }
  ];

  if (submitStatus === 'success') {
    return (
      <div className="min-h-screen bg-gray-50 py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="rounded-2xl border shadow-sm p-6 bg-white text-center">
            <div className="text-6xl mb-4">✅</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Talebiniz Alındı!</h2>
            <p className="text-gray-600">En kısa sürede sizinle iletişime geçeceğiz.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Web Sitenizi Satın Alın
          </h1>
          <p className="text-gray-600">
            Alan adınızı seçin, paketinizi belirleyin ve 24 saatte siteniz hazır!
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-3 gap-8">
          {/* Sol taraf - Form */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border shadow-sm p-6 bg-white">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Alan Adı */}
                <div>
                  <label htmlFor="alanAdi" className="block text-sm font-medium text-gray-700 mb-2">
                    Alan Adı
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      id="alanAdi"
                      name="alanAdi"
                      value={formData.alanAdi}
                      onChange={handleInputChange}
                      placeholder="ornek"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                    <select
                      name="tld"
                      value={formData.tld}
                      onChange={handleInputChange}
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      <option value=".com">.com</option>
                      <option value=".com.tr">.com.tr</option>
                    </select>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    Alan adı sorgulama özelliği yakında eklenecek
                  </p>
                </div>

                {/* Yıl */}
                <div>
                  <label htmlFor="yil" className="block text-sm font-medium text-gray-700 mb-2">
                    Süre
                  </label>
                  <select
                    id="yil"
                    name="yil"
                    value={formData.yil}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="1">1 Yıl</option>
                    <option value="2">2 Yıl</option>
                    <option value="3">3 Yıl</option>
                    <option value="4">4 Yıl</option>
                  </select>
                </div>

                {/* Paket Seçimi */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Paket Seçimi
                  </label>
                  <div className="space-y-3">
                    {paketler.map((paket) => (
                      <label key={paket.id} className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-orange-300 cursor-pointer">
                        <input
                          type="radio"
                          name="paket"
                          value={paket.id}
                          checked={formData.paket === paket.id}
                          onChange={handleInputChange}
                          className="mr-3 text-orange-500 focus:ring-orange-500"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-center">
                            <div>
                              <h3 className="font-medium text-gray-900">{paket.ad}</h3>
                              <p className="text-sm text-gray-500">{paket.aciklama}</p>
                            </div>
                            <div className="text-lg font-bold text-orange-500">
                              {paket.fiyat}₺
                            </div>
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Notlar */}
                <div>
                  <label htmlFor="notlar" className="block text-sm font-medium text-gray-700 mb-2">
                    Proje Notları
                  </label>
                  <textarea
                    id="notlar"
                    name="notlar"
                    value={formData.notlar}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Sitenizde olmasını istediğiniz özellikler, renk tercihleri, içerik detayları..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl px-6 py-3 transition-colors duration-200"
                  >
                    Siparişi Tamamla
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Sağ taraf - Sipariş Özeti */}
          <div className="lg:col-span-1">
            <SiparisOzeti />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Satinal;