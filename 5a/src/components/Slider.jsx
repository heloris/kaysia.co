import React, { useState } from 'react'
import './Slider.css'
import slide1 from '../../pic/slide1.png'
import slide2 from '../../pic/slide2.jpg'
import slide3 from '../../pic/slide3.jpg'
import slide4 from '../../pic/slide4.jpg'
import slide5 from '../../pic/slide5.jpg'

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      image: slide1,
      title: 'ORTOPEDİ',
      description: '"Ortopedik tedavi ve bakım süreçlerinde kullanılan güvenilir, dayanıklı ve yüksek kalite ekipmanlar."',
      buttonText: 'Detaylar'
    },
    {
      id: 2,
      image: slide2,
      title: 'CERRAHİ EKİPMAN VE ALETLER',
      description: '"Ameliyathane ve klinik süreçlerinde kullanılan profesyonel, dayanıklı ve sterilizasyon uyumlu cerrahi aletler."',
      buttonText: 'Detaylar'
    },
    {
      id: 3,
      image: slide3,
      title: 'ANTİSEPTİK VE DEZENFEKTAN GRUBU',
      description: '"Enfeksiyon kontrolünde kullanılan güçlü, hızlı etkili antiseptik ve dezenfektan ürünleri."',
      buttonText: 'Detaylar'
    },
    {
      id: 4,
      image: slide4,
      title: 'MEDİKAL ÜRÜNLER',
      description: '"Hastane, klinik ve ev tipi sağlık ihtiyaçları için tasarlanmış kapsamlı medikal ürün çözümleri."',
      buttonText: 'Detaylar'
    },
    {
      id: 5,
      image: slide5,
      title: 'KLİNİK ÜRÜNLERİ',
      description: '"Muayene, tedavi ve bakım süreçlerinde gerekli olan tüm temel klinik ürün çözümleri."',
      buttonText: 'Detaylar'
    }
  ]

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <div className="slider-container accordion-slider">
      <div className="accordion-wrapper">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`accordion-item ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            style={{ 
              flex: index === currentSlide ? '3' : '1',
              cursor: 'pointer'
            }}
          >
            <img 
              src={slide.image} 
              alt={slide.title}
              className="accordion-image"
            />
            {index === currentSlide && (
              <div className="accordion-info">
                <div className="info-content">
                  <div className="info-header">
                    <div className="info-title">{slide.title}</div>
                    <div className="info-divider"></div>
                  </div>
                  <div className="info-description">{slide.description}</div>
                  <button className="details-button" onClick={(e) => e.stopPropagation()}>
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Slider

