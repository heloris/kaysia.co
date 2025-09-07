import React, { useState, useEffect } from 'react';

function Emlak() {
  const [domain, setDomain] = useState('Kaysia Emlak');
  const [showModal, setShowModal] = useState(false);
  const [modalInput, setModalInput] = useState('');
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Domain modal'ını kontrol et
  useEffect(() => {
    const savedDomain = localStorage.getItem('emlakDomain');
    if (!savedDomain) {
      setShowModal(true);
    } else {
      setDomain(savedDomain);
    }
  }, []);

  // JSON verilerini çek
  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await fetch('https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLg9E89A6Kojkw4UjPGeXFz_Sd4kbiJQbbnVTEa8iGPqtlwmtioGHs0tumABgnMOVRcckw2n2tIAYBenW7pE2CxAUhg7tfmyA5Shqm_ohgXdCMFHRPYcv-5w4eneh3Nk0NxYCdu78d5Z5z-AsSqIaJ12iBtvPL8EmTjWXHWddbuNXRtZils0A3HEztAPGt_H7HvgsxKpDqenkCIzxf8f2bBLcbmUTnkDZ1xhZY5oB3WUL6h2ib1a7AniNctLUWq_b2_oDS9d8HcB95QoikMcHfhIb_BPxQ&lib=MaPdlmLILRUW8FAJMsAB-mV4Ifv_FrRG6');
        
        if (!response.ok) {
          throw new Error('Veri çekilemedi');
        }
        
        const data = await response.json();
        setListings(data);
      } catch (err) {
        console.error('API hatası:', err);
        setError(err.message);
        
        // Fallback dummy data
        const dummyListings = [
          {
            id: 1,
            baslik: 'Merkezi Konumda Lüks Daire',
            fiyat: 2500000,
            oda: '3+1',
            metrekare: 120,
            il: 'İstanbul',
            ilce: 'Beşiktaş',
            goruntuler: ['https://via.placeholder.com/400x300?text=Daire+1', 'https://via.placeholder.com/400x300?text=Daire+2']
          },
          {
            id: 2,
            baslik: 'Deniz Manzaralı Villa',
            fiyat: 4500000,
            oda: '4+1',
            metrekare: 200,
            il: 'İzmir',
            ilce: 'Çeşme',
            goruntuler: ['https://via.placeholder.com/400x300?text=Villa+1']
          },
          {
            id: 3,
            baslik: 'Modern Ofis Dairesi',
            fiyat: 1800000,
            oda: '2+1',
            metrekare: 85,
            il: 'Ankara',
            ilce: 'Çankaya',
            goruntuler: ['https://via.placeholder.com/400x300?text=Ofis+1', 'https://via.placeholder.com/400x300?text=Ofis+2', 'https://via.placeholder.com/400x300?text=Ofis+3']
          },
          {
            id: 4,
            baslik: 'Bahçeli Müstakil Ev',
            fiyat: 3200000,
            oda: '3+1',
            metrekare: 150,
            il: 'Bursa',
            ilce: 'Nilüfer',
            goruntuler: ['https://via.placeholder.com/400x300?text=Ev+1']
          },
          {
            id: 5,
            baslik: 'Şehir Merkezinde Daire',
            fiyat: 1200000,
            oda: '1+1',
            metrekare: 65,
            il: 'Antalya',
            ilce: 'Muratpaşa',
            goruntuler: ['https://via.placeholder.com/400x300?text=Daire+3', 'https://via.placeholder.com/400x300?text=Daire+4']
          },
          {
            id: 6,
            baslik: 'Lüks Penthouse',
            fiyat: 8500000,
            oda: '5+1',
            metrekare: 300,
            il: 'İstanbul',
            ilce: 'Şişli',
            goruntuler: ['https://via.placeholder.com/400x300?text=Penthouse+1', 'https://via.placeholder.com/400x300?text=Penthouse+2']
          }
        ];
        setListings(dummyListings);
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, []);

  // Sayfa başlığını güncelle
  useEffect(() => {
    document.title = `${domain} | Emlak Teması – Kaysia`;
  }, [domain]);

  const handleModalSave = () => {
    const finalDomain = modalInput.trim() || 'Kaysia Emlak';
    setDomain(finalDomain);
    localStorage.setItem('emlakDomain', finalDomain);
    setShowModal(false);
  };

  const handleModalRandom = () => {
    setModalInput('Kaysia Emlak');
  };

  const handleResetDomain = () => {
    localStorage.removeItem('emlakDomain');
    window.location.reload();
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('tr-TR').format(price);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">İlanlar yükleniyor...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">{domain}</h1>
          <button
            onClick={handleResetDomain}
            className="text-sm text-orange-600 hover:text-orange-700 underline"
          >
            Alan adını sıfırla
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded mb-6">
            API'den veri çekilemedi, örnek ilanlar gösteriliyor.
          </div>
        )}

        {/* Listings Grid */}
        <div className="md:grid md:grid-cols-3 gap-6">
          {listings.map((listing) => (
            <div key={listing.id} className="rounded-2xl border shadow-sm overflow-hidden bg-white">
              {/* Kapak Görseli */}
              <div className="h-48 bg-gray-200 relative">
                {listing.goruntuler && listing.goruntuler.length > 0 ? (
                  <img
                    src={listing.goruntuler[0]}
                    alt={listing.baslik}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    <div className="text-center">
                      <div className="text-4xl mb-2">🏠</div>
                      <p>Görsel Yok</p>
                    </div>
                  </div>
                )}
              </div>

              {/* İçerik */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                  {listing.baslik}
                </h3>
                
                <div className="space-y-1 text-sm text-gray-600 mb-3">
                  <p>📍 {listing.il} / {listing.ilce}</p>
                  <p>🏠 {listing.oda} • {listing.metrekare} m²</p>
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-lg font-bold text-orange-500">
                    {formatPrice(listing.fiyat)} ₺
                  </div>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                    Detay
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Domain Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-6 max-w-md w-full mx-4">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Alan adınız nedir?
              </h2>
              
              <div className="mb-6">
                <input
                  type="text"
                  value={modalInput}
                  onChange={(e) => setModalInput(e.target.value)}
                  placeholder="örn: Kaysia Emlak"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  autoFocus
                />
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleModalSave}
                  className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                >
                  Kaydet
                </button>
                <button
                  onClick={handleModalRandom}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-lg transition-colors"
                >
                  Rastgele öner
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Emlak;