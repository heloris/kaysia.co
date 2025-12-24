import React from 'react'
import './About.css'
import aboutImage from '../../pic/about.jpg'

function About() {
  return (
    <div className="about-section" id="hakkimizda">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title">Sağlık profesyonelleri için kaliteli ve sürdürülebilir çözümler.</h2>
          <div className="about-text">
            <p>5A Sağlık Ürünleri, 2008 yılında sağlık sektöründe güvenilir medikal ürün tedariki sağlamak amacıyla kurulmuş profesyonel bir sağlık çözümleri firmasıdır. Kuruluşumuzdan bu yana; özel hastaneler, kamu hastaneleri, estetik ve güzellik merkezleri, klinikler ve sağlık kuruluşlarıyla aktif iş birlikleri yürütmekteyiz.</p>
            <p>Sunduğumuz tüm sağlık ve medikal ürünleri, kalite standartlarına uygun şekilde seçiyor, müşterilerimize hızlı, güvenilir ve sürdürülebilir tedarik hizmeti sunuyoruz. Sağlık profesyonellerinin ihtiyaç duyduğu ekipmanlara en doğru şekilde ulaşabilmesi için ürün yelpazemizi sürekli güncelliyor, sektördeki yenilikleri yakından takip ediyoruz.</p>
            <p>5A Sağlık Ürünleri olarak hedefimiz; yalnızca ürün satışı yapmak değil, kurumların ihtiyaçlarını analiz eden, süreç boyunca destek sunan ve çözüm odaklı yaklaşımıyla güven veren bir iş ortağı olmaktır. Sağlık sektörüne değer katmayı, kaliteli ve uzun ömürlü ürünlerle kurumların operasyonel verimliliğini artırmayı amaçlıyoruz.</p>
            <p>2008'den günümüze kadar edindiğimiz deneyim, güçlü tedarik ağı ve profesyonel hizmet anlayışımızla sağlık sektöründe güvenilir bir marka olmaya devam ediyoruz.</p>
          </div>
        </div>
        <div className="about-image">
          <img src={aboutImage} alt="Hakkımızda" />
        </div>
      </div>
    </div>
  )
}

export default About

