import React from 'react'
import './Footer.css'
import logo from '../../pic/5A LOGO1 1.svg'

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        {/* Logo and Description Section */}
        <div className="footer-logo-section">
          <div className="logo-wrapper">
            <img src={logo} alt="5A Logo" className="footer-logo" />
            <div className="logo-text-section">
              <div className="logo-title">5A Sağlık Ürünleri</div>
              <div className="logo-subtitle">San ve tic.ltd.şti</div>
            </div>
          </div>
          <p className="footer-description">
            "5A Sağlık Merkezi; etik değerlere bağlı, güvenilir ve kaliteli sağlık hizmeti sunmayı amaçlayan öncü bir sağlık kuruluşudur."
          </p>
        </div>

        {/* Corporate Links Section */}
        <div className="footer-links-section">
          <div className="footer-section-title">KURUMSAL</div>
          <div className="footer-links">
            <a href="#hakkimizda" className="footer-link">Hakkımızda</a>
            <a href="#yonetim" className="footer-link">Yönetim Kurulu</a>
            <a href="#kalite" className="footer-link">Kalite Politikamız</a>
          </div>
        </div>

        {/* Contact Section */}
        <div className="footer-contact-section">
          <div className="footer-section-title">İLETİŞİM</div>
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon location-icon"></div>
              <div className="contact-text">Varlık Mh. K.Karabekir Cd. 202 Sk. Yazır Apt. No:4/A, 07050</div>
            </div>
            <div className="contact-item">
              <div className="contact-icon phone-icon"></div>
              <div className="contact-text">0(543) 237 62 40</div>
            </div>
            <div className="contact-item">
              <div className="contact-icon email-icon"></div>
              <div className="contact-text">5asaglik@hotmail.com.tr</div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="footer-divider"></div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <div className="footer-copyright">
          © 2025 5A Sağlık Merkezi. Tüm hakları saklıdır.
        </div>
        <div className="footer-bottom-links">
          <a href="#gizlilik" className="footer-bottom-link">Gizlilik Politikası</a>
          <a href="#kvkk" className="footer-bottom-link">KVKK</a>
          <a href="#kullanim" className="footer-bottom-link">Kullanım Şartları</a>
        </div>
      </div>
    </div>
  )
}

export default Footer

