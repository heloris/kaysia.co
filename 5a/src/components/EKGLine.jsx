import React, { useEffect, useRef, useState } from 'react'
import './EKGLine.css'

function EKGLine({ className = '' }) {
  const pathRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    const path = pathRef.current
    if (path) {
      const len = path.getTotalLength()
      path.style.setProperty('--len', len)
      path.style.strokeDasharray = len
      path.style.strokeDashoffset = len
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            // Animasyonu yeniden başlat
            const path = pathRef.current
            if (path) {
              const len = path.getTotalLength()
              path.style.setProperty('--len', len)
              path.style.strokeDasharray = len
              path.style.strokeDashoffset = len
              // Animasyonu sıfırla ve başlat
              path.style.animation = 'none'
              setTimeout(() => {
                path.style.animation = 'draw 2.5s linear 2 forwards'
              }, 50)
            }
          } else {
            setIsVisible(false)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])

  return (
    <div ref={containerRef} className={`ekg-line-container ${className}`}>
      <div className="ekg-wrap">
        <svg 
          className="ekg-svg" 
          viewBox="0 0 1200 200" 
          width="100%" 
          height="200" 
          aria-label="EKG"
        >
          {/* gri düz çizgi */}
          <line x1="20" y1="100" x2="1180" y2="100" className="baseline" />
          {/* Kırmızı EKG çizgisi - 3 kısım: sol düz, orta 5 iniş çıkış (küçükten büyüğe), sağ düz */}
          <path 
            ref={pathRef}
            className="ecg"
            style={{ animation: isVisible ? 'draw 4.5s linear 2 forwards' : 'none' }}
            d="M20 100 L520 100 
               L525 100 
               L527 102 
               L530 25 
               L533 175 
               L536 100 
               L545 108 
               L555 100 
               L560 100 
               L562 95 
               L564 105 
               L566 100 
               L570 100 
               L572 98 
               L574 102 
               L576 100 
               L580 100 
               L585 100 
               L587 102 
               L590 25 
               L593 175 
               L596 100 
               L605 108 
               L615 100 
               L620 100 
               L622 96 
               L624 104 
               L626 100 
               L630 100 
               L632 97 
               L634 103 
               L636 100 
               L640 100 
               L645 100 
               L647 102 
               L650 25 
               L653 175 
               L656 100 
               L665 108 
               L675 100 
               L1180 100" 
          />
        </svg>
      </div>
    </div>
  )
}

export default EKGLine

