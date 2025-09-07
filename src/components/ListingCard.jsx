import React, { useState } from 'react';
import { MapPin, Bed, Square, MessageCircle, Eye } from 'lucide-react';

function ListingCard({ ilan, onDetailClick }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const formatPrice = (price, currency) => {
    if (!price) return 'Fiyat belirtilmemiş';
    
    const formattedPrice = new Intl.NumberFormat('tr-TR').format(price);
    return `${formattedPrice} ${currency || 'TL'}`;
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Merhaba, ${ilan.baslik} hakkında bilgi almak istiyorum.`
    );
    const whatsappUrl = `https://wa.me/905555555555?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
  };

  const currentImage = ilan.gorseller && ilan.gorseller[currentImageIndex];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 hover:shadow-xl transition-shadow duration-300">
      {/* Kapak Görseli */}
      <div className="relative mb-4">
        <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
          {currentImage ? (
            <img
              src={currentImage}
              alt={ilan.baslik}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              <Square size={48} />
            </div>
          )}
        </div>
        
        {/* Durum Badge */}
        {ilan.durum && (
          <div className="absolute top-2 left-2">
            <span className="bg-secondary text-white px-2 py-1 rounded text-sm font-semibold">
              {ilan.durum}
            </span>
          </div>
        )}
        
        {/* Öne Çıkan Badge */}
        {ilan.one_cikan && (
          <div className="absolute top-2 right-2">
            <span className="bg-yellow-500 text-white px-2 py-1 rounded text-sm font-semibold">
              ⭐ Öne Çıkan
            </span>
          </div>
        )}
      </div>

      {/* İçerik */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {ilan.baslik}
        </h3>
        
        <div className="text-2xl font-bold text-secondary mb-3">
          {formatPrice(ilan.fiyat, ilan.para_birimi)}
        </div>
        
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
          {ilan.oda && (
            <div className="flex items-center gap-1">
              <Bed size={16} />
              <span>{ilan.oda}</span>
            </div>
          )}
          
          {ilan.metrekare && (
            <div className="flex items-center gap-1">
              <Square size={16} />
              <span>{ilan.metrekare} m²</span>
            </div>
          )}
        </div>
        
        {ilan.konum && (
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <MapPin size={16} />
            <span>{ilan.konum}</span>
          </div>
        )}
      </div>

      {/* Thumbnail Şeridi */}
      {ilan.gorseller && ilan.gorseller.length > 1 && (
        <div className="flex gap-2 mb-4 overflow-x-auto">
          {ilan.gorseller.slice(0, 3).map((gorsel, index) => (
            <button
              key={index}
              onClick={() => handleImageClick(index)}
              className={`flex-shrink-0 w-16 h-12 rounded border-2 overflow-hidden ${
                index === currentImageIndex ? 'border-secondary' : 'border-gray-200'
              }`}
            >
              <img
                src={gorsel}
                alt={`${ilan.baslik} - Görsel ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}

      {/* Butonlar */}
      <div className="flex gap-2">
        <button
          onClick={() => onDetailClick(ilan)}
          className="flex-1 bg-primary hover:bg-blue-800 text-white py-2 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
          aria-label={`${ilan.baslik} detaylarını görüntüle`}
        >
          <Eye size={16} />
          Detay
        </button>
        
        <button
          onClick={handleWhatsAppClick}
          className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
          aria-label={`${ilan.baslik} için WhatsApp ile iletişime geç`}
        >
          <MessageCircle size={16} />
          Randevu Al
        </button>
      </div>
    </div>
  );
}

export default ListingCard;
