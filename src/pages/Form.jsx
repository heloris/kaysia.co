import React, { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    adSoyad: '',
    dogumTarihi: '',
    sahisSirketi: '',
    motor: '',
    p1Belgesi: '',
    deneyim1: '',
    deneyim2: '',
    telefon: '',
    smsIzni: false,
    aramaIzni: false,
    email: '',
    emailIzni: false,
    neredenDuydunuz: '',
    kvkkOnay: false
  });

  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.kvkkOnay) {
      alert('KVKK onayı gereklidir.');
      return;
    }

    try {
      const response = await fetch('https://formspree.io/f/mkgvpznl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          adSoyad: '',
          dogumTarihi: '',
          sahisSirketi: '',
          motor: '',
          p1Belgesi: '',
          deneyim1: '',
          deneyim2: '',
          telefon: '',
          smsIzni: false,
          aramaIzni: false,
          email: '',
          emailIzni: false,
          neredenDuydunuz: '',
          kvkkOnay: false
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="min-h-screen bg-yellow-50 py-10">
        <div className="max-w-3xl mx-auto px-4">
          <div className="rounded-2xl border shadow-sm p-6 bg-white text-center">
            <div className="text-6xl mb-4">✅</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Başvurunuz Alındı!</h2>
            <p className="text-gray-600">Teşekkürler, en kısa sürede dönüş yapacağız.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-yellow-50 py-10">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-yellow-400 text-gray-900 px-6 py-3 rounded-xl inline-block mb-4">
            Kurye's ile Götür – Ön Başvuru Formu
          </h1>
          <p className="text-gray-600">
            Kurye olarak çalışmak için başvuru formunu doldurun
          </p>
        </div>

        <div className="rounded-2xl border shadow-sm p-6 bg-white">
          {submitStatus === 'error' && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
              Gönderim sırasında bir hata oluştu. Lütfen tekrar deneyin.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="md:grid md:grid-cols-2 gap-4">
              {/* Ad Soyad */}
              <div>
                <label htmlFor="adSoyad" className="block text-sm font-medium text-gray-700 mb-1">
                  Ad Soyad *
                </label>
                <input
                  type="text"
                  id="adSoyad"
                  name="adSoyad"
                  value={formData.adSoyad}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                />
              </div>

              {/* Doğum Tarihi */}
              <div>
                <label htmlFor="dogumTarihi" className="block text-sm font-medium text-gray-700 mb-1">
                  Doğum Tarihi *
                </label>
                <input
                  type="date"
                  id="dogumTarihi"
                  name="dogumTarihi"
                  value={formData.dogumTarihi}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                />
              </div>

              {/* Şahıs Şirketi */}
              <div>
                <label htmlFor="sahisSirketi" className="block text-sm font-medium text-gray-700 mb-1">
                  Şahıs Şirketi *
                </label>
                <select
                  id="sahisSirketi"
                  name="sahisSirketi"
                  value={formData.sahisSirketi}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                >
                  <option value="">Seçiniz</option>
                  <option value="var">Var</option>
                  <option value="yok">Yok</option>
                </select>
              </div>

              {/* Motor */}
              <div>
                <label htmlFor="motor" className="block text-sm font-medium text-gray-700 mb-1">
                  Motor *
                </label>
                <select
                  id="motor"
                  name="motor"
                  value={formData.motor}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                >
                  <option value="">Seçiniz</option>
                  <option value="var">Var</option>
                  <option value="yok">Yok</option>
                </select>
              </div>

              {/* P1 Belgesi */}
              <div>
                <label htmlFor="p1Belgesi" className="block text-sm font-medium text-gray-700 mb-1">
                  P1 Belgesi *
                </label>
                <select
                  id="p1Belgesi"
                  name="p1Belgesi"
                  value={formData.p1Belgesi}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                >
                  <option value="">Seçiniz</option>
                  <option value="var">Var</option>
                  <option value="yok">Yok</option>
                </select>
              </div>

              {/* Deneyim 1 */}
              <div>
                <label htmlFor="deneyim1" className="block text-sm font-medium text-gray-700 mb-1">
                  Deneyim 1 *
                </label>
                <input
                  type="text"
                  id="deneyim1"
                  name="deneyim1"
                  value={formData.deneyim1}
                  onChange={handleInputChange}
                  required
                  placeholder="Örn: 2 yıl kurye deneyimi"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                />
              </div>

              {/* Deneyim 2 */}
              <div>
                <label htmlFor="deneyim2" className="block text-sm font-medium text-gray-700 mb-1">
                  Deneyim 2
                </label>
                <input
                  type="text"
                  id="deneyim2"
                  name="deneyim2"
                  value={formData.deneyim2}
                  onChange={handleInputChange}
                  placeholder="Ek deneyimleriniz"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                />
              </div>

              {/* Telefon */}
              <div>
                <label htmlFor="telefon" className="block text-sm font-medium text-gray-700 mb-1">
                  Telefon *
                </label>
                <input
                  type="tel"
                  id="telefon"
                  name="telefon"
                  value={formData.telefon}
                  onChange={handleInputChange}
                  required
                  placeholder="+90 5XX XXX XX XX"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                />
                
                <div className="mt-2 space-y-1">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="smsIzni"
                      checked={formData.smsIzni}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    <span className="text-sm text-gray-600">SMS izni</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="aramaIzni"
                      checked={formData.aramaIzni}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    <span className="text-sm text-gray-600">Arama izni</span>
                  </label>
                </div>
              </div>

              {/* E-posta */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-posta *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                />
                
                <div className="mt-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="emailIzni"
                      checked={formData.emailIzni}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    <span className="text-sm text-gray-600">E-posta izni</span>
                  </label>
                </div>
              </div>

              {/* Nereden duydunuz */}
              <div className="md:col-span-2">
                <label htmlFor="neredenDuydunuz" className="block text-sm font-medium text-gray-700 mb-1">
                  Nereden duydunuz? *
                </label>
                <select
                  id="neredenDuydunuz"
                  name="neredenDuydunuz"
                  value={formData.neredenDuydunuz}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                >
                  <option value="">Seçiniz</option>
                  <option value="google">Google</option>
                  <option value="instagram">Instagram</option>
                  <option value="referans">Referans</option>
                  <option value="diger">Diğer</option>
                </select>
              </div>
            </div>

            {/* KVKK Onayı */}
            <div className="border-t pt-6">
              <label className="flex items-start">
                <input
                  type="checkbox"
                  name="kvkkOnay"
                  checked={formData.kvkkOnay}
                  onChange={handleInputChange}
                  required
                  className="mr-3 mt-1"
                />
                <span className="text-sm text-gray-700">
                  KVKK Aydınlatma Metni'ni okudum ve kabul ediyorum. *
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <button
                type="submit"
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-xl px-8 py-3 transition-colors duration-200"
              >
                Başvuruyu Gönder
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;