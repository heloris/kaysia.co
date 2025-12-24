import React, { useState } from 'react'
import './Slider.css'

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      mainImage: 'https://placehold.co/641x617',
      sideImages: [
        'https://placehold.co/214x617',
        'https://placehold.co/214x617',
        'https://placehold.co/214x617',
        'https://placehold.co/157x617'
      ],
      title: 'ORTOPEDİ',
      description: '"Ortopedik tedavi ve bakım süreçlerinde kullanılan güvenilir, dayanıklı ve yüksek kalite ekipmanlar."',
      buttonText: 'Detaylar'
    },
    {
      id: 2,
      mainImage: 'https://placehold.co/641x617',
      sideImages: [
        'https://placehold.co/214x617',
        'https://placehold.co/214x617',
        'https://placehold.co/214x617',
        'https://placehold.co/157x617'
      ],
      title: 'SLIDE 2',
      description: 'İkinci slide açıklaması',
      buttonText: 'Detaylar'
    },
    {
      id: 3,
      mainImage: 'https://placehold.co/641x617',
      sideImages: [
        'https://placehold.co/214x617',
        'https://placehold.co/214x617',
        'https://placehold.co/214x617',
        'https://placehold.co/157x617'
      ],
      title: 'SLIDE 3',
      description: 'Üçüncü slide açıklaması',
      buttonText: 'Detaylar'
    },
    {
      id: 4,
      mainImage: 'https://placehold.co/641x617',
      sideImages: [
        'https://placehold.co/214x617',
        'https://placehold.co/214x617',
        'https://placehold.co/214x617',
        'https://placehold.co/157x617'
      ],
      title: 'SLIDE 4',
      description: 'Dördüncü slide açıklaması',
      buttonText: 'Detaylar'
    },
    {
      id: 5,
      mainImage: 'https://placehold.co/641x617',
      sideImages: [
        'https://placehold.co/214x617',
        'https://placehold.co/214x617',
        'https://placehold.co/214x617',
        'https://placehold.co/157x617'
      ],
      title: 'SLIDE 5',
      description: 'Beşinci slide açıklaması',
      buttonText: 'Detaylar'
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <div className="slider-container">
      <div className="slider-wrapper">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
          >
            <div className="slide-content">
              <img 
                src={slide.mainImage} 
                alt={slide.title}
                className="main-image"
              />
              {slide.sideImages.map((img, imgIndex) => (
                <img
                  key={imgIndex}
                  src={img}
                  alt={`Side ${imgIndex + 1}`}
                  className={`side-image side-image-${imgIndex + 1}`}
                  style={{ opacity: 0.80 }}
                />
              ))}
              <div className="info-box">
                <div className="info-content">
                  <div className="info-header">
                    <div className="info-title">{slide.title}</div>
                    <div className="info-divider"></div>
                  </div>
                  <div className="info-description">{slide.description}</div>
                  <button className="details-button">{slide.buttonText}</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slider Controls */}
      <button className="slider-btn prev-btn" onClick={prevSlide}>
        ‹
      </button>
      <button className="slider-btn next-btn" onClick={nextSlide}>
        ›
      </button>

      {/* Slider Dots */}
      <div className="slider-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default Slider

