import React, { useState } from 'react';
import { ShoppingCart, Package, Calendar, CreditCard } from 'lucide-react';

function SiparisOzeti() {
  const [isExpanded, setIsExpanded] = useState(false);

  // Dummy data - gerçek uygulamada props olarak gelecek
  const orderData = {
    domain: 'example.com',
    package: 'Profesyonel',
    duration: '1 Yıl',
    totalPrice: '2,500 TL',
    features: [
      'Profesyonel tasarım',
      'Mobil uyumlu',
      'SEO optimizasyonu',
      'SSL sertifikası',
      '7/24 destek'
    ]
  };

  return (
    <>
      {/* Desktop - Sticky Sidebar */}
      <div className="hidden lg:block fixed right-4 top-1/2 transform -translate-y-1/2 z-40">
        <div className="bg-white rounded-2xl shadow-lg border p-6 w-80">
          <div className="flex items-center mb-4">
            <ShoppingCart className="w-6 h-6 text-orange-500 mr-2" />
            <h3 className="text-lg font-semibold">Sipariş Özeti</h3>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b">
              <span className="text-gray-600">Alan Adı:</span>
              <span className="font-medium">{orderData.domain}</span>
            </div>
            
            <div className="flex justify-between items-center py-2 border-b">
              <span className="text-gray-600">Paket:</span>
              <span className="font-medium">{orderData.package}</span>
            </div>
            
            <div className="flex justify-between items-center py-2 border-b">
              <span className="text-gray-600">Süre:</span>
              <span className="font-medium">{orderData.duration}</span>
            </div>
            
            <div className="flex justify-between items-center py-2 border-b">
              <span className="text-gray-600">Toplam:</span>
              <span className="font-bold text-orange-600 text-lg">{orderData.totalPrice}</span>
            </div>
          </div>
          
          <div className="mt-4">
            <h4 className="font-medium mb-2">Paket Özellikleri:</h4>
            <ul className="space-y-1">
              {orderData.features.map((feature, index) => (
                <li key={index} className="flex items-center text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          
          <button className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors">
            <CreditCard className="w-5 h-5 inline mr-2" />
            Siparişi Tamamla
          </button>
        </div>
      </div>

      {/* Mobile - Floating Button */}
      <div className="lg:hidden fixed bottom-4 right-4 z-40">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-full shadow-lg transition-colors"
        >
          <ShoppingCart className="w-6 h-6" />
        </button>
        
        {/* Mobile Expanded View */}
        {isExpanded && (
          <div className="absolute bottom-16 right-0 bg-white rounded-2xl shadow-lg border p-4 w-80 max-w-[calc(100vw-2rem)]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Sipariş Özeti</h3>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-gray-600">Alan Adı:</span>
                <span className="font-medium">{orderData.domain}</span>
              </div>
              
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-gray-600">Paket:</span>
                <span className="font-medium">{orderData.package}</span>
              </div>
              
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-gray-600">Süre:</span>
                <span className="font-medium">{orderData.duration}</span>
              </div>
              
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-gray-600">Toplam:</span>
                <span className="font-bold text-orange-600 text-lg">{orderData.totalPrice}</span>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">Paket Özellikleri:</h4>
              <ul className="space-y-1">
                {orderData.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            <button className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors">
              <CreditCard className="w-5 h-5 inline mr-2" />
              Siparişi Tamamla
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default SiparisOzeti;
