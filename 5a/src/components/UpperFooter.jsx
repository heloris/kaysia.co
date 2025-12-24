import React from 'react'
import './UpperFooter.css'

function UpperFooter() {
  return (
    <div className="upper-footer">
      <div className="upper-footer-container">
        <div className="stat-item">
          <div className="stat-number">26+</div>
          <div className="stat-label">Yıllık Sektörel Tecrübe</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">1500+</div>
          <div className="stat-label">Medikal Ürün</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">100+</div>
          <div className="stat-label">Mutlu Kurum</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">81 il</div>
          <div className="stat-label">Hızlı Tedarik</div>
        </div>
      </div>
    </div>
  )
}

export default UpperFooter

