import React, { useEffect, useState } from 'react'
import { FaFeatherAlt, FaPaintBrush, FaPenNib } from 'react-icons/fa'
import './HeroSection.css'

const HeroSection = () => {
  const [currentWord, setCurrentWord] = useState(0)
  const words = ['Beautiful', 'Artistic', 'Timeless', 'Elegant', 'Expressive']

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const features = [
    {
      icon: <FaFeatherAlt />,
      title: 'Traditional Techniques',
      description: 'Master ancient writing styles from cultures worldwide'
    },
    {
      icon: <FaPaintBrush />,
      title: 'Modern Innovation',
      description: 'Blend classic forms with contemporary artistic expression'
    },
    {
      icon: <FaPenNib />,
      title: 'Expert Guidance',
      description: 'Learn from masters and explore diverse calligraphic traditions'
    }
  ]

  return (
    <div className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              The Art of{' '}
              <span className="animated-word">
                {words[currentWord]}
              </span>{' '}
              Writing
            </h1>
            
            <p className="hero-subtitle">
              Discover the timeless beauty of calligraphy, where every stroke tells a story
              and every letter becomes a masterpiece.
            </p>

          </div>

          <div className="hero-visual">
            <div className="calligraphy-showcase">
              <svg viewBox="0 0 400 200" className="svg-calligraphy">
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#667eea" />
                    <stop offset="100%" stopColor="#764ba2" />
                  </linearGradient>
                </defs>
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="svg-text"
                  fill="url(#gradient)"
                  stroke="url(#gradient)"
                >
                  Art
                </text>
              </svg>
            </div>
          </div>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card"
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HeroSection;