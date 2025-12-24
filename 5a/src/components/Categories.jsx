import React, { useState, useEffect } from 'react'
import './Categories.css'

function Categories() {
  const [activeCategory, setActiveCategory] = useState('ortopedi')

  const categories = [
    {
      id: 'ortopedi',
      name: 'Ortopedi',
      products: [
        { id: 1, name: 'Ortopedik Yatak', image: 'https://placehold.co/300x300' },
        { id: 2, name: 'Ortopedik Yastık', image: 'https://placehold.co/300x300' },
        { id: 3, name: 'Ortopedik Ayakkabı', image: 'https://placehold.co/300x300' },
        { id: 4, name: 'Ortopedik Destek', image: 'https://placehold.co/300x300' },
        { id: 5, name: 'Ortopedik Korse', image: 'https://placehold.co/300x300' },
        { id: 6, name: 'Ortopedik Bandaj', image: 'https://placehold.co/300x300' },
        { id: 7, name: 'Ortopedik Atel', image: 'https://placehold.co/300x300' },
        { id: 8, name: 'Ortopedik Protez', image: 'https://placehold.co/300x300' },
      ]
    },
    {
      id: 'antiseptik',
      name: 'Antiseptik ve Dezenfektanlar',
      products: [
        { id: 1, name: 'El Dezenfektanı', image: 'https://placehold.co/300x300' },
        { id: 2, name: 'Yüzey Dezenfektanı', image: 'https://placehold.co/300x300' },
        { id: 3, name: 'Antiseptik Solüsyon', image: 'https://placehold.co/300x300' },
        { id: 4, name: 'Dezenfektan Sprey', image: 'https://placehold.co/300x300' },
        { id: 5, name: 'Antiseptik Krem', image: 'https://placehold.co/300x300' },
        { id: 6, name: 'Sterilizasyon Ürünü', image: 'https://placehold.co/300x300' },
      ]
    },
    {
      id: 'cerrahi',
      name: 'Cerrahi Ekipman ve Aletler',
      products: [
        { id: 1, name: 'Cerrahi Makas', image: 'https://placehold.co/300x300' },
        { id: 2, name: 'Cerrahi Pens', image: 'https://placehold.co/300x300' },
        { id: 3, name: 'Cerrahi Bıçak', image: 'https://placehold.co/300x300' },
        { id: 4, name: 'Cerrahi Set', image: 'https://placehold.co/300x300' },
        { id: 5, name: 'Cerrahi İğne', image: 'https://placehold.co/300x300' },
        { id: 6, name: 'Cerrahi Dikiş Malzemesi', image: 'https://placehold.co/300x300' },
        { id: 7, name: 'Cerrahi Eldiven', image: 'https://placehold.co/300x300' },
        { id: 8, name: 'Cerrahi Örtü', image: 'https://placehold.co/300x300' },
      ]
    },
    {
      id: 'hasta-yatagi',
      name: 'Hasta Yatağı Grubu',
      products: [
        { id: 1, name: 'Elektrikli Hasta Yatağı', image: 'https://placehold.co/300x300' },
        { id: 2, name: 'Manuel Hasta Yatağı', image: 'https://placehold.co/300x300' },
        { id: 3, name: 'Yatak Başlığı', image: 'https://placehold.co/300x300' },
        { id: 4, name: 'Yatak Yatağı', image: 'https://placehold.co/300x300' },
        { id: 5, name: 'Hasta Yatağı Aksesuarı', image: 'https://placehold.co/300x300' },
        { id: 6, name: 'Yatak Çarşafı', image: 'https://placehold.co/300x300' },
      ]
    },
    {
      id: 'kadin-dogum',
      name: 'Kadın Doğum Sarf',
      products: [
        { id: 1, name: 'Doğum Seti', image: 'https://placehold.co/300x300' },
        { id: 2, name: 'Doğum Örtüsü', image: 'https://placehold.co/300x300' },
        { id: 3, name: 'Doğum Aleti', image: 'https://placehold.co/300x300' },
        { id: 4, name: 'Doğum Yatağı Aksesuarı', image: 'https://placehold.co/300x300' },
        { id: 5, name: 'Doğum Sonrası Bakım Ürünü', image: 'https://placehold.co/300x300' },
      ]
    },
    {
      id: 'tibbi-sarf',
      name: 'Tıbbi Sarf',
      products: [
        { id: 1, name: 'Enjektör', image: 'https://placehold.co/300x300' },
        { id: 2, name: 'İğne', image: 'https://placehold.co/300x300' },
        { id: 3, name: 'Gazlı Bez', image: 'https://placehold.co/300x300' },
        { id: 4, name: 'Pamuk', image: 'https://placehold.co/300x300' },
        { id: 5, name: 'Bandaj', image: 'https://placehold.co/300x300' },
        { id: 6, name: 'Plaster', image: 'https://placehold.co/300x300' },
        { id: 7, name: 'Eldiven', image: 'https://placehold.co/300x300' },
        { id: 8, name: 'Maske', image: 'https://placehold.co/300x300' },
      ]
    },
    {
      id: 'medikal',
      name: 'Medikal Ürünler',
      products: [
        { id: 1, name: 'Tansiyon Aleti', image: 'https://placehold.co/300x300' },
        { id: 2, name: 'Stetoskop', image: 'https://placehold.co/300x300' },
        { id: 3, name: 'Termometre', image: 'https://placehold.co/300x300' },
        { id: 4, name: 'Oksijen Konsantratörü', image: 'https://placehold.co/300x300' },
        { id: 5, name: 'Nebulizatör', image: 'https://placehold.co/300x300' },
        { id: 6, name: 'Otomatik Defibrilatör', image: 'https://placehold.co/300x300' },
        { id: 7, name: 'ECG Cihazı', image: 'https://placehold.co/300x300' },
        { id: 8, name: 'Ultrason Cihazı', image: 'https://placehold.co/300x300' },
      ]
    }
  ]

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId)
    const element = document.getElementById(`category-${categoryId}`)
    if (element) {
      const offset = 120 // Navbar + top bar height
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = categories.map(cat => document.getElementById(`category-${cat.id}`))
      const scrollPosition = window.scrollY + 150

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section) {
          const sectionTop = section.offsetTop
          if (scrollPosition >= sectionTop) {
            setActiveCategory(categories[i].id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="categories-section">
      {/* Category Navigation */}
      <div className="category-nav">
        <div className="category-nav-container">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`category-nav-item ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => handleCategoryClick(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Categories Content */}
      <div className="categories-content">
        {categories.map((category) => (
          <div
            key={category.id}
            id={`category-${category.id}`}
            className="category-block"
          >
            <h2 className="category-title">{category.name}</h2>
            <div className="products-grid">
              {category.products.map((product) => (
                <div key={product.id} className="product-card">
                  <div className="product-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="product-info">
                    <h3 className="product-name">{product.name}</h3>
                    <button className="product-button">Detaylar</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories

