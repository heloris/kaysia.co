import React from 'react'
import './Quote.css'
import greenDot from '../../pic/yesilnokta.svg'

function Quote() {
  return (
    <div className="quote-section">
      <div className="quote-content">
        <img src={greenDot} alt="" className="green-dot" />
        <p className="quote-text">"Modern sağlık hizmetlerini yeniden tanımlıyoruz."</p>
      </div>
    </div>
  )
}

export default Quote
