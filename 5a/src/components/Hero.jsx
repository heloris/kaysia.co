import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <div className="hero-section">
      {/* Left Panel - Orthopedics */}
      <div className="hero-panel hero-panel-left">
        <div className="panel-background"></div>
        <div className="panel-content">
          <div className="main-image-container">
            <div className="product-grid">
              <div className="grid-item"></div>
              <div className="grid-item"></div>
              <div className="grid-item"></div>
              <div className="grid-item"></div>
              <div className="grid-item"></div>
              <div className="grid-item"></div>
            </div>
          </div>
          <div className="text-overlay">
            <h1 className="hero-title">YOU MUST GO ON</h1>
            <div className="info-box">
              <h2 className="info-title">ORTOPEDİ</h2>
              <p className="info-text">
                Ortopedik tedavi ve bakım süreçlerinde kullanılan güvenilir, dayanıklı ve yüksek kalite ekipmanlar.
              </p>
            </div>
            <button className="details-button">Detaylar</button>
          </div>
          <div className="panel-footer">
            <span className="website-link">variteks.com</span>
            <div className="social-icons">
              <span>f</span>
              <span>i</span>
              <span>in</span>
              <span>yt</span>
            </div>
            <span className="social-handle">/variteks</span>
          </div>
        </div>
      </div>

      {/* Middle Panel - Hygiene */}
      <div className="hero-panel hero-panel-middle">
        <div className="panel-image-top"></div>
        <div className="panel-image-bottom"></div>
      </div>

      {/* Right Panel - Instruments */}
      <div className="hero-panel hero-panel-right">
        <div className="panel-image-top"></div>
        <div className="panel-image-bottom"></div>
      </div>
    </div>
  )
}

export default Hero

