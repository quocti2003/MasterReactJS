import React from 'react'
import { motion } from 'framer-motion'
import { FaScroll, FaFeatherAlt, FaBook, FaPalette } from 'react-icons/fa'
import './TraditionalCalligraphy.css'

const TraditionalCalligraphy = () => {
  const styles = [
    {
      name: 'Chinese Calligraphy',
      description: 'Dating back over 3,000 years, Chinese calligraphy uses brush and ink to create characters that are both linguistic and artistic.',
      icon: <FaScroll />,
      characteristics: ['Brush strokes', 'Ink gradients', 'Balance and harmony']
    },
    {
      name: 'Islamic Calligraphy',
      description: 'A sacred art form that transforms Arabic script into intricate geometric patterns and flowing designs.',
      icon: <FaFeatherAlt />,
      characteristics: ['Geometric patterns', 'Flowing curves', 'Sacred texts']
    },
    {
      name: 'Western Calligraphy',
      description: 'From Roman inscriptions to medieval manuscripts, Western calligraphy encompasses various scripts including Gothic and Uncial.',
      icon: <FaBook />,
      characteristics: ['Illuminated letters', 'Gothic scripts', 'Roman capitals']
    },
    {
      name: 'Japanese Calligraphy',
      description: 'Known as Shodo, this art form emphasizes the beauty of each stroke and the spiritual connection between artist and work.',
      icon: <FaPalette />,
      characteristics: ['Zen aesthetics', 'Seasonal themes', 'Minimalism']
    }
  ]

  return (
    <div className="traditional-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Traditional Calligraphy</h2>
          <p className="section-subtitle">
            Explore centuries-old writing traditions from cultures around the world
          </p>
        </motion.div>

        <div className="styles-grid">
          {styles.map((style, index) => (
            <motion.div
              key={index}
              className="style-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="style-icon">{style.icon}</div>
              <h3 className="style-name">{style.name}</h3>
              <p className="style-description">{style.description}</p>
              <div className="characteristics">
                {style.characteristics.map((char, i) => (
                  <span key={i} className="characteristic-tag">{char}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="history-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="history-title">The Rich History of Traditional Scripts</h3>
          <div className="history-content">
            <p>
              Traditional calligraphy represents humanity's oldest form of artistic expression through writing. 
              Each culture has developed unique styles that reflect their values, aesthetics, and spiritual beliefs.
            </p>
            <p>
              From the meditative strokes of East Asian calligraphy to the ornate illuminations of medieval 
              European manuscripts, these traditions continue to inspire modern artists and preserve cultural heritage.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default TraditionalCalligraphy