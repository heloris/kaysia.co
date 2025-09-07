import React, { useState, useEffect } from 'react';
import { CheckCircle, AlertCircle, X } from 'lucide-react';

function FormPage() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [showKvkkModal, setShowKvkkModal] = useState(false);

  // SEO meta tags - noindex, nofollow
  useEffect(() => {
    // Add noindex, nofollow meta
    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (!robotsMeta) {
      robotsMeta = document.createElement('meta');
      robotsMeta.name = 'robots';
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.content = 'noindex, nofollow';

    // Add canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = 'https://kaysia.co/form';

    // Update page title
    document.title = 'Kurye\'s ile Götür Ön Başvuru Formu – Kaysia Agency';
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    
    try {
      const res = await fetch(form.action, { 
        method: 'POST', 
        body: data, 
        headers: { 'Accept': 'application/json' } 
      });
      const ok = res.ok;
      const json = await res.json().catch(() => ({}));
      
      if (ok) {
        setSuccess(true);
        form.reset();
      } else {
        setError(json?.error || 'Gönderim sırasında bir sorun oluştu.');
      }
    } catch (err) {
      setError('Bağlantı hatası. Lütfen tekrar deneyin.');
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-yellow-400 flex items-center justify-center p-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              ✅ Başvurunuz alınmıştır
            </h1>
            <p className="text-gray-600">
              En kısa sürede dönüş yapacağız.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-yellow-400">
      <div className="max-w-2xl mx-auto p-6 md:p-10">
        {/* Götür Logo */}
        <div className="text-center mb-8">
          <img 
            src="/gotur-logo.png" 
            alt="Götür Logo" 
            className="h-12 w-auto mx-auto mb-4"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <div className="hidden text-2xl font-bold text-black">GÖTÜR</div>
        </div>

        {/* Başlık */}
        <h1 className="text-2xl md:text-3xl font-bold text-center text-black mb-8">
          Kurye's ile Götür Ön Başvuru Formu
        </h1>

        {/* Hata Mesajı */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6 flex items-center">
            <AlertCircle className="w-5 h-5 mr-2" />
            {error}
          </div>
        )}

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <form 
            action="https://formspree.io/f/mkgvpznl" 
            method="POST"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Honeypot */}
            <input type="text" name="_gotcha" style={{ display: 'none' }} />

            {/* Ad Soyad */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Ad Soyad *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-orange-500 focus:outline-none"
                aria-describedby="name-error"
              />
            </div>

            {/* Doğum Tarihi */}
            <div>
              <label htmlFor="birthdate" className="block text-sm font-medium text-gray-700 mb-1">
                Doğum Tarihi *
              </label>
              <input
                type="date"
                id="birthdate"
                name="birthdate"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-orange-500 focus:outline-none"
              />
            </div>

            {/* Şahıs Şirketi */}
            <fieldset className="space-y-2">
              <legend className="text-sm font-medium text-gray-700">Şahıs Şirketi *</legend>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="company"
                    value="Var"
                    required
                    className="mr-2 text-orange-500 focus:ring-orange-500"
                  />
                  Var
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="company"
                    value="Yok"
                    required
                    className="mr-2 text-orange-500 focus:ring-orange-500"
                  />
                  Yok
                </label>
              </div>
            </fieldset>

            {/* Motor */}
            <fieldset className="space-y-2">
              <legend className="text-sm font-medium text-gray-700">Motor *</legend>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="motor"
                    value="Var"
                    required
                    className="mr-2 text-orange-500 focus:ring-orange-500"
                  />
                  Var
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="motor"
                    value="Yok"
                    required
                    className="mr-2 text-orange-500 focus:ring-orange-500"
                  />
                  Yok
                </label>
              </div>
            </fieldset>

            {/* P1 */}
            <fieldset className="space-y-2">
              <legend className="text-sm font-medium text-gray-700">P1 *</legend>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="p1"
                    value="Var"
                    required
                    className="mr-2 text-orange-500 focus:ring-orange-500"
                  />
                  Var
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="p1"
                    value="Yok"
                    required
                    className="mr-2 text-orange-500 focus:ring-orange-500"
                  />
                  Yok
                </label>
              </div>
            </fieldset>

            {/* Deneyim 1 */}
            <div>
              <label htmlFor="experience1" className="block text-sm font-medium text-gray-700 mb-1">
                Deneyim 1 *
              </label>
              <textarea
                id="experience1"
                name="experience1"
                required
                rows={3}
                placeholder="Örn. Yemek dağıtım – 1 yıl"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-orange-500 focus:outline-none"
              />
            </div>

            {/* Deneyim 2 */}
            <div>
              <label htmlFor="experience2" className="block text-sm font-medium text-gray-700 mb-1">
                Deneyim 2
              </label>
              <textarea
                id="experience2"
                name="experience2"
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-orange-500 focus:outline-none"
              />
            </div>

            {/* Telefon */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Telefon *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                pattern="^\\+?\\d[\\d\\s()-]{7,}$"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-orange-500 focus:outline-none"
                aria-describedby="phone-help"
              />
              <p id="phone-help" className="text-xs text-gray-500 mt-1">
                Örn: +90 555 123 45 67
              </p>
            </div>

            {/* SMS ve Arama İzni */}
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="sms_permission"
                  className="mr-2 text-orange-500 focus:ring-orange-500"
                />
                SMS izni
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="call_permission"
                  className="mr-2 text-orange-500 focus:ring-orange-500"
                />
                Arama izni
              </label>
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
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-orange-500 focus:outline-none"
              />
            </div>

            {/* E-posta İzni */}
            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="email_permission"
                  className="mr-2 text-orange-500 focus:ring-orange-500"
                />
                E-posta izni
              </label>
            </div>

            {/* Nereden Duydunuz */}
            <div>
              <label htmlFor="source" className="block text-sm font-medium text-gray-700 mb-1">
                Nereden duydunuz? *
              </label>
              <select
                id="source"
                name="source"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-orange-500 focus:outline-none"
              >
                <option value="" disabled>Seçiniz</option>
                <option value="Google">Google</option>
                <option value="Instagram">Instagram</option>
                <option value="Arkadaş">Arkadaş</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="Diğer">Diğer</option>
              </select>
            </div>

            {/* KVKK */}
            <div>
              <label className="flex items-start">
                <input
                  type="checkbox"
                  name="kvkk"
                  required
                  className="mr-2 mt-1 text-orange-500 focus:ring-orange-500"
                />
                <span className="text-sm text-gray-700">
                  <button
                    type="button"
                    onClick={() => setShowKvkkModal(true)}
                    className="text-orange-500 hover:text-orange-600 underline"
                  >
                    KVKK Aydınlatma Metni
                  </button>
                  'ni okudum, kabul ediyorum. *
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl px-6 py-3 transition-colors duration-200"
            >
              Başvuruyu Gönder
            </button>
          </form>
        </div>
      </div>

      {/* KVKK Modal */}
      {showKvkkModal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="kvkk-modal-title"
        >
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 id="kvkk-modal-title" className="text-2xl font-bold text-gray-900">
                  KVKK Aydınlatma Metni
                </h2>
                <button
                  onClick={() => setShowKvkkModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                  aria-label="Kapat"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="prose max-w-none text-gray-600">
                <p>
                  Kaysia Agency olarak, kişisel verilerinizin korunması konusunda hassasiyetle yaklaşıyoruz. 
                  Bu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında 
                  kişisel verilerinizin işlenmesi hakkında sizleri bilgilendirmek amacıyla hazırlanmıştır.
                </p>
                
                <p>
                  Topladığımız kişisel verileriniz, başvuru sürecinizin yürütülmesi, sizinle iletişim kurulması 
                  ve hizmet kalitesinin artırılması amacıyla işlenmektedir. Verileriniz, yasal yükümlülüklerimiz 
                  çerçevesinde saklanmakta ve üçüncü kişilerle paylaşılmamaktadır.
                </p>
                
                <p>
                  KVKK kapsamındaki haklarınızı kullanmak için bizimle iletişime geçebilirsiniz. 
                  Detaylı bilgi için lütfen gizlilik politikamızı inceleyiniz.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FormPage;
