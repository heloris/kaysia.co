import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Play, Image as ImageIcon } from 'lucide-react';

function GalleryModal({ open, onClose, ilan }) {
  const [activeTab, setActiveTab] = useState('gorseller');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (open) {
      setCurrentImageIndex(0);
      setActiveTab('gorseller');
    }
  }, [open]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!open) return;
      
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' && activeTab === 'gorseller') {
        handlePreviousImage();
      } else if (e.key === 'ArrowRight' && activeTab === 'gorseller') {
        handleNextImage();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, activeTab, onClose, handlePreviousImage, handleNextImage]);

  const handlePreviousImage = useCallback(() => {
    if (ilan.gorseller && ilan.gorseller.length > 0) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? ilan.gorseller.length - 1 : prev - 1
      );
    }
  }, [ilan.gorseller]);

  const handleNextImage = useCallback(() => {
    if (ilan.gorseller && ilan.gorseller.length > 0) {
      setCurrentImageIndex((prev) => 
        prev === ilan.gorseller.length - 1 ? 0 : prev + 1
      );
    }
  }, [ilan.gorseller]);

  const isVideoUrl = (url) => {
    if (!url) return false;
    return url.includes('youtube.com') || 
           url.includes('youtu.be') || 
           url.includes('vimeo.com') || 
           url.endsWith('.mp4') || 
           url.endsWith('.webm') || 
           url.endsWith('.mov');
  };

  const getEmbedUrl = (url) => {
    if (url.includes('youtube.com/watch')) {
      const videoId = url.split('v=')[1]?.split('&')[0];
      return `https://www.youtube.com/embed/${videoId}`;
    } else if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1]?.split('?')[0];
      return `https://www.youtube.com/embed/${videoId}`;
    } else if (url.includes('vimeo.com/')) {
      const videoId = url.split('vimeo.com/')[1]?.split('?')[0];
      return `https://player.vimeo.com/video/${videoId}`;
    }
    return url;
  };

  if (!open || !ilan) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="gallery-modal-title"
    >
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <h2 id="gallery-modal-title" className="text-2xl font-bold text-gray-900">
            {ilan.baslik}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Galeriyi kapat"
          >
            <X size={24} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b">
          <button
            onClick={() => setActiveTab('gorseller')}
            className={`flex-1 py-3 px-6 font-semibold transition-colors ${
              activeTab === 'gorseller'
                ? 'text-secondary border-b-2 border-secondary'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <ImageIcon size={20} />
              Görseller
            </div>
          </button>
          
          {ilan.videolar && ilan.videolar.length > 0 && (
            <button
              onClick={() => setActiveTab('videolar')}
              className={`flex-1 py-3 px-6 font-semibold transition-colors ${
                activeTab === 'videolar'
                  ? 'text-secondary border-b-2 border-secondary'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Play size={20} />
                Videolar
              </div>
            </button>
          )}
        </div>

        {/* Content */}
        <div className="p-6 max-h-[60vh] overflow-y-auto">
          {activeTab === 'gorseller' && (
            <div className="space-y-4">
              {ilan.gorseller && ilan.gorseller.length > 0 ? (
                <>
                  {/* Main Image */}
                  <div className="relative">
                    <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                      <img
                        src={ilan.gorseller[currentImageIndex]}
                        alt={`${ilan.baslik} - Görsel ${currentImageIndex + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Navigation Arrows */}
                    {ilan.gorseller.length > 1 && (
                      <>
                        <button
                          onClick={handlePreviousImage}
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
                          aria-label="Önceki görsel"
                        >
                          <ChevronLeft size={24} />
                        </button>
                        
                        <button
                          onClick={handleNextImage}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
                          aria-label="Sonraki görsel"
                        >
                          <ChevronRight size={24} />
                        </button>
                      </>
                    )}
                    
                    {/* Image Counter */}
                    {ilan.gorseller.length > 1 && (
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                        {currentImageIndex + 1} / {ilan.gorseller.length}
                      </div>
                    )}
                  </div>
                  
                  {/* Thumbnail Grid */}
                  {ilan.gorseller.length > 1 && (
                    <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
                      {ilan.gorseller.map((gorsel, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`aspect-square rounded-lg overflow-hidden border-2 ${
                            index === currentImageIndex ? 'border-secondary' : 'border-gray-200'
                          }`}
                        >
                          <img
                            src={gorsel}
                            alt={`${ilan.baslik} - Thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-12 text-gray-500">
                  <ImageIcon size={48} className="mx-auto mb-4" />
                  <p>Bu ilan için görsel bulunmuyor.</p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'videolar' && (
            <div className="space-y-4">
              {ilan.videolar && ilan.videolar.length > 0 ? (
                ilan.videolar.map((video, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="font-semibold text-gray-900">
                      Video {index + 1}
                    </h4>
                    
                    <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                      {isVideoUrl(video) ? (
                        video.endsWith('.mp4') || video.endsWith('.webm') || video.endsWith('.mov') ? (
                          <video
                            controls
                            className="w-full h-full"
                            poster={ilan.gorseller && ilan.gorseller[0]}
                          >
                            <source src={video} type="video/mp4" />
                            Tarayıcınız video oynatmayı desteklemiyor.
                          </video>
                        ) : (
                          <iframe
                            src={getEmbedUrl(video)}
                            className="w-full h-full"
                            allowFullScreen
                            title={`${ilan.baslik} - Video ${index + 1}`}
                          />
                        )
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-500">
                          <p>Geçersiz video URL'si</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12 text-gray-500">
                  <Play size={48} className="mx-auto mb-4" />
                  <p>Bu ilan için video bulunmuyor.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default GalleryModal;
