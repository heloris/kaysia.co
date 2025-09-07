import React from 'react';

function SiparisOzeti() {
  // Dummy data - gerçek uygulamada props olarak gelecek
  const orderData = {
    domain: 'ornek.com',
    duration: '1 Yıl',
    package: 'Kartvizit',
    packagePrice: 299,
    domainPrice: 0, // .com.tr ücretsiz kampanyası
    total: 299
  };

  return (
    <div className="sticky top-4">
      <div className="rounded-2xl border shadow-sm p-6 bg-white">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Sipariş Özeti
        </h3>

        <div className="space-y-3 mb-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Alan Adı:</span>
            <span className="font-medium">{orderData.domain}</span>
          </div>
          
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Süre:</span>
            <span className="font-medium">{orderData.duration}</span>
          </div>
          
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Paket:</span>
            <span className="font-medium">{orderData.package}</span>
          </div>
        </div>

        <div className="border-t pt-3 mb-4">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-600">Paket Fiyatı:</span>
            <span className="font-medium">{orderData.packagePrice}₺</span>
          </div>
          
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-600">Alan Adı:</span>
            <span className="font-medium text-green-600">Ücretsiz</span>
          </div>
          
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-600">KDV (%18):</span>
            <span className="font-medium">{Math.round(orderData.packagePrice * 0.18)}₺</span>
          </div>
        </div>

        <div className="border-t pt-3">
          <div className="flex justify-between text-lg font-bold">
            <span>Toplam:</span>
            <span className="text-orange-500">{orderData.total + Math.round(orderData.packagePrice * 0.18)}₺</span>
          </div>
        </div>

        <div className="mt-4 p-3 bg-green-50 rounded-lg">
          <p className="text-sm text-green-700">
            🎉 .com.tr alan adı ücretsiz kampanyası aktif!
          </p>
        </div>
      </div>
    </div>
  );
}

export default SiparisOzeti;