import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
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
        <motion.div
          className="hero-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="hero-text"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
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

            <div className="hero-buttons">
              <button className="btn btn-primary">
                Explore Styles
              </button>
              <button className="btn btn-secondary">
                View Gallery
              </button>
            </div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
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
          </motion.div>
        </motion.div>

        <motion.div
          className="features-grid"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default HeroSection;