import React, { useState } from 'react'
import './Footer.css'
import logo from '../../pic/5A LOGO1 1.svg'
import EKGLine from '../EKGLine'

function Footer() {
  const [modalType, setModalType] = useState(null)

  const openModal = (type) => {
    setModalType(type)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setModalType(null)
    document.body.style.overflow = 'auto'
  }

  const ModalContent = () => {
    if (modalType === 'gizlilik') {
      return (
        <div className="modal-content">
          <h2 className="modal-title">Gizlilik Politikası</h2>
          <div className="modal-body">
            <p><strong>Son Güncelleme:</strong> 2025</p>
            
            <h3>1. Genel Bilgiler</h3>
            <p>5A Sağlık Ürünleri San. ve Tic. Ltd. Şti. ("Şirket", "biz", "bizim") olarak, web sitemizi ziyaret eden kullanıcıların kişisel bilgilerinin korunmasına büyük önem vermekteyiz. Bu Gizlilik Politikası, web sitemiz aracılığıyla toplanan bilgilerin nasıl kullanıldığını ve korunduğunu açıklamaktadır.</p>
            
            <h3>2. Toplanan Bilgiler</h3>
            <p>Web sitemizde çerez (cookie) kullanılmamaktadır. Sadece iletişim formu veya e-posta yoluyla gönderdiğiniz bilgiler toplanmaktadır:</p>
            <ul>
              <li>Ad ve soyad</li>
              <li>E-posta adresi</li>
              <li>Telefon numarası</li>
              <li>Mesaj içeriği</li>
            </ul>
            
            <h3>3. Bilgilerin Kullanımı</h3>
            <p>Toplanan bilgiler aşağıdaki amaçlarla kullanılmaktadır:</p>
            <ul>
              <li>İletişim taleplerinize yanıt vermek</li>
              <li>Ürün ve hizmetlerimiz hakkında bilgi sağlamak</li>
              <li>Yasal yükümlülüklerimizi yerine getirmek</li>
            </ul>
            
            <h3>4. Bilgilerin Paylaşımı</h3>
            <p>Kişisel bilgileriniz, yasal zorunluluklar dışında üçüncü taraflarla paylaşılmamaktadır.</p>
            
            <h3>5. Güvenlik</h3>
            <p>Kişisel bilgilerinizin güvenliğini sağlamak için uygun teknik ve idari önlemler alınmaktadır.</p>
            
            <h3>6. Haklarınız</h3>
            <p>KVKK kapsamında, kişisel verilerinizle ilgili aşağıdaki haklara sahipsiniz:</p>
            <ul>
              <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
              <li>İşlenmişse buna ilişkin bilgi talep etme</li>
              <li>İşlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
              <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme</li>
              <li>Eksik veya yanlış işlenmiş olması halinde bunların düzeltilmesini isteme</li>
              <li>İşlenmesini gerektiren sebeplerin ortadan kalkması halinde silinmesini veya yok edilmesini isteme</li>
            </ul>
            
            <h3>7. İletişim</h3>
            <p>Gizlilik politikamız hakkında sorularınız için bizimle iletişime geçebilirsiniz:</p>
            <p>
              <strong>5A Sağlık Ürünleri San. ve Tic. Ltd. Şti.</strong><br />
              📍 Varlık Mh. K.Karabekir Cd. 202 Sk. Yazır Apt. No:4/A, 07050<br />
              📞 0(543) 237 62 40<br />
              ✉️ 5asaglik@hotmail.com.tr
            </p>
          </div>
        </div>
      )
    }
    
    if (modalType === 'kvkk') {
      return (
        <div className="modal-content">
          <h2 className="modal-title">Kişisel Verilerin Korunması Kanunu (KVKK) Aydınlatma Metni</h2>
          <div className="modal-body">
            <p><strong>Son Güncelleme:</strong> 2025</p>
            
            <h3>1. Veri Sorumlusu</h3>
            <p><strong>5A Sağlık Ürünleri San. ve Tic. Ltd. Şti.</strong><br />
            📍 Varlık Mh. K.Karabekir Cd. 202 Sk. Yazır Apt. No:4/A, 07050<br />
            📞 0(543) 237 62 40<br />
            ✉️ 5asaglik@hotmail.com.tr</p>
            
            <h3>2. Kişisel Verilerin İşlenme Amaçları</h3>
            <p>6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:</p>
            <ul>
              <li>İletişim taleplerinize yanıt vermek</li>
              <li>Ürün ve hizmetlerimiz hakkında bilgi sağlamak</li>
              <li>Teklif ve fiyatlandırma taleplerinizi değerlendirmek</li>
              <li>Yasal yükümlülüklerimizi yerine getirmek</li>
              <li>Müşteri ilişkilerini yönetmek</li>
            </ul>
            
            <h3>3. İşlenen Kişisel Veriler</h3>
            <p>İşlenen kişisel verileriniz şunlardır:</p>
            <ul>
              <li><strong>Kimlik Verileri:</strong> Ad, soyad</li>
              <li><strong>İletişim Verileri:</strong> E-posta adresi, telefon numarası, adres bilgisi</li>
              <li><strong>İşlem Güvenliği Verileri:</strong> IP adresi, web sitesi giriş kayıtları</li>
            </ul>
            
            <h3>4. Kişisel Verilerin İşlenme Hukuki Sebepleri</h3>
            <p>Kişisel verileriniz, KVKK'nın 5. ve 6. maddelerinde belirtilen aşağıdaki hukuki sebeplere dayanarak işlenmektedir:</p>
            <ul>
              <li>Açık rızanız</li>
              <li>Sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması</li>
              <li>Yasal yükümlülüğümüzün yerine getirilmesi</li>
              <li>Meşru menfaatlerimiz için veri işlemenin zorunlu olması</li>
            </ul>
            
            <h3>5. Kişisel Verilerin Aktarımı</h3>
            <p>Kişisel verileriniz, yukarıda belirtilen amaçların gerçekleştirilmesi için gerekli olan hallerde, yasal yükümlülüklerimiz çerçevesinde ve KVKK'nın 8. ve 9. maddelerinde öngörülen şartlara uygun olarak, sınırlı sayıda ve gerekli ölçüde iş ortaklarımız, hizmet sağlayıcılarımız ve yasal mercilerle paylaşılabilir.</p>
            
            <h3>6. Kişisel Verilerin Saklanma Süresi</h3>
            <p>Kişisel verileriniz, işleme amacının gerektirdiği süre boyunca ve ilgili mevzuatta öngörülen saklama sürelerine uygun olarak saklanmaktadır.</p>
            
            <h3>7. KVKK Kapsamındaki Haklarınız</h3>
            <p>KVKK'nın 11. maddesi uyarınca, aşağıdaki haklara sahipsiniz:</p>
            <ul>
              <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
              <li>İşlenmişse buna ilişkin bilgi talep etme</li>
              <li>İşlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
              <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme</li>
              <li>Eksik veya yanlış işlenmiş olması halinde bunların düzeltilmesini isteme</li>
              <li>İşlenmesini gerektiren sebeplerin ortadan kalkması halinde silinmesini veya yok edilmesini isteme</li>
              <li>Düzeltme, silme, yok etme işlemlerinin, kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme</li>
              <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme</li>
              <li>Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması halinde zararın giderilmesini talep etme</li>
            </ul>
            
            <h3>8. Başvuru Hakkı</h3>
            <p>KVKK kapsamındaki haklarınızı kullanmak için yazılı olarak başvuruda bulunabilirsiniz. Başvurularınız, kimlik tespiti yapıldıktan sonra en geç otuz gün içinde sonuçlandırılacaktır.</p>
            
            <h3>9. İletişim</h3>
            <p>KVKK kapsamındaki haklarınızı kullanmak ve sorularınız için:</p>
            <p>
              <strong>5A Sağlık Ürünleri San. ve Tic. Ltd. Şti.</strong><br />
              📍 Varlık Mh. K.Karabekir Cd. 202 Sk. Yazır Apt. No:4/A, 07050<br />
              📞 0(543) 237 62 40<br />
              ✉️ 5asaglik@hotmail.com.tr
            </p>
          </div>
        </div>
      )
    }
    
    if (modalType === 'kullanim') {
      return (
        <div className="modal-content">
          <h2 className="modal-title">Kullanım Şartları</h2>
          <div className="modal-body">
            <p><strong>Son Güncelleme:</strong> 2025</p>
            
            <h3>1. Genel Hükümler</h3>
            <p>Bu web sitesi, 5A Sağlık Ürünleri San. ve Tic. Ltd. Şti. ("Şirket") tarafından işletilmektedir. Web sitemizi kullanarak, aşağıdaki kullanım şartlarını kabul etmiş sayılırsınız.</p>
            
            <h3>2. Web Sitesi Kullanımı</h3>
            <p>Web sitemizi yalnızca yasal amaçlar için kullanabilirsiniz. Web sitesini aşağıdaki durumlarda kullanamazsınız:</p>
            <ul>
              <li>Yasalara, düzenlemelere veya uluslararası hukuka aykırı amaçlarla</li>
              <li>Başkalarının haklarını ihlal etmek için</li>
              <li>Zararlı yazılım, virüs veya kötü amaçlı kod yaymak için</li>
              <li>Web sitesinin güvenliğini veya işleyişini bozmak için</li>
            </ul>
            
            <h3>3. Fikri Mülkiyet Hakları</h3>
            <p>Web sitesindeki tüm içerikler (metinler, görseller, logolar, tasarımlar vb.) Şirket'e aittir ve telif hakkı, marka hakkı ve diğer fikri mülkiyet yasalarıyla korunmaktadır. İçerikleri izinsiz kopyalayamaz, dağıtamaz veya kullanamazsınız.</p>
            
            <h3>4. Ürün ve Hizmet Bilgileri</h3>
            <p>Web sitemizde yer alan ürün ve hizmet bilgileri bilgilendirme amaçlıdır. Fiyatlar ve özellikler önceden haber verilmeksizin değiştirilebilir. Kesin bilgi ve fiyatlandırma için lütfen bizimle iletişime geçiniz.</p>
            
            <h3>5. İletişim ve Bilgi Paylaşımı</h3>
            <p>Web sitemiz üzerinden gönderdiğiniz bilgiler ve mesajlar, gizlilik politikamız kapsamında işlenmektedir. Gönderdiğiniz bilgilerin doğru ve güncel olduğundan sorumlusunuz.</p>
            
            <h3>6. Sorumluluk Reddi</h3>
            <p>Web sitemiz "olduğu gibi" sunulmaktadır. Web sitesinin kesintisiz, hatasız veya güvenli çalışacağına dair garanti vermemekteyiz. Web sitesinin kullanımından doğabilecek zararlardan sorumlu değiliz.</p>
            
            <h3>7. Üçüncü Taraf Bağlantıları</h3>
            <p>Web sitemizde üçüncü taraf web sitelerine bağlantılar bulunabilir. Bu bağlantılar bilgilendirme amaçlıdır ve içeriklerinden sorumlu değiliz.</p>
            
            <h3>8. Değişiklikler</h3>
            <p>Bu kullanım şartlarını herhangi bir zamanda değiştirme hakkını saklı tutarız. Değişiklikler web sitesinde yayınlandığı tarihten itibaren geçerlidir.</p>
            
            <h3>9. Uygulanacak Hukuk</h3>
            <p>Bu kullanım şartları Türkiye Cumhuriyeti yasalarına tabidir. Herhangi bir uyuşmazlık durumunda Antalya Mahkemeleri yetkilidir.</p>
            
            <h3>10. İletişim</h3>
            <p>Kullanım şartları hakkında sorularınız için:</p>
            <p>
              <strong>5A Sağlık Ürünleri San. ve Tic. Ltd. Şti.</strong><br />
              📍 Varlık Mh. K.Karabekir Cd. 202 Sk. Yazır Apt. No:4/A, 07050<br />
              📞 0(543) 237 62 40<br />
              ✉️ 5asaglik@hotmail.com.tr
            </p>
          </div>
        </div>
      )
    }
    
    return null
  }

  return (
    <>
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
                <span className="contact-emoji">📍</span>
                <div className="contact-text">Varlık Mh. K.Karabekir Cd. 202 Sk. Yazır Apt. No:4/A, 07050</div>
              </div>
              <div className="contact-item">
                <span className="contact-emoji">📞</span>
                <div className="contact-text">0(543) 237 62 40</div>
              </div>
              <div className="contact-item">
                <span className="contact-emoji">✉️</span>
                <div className="contact-text">5asaglik@hotmail.com.tr</div>
              </div>
            </div>
          </div>
        </div>

        {/* EKG Line */}
        <EKGLine />

        {/* Bottom Footer */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            © 2025 5A Sağlık Merkezi. Tüm hakları saklıdır.
          </div>
          <div className="footer-bottom-links">
            <button className="footer-bottom-link" onClick={() => openModal('gizlilik')}>Gizlilik Politikası</button>
            <button className="footer-bottom-link" onClick={() => openModal('kvkk')}>KVKK</button>
            <button className="footer-bottom-link" onClick={() => openModal('kullanim')}>Kullanım Şartları</button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalType && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <ModalContent />
          </div>
        </div>
      )}
    </>
  )
}

export default Footer

