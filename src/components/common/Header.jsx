import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      {/* Animated 4-pointed stars background */}
      <div className="stars-container">
        <div className="stars-layer stars-layer-1"></div>
        <div className="stars-layer stars-layer-2"></div>
        <div className="stars-layer stars-layer-3"></div>
      </div>
      <div className="container">
        <div className="header-content">
          {/* Main Title - Calligraphic Font as per requirement */}
          <div className="header-main">
            <h1 className="site-title calligraphic-title">
              Scratchy Nib
            </h1>
          </div>
          
          {/* Brief Information about Calligraphy Origins */}
          <div className="calligraphy-info-section">
            <p className="site-tagline">
              Exploring the timeless art of beautiful writing
            </p>
            <div className="calligraphy-origin-info">
              <p className="origin-text">
                Calligraphy, derived from Greek words "kallos" (beauty) and "graphein" (to write), 
                originated over 3000 years ago in ancient China during the Shang Dynasty. 
                This sacred art form spread across cultures - from Islamic calligraphy in the 7th century 
                to Western calligraphy rooted in Latin scripts, each developing unique styles and traditions 
                that continue to inspire artists worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header