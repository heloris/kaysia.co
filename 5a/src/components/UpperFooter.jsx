import React, { useState, useEffect, useRef } from 'react'
import './UpperFooter.css'

function UpperFooter() {
  const [counters, setCounters] = useState({
    years: 0,
    products: 0,
    institutions: 0,
    cities: 0
  })
  const [hasAnimated, setHasAnimated] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            animateCounters()
          }
        })
      },
      { threshold: 0.3 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [hasAnimated])

  const animateCounters = () => {
    const duration = 2000 // 2 saniye
    const steps = 60
    const stepDuration = duration / steps

    // 26+
    const yearsTarget = 26
    const yearsStep = yearsTarget / steps

    // 1500+
    const productsTarget = 1500
    const productsStep = productsTarget / steps

    // 100+
    const institutionsTarget = 100
    const institutionsStep = institutionsTarget / steps

    // 81 il
    const citiesTarget = 81
    const citiesStep = citiesTarget / steps

    let currentStep = 0

    const interval = setInterval(() => {
      currentStep++
      
      setCounters({
        years: Math.min(Math.floor(yearsStep * currentStep), yearsTarget),
        products: Math.min(Math.floor(productsStep * currentStep), productsTarget),
        institutions: Math.min(Math.floor(institutionsStep * currentStep), institutionsTarget),
        cities: Math.min(Math.floor(citiesStep * currentStep), citiesTarget)
      })

      if (currentStep >= steps) {
        clearInterval(interval)
        setCounters({
          years: yearsTarget,
          products: productsTarget,
          institutions: institutionsTarget,
          cities: citiesTarget
        })
      }
    }, stepDuration)
  }

  return (
    <div className="upper-footer" ref={containerRef}>
      <div className="upper-footer-container">
        <div className="stat-item">
          <div className="stat-number">{counters.years}+</div>
          <div className="stat-label">Yıllık Sektörel Tecrübe</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">{counters.products}+</div>
          <div className="stat-label">Medikal Ürün</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">{counters.institutions}+</div>
          <div className="stat-label">Mutlu Kurum</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">{counters.cities} il</div>
          <div className="stat-label">Hızlı Tedarik</div>
        </div>
      </div>
    </div>
  )
}

export default UpperFooter

