import React from 'react'
import { motion } from 'framer-motion'
import './ContemporaryCalligraphy.css'

const ContemporaryCalligraphy = () => {
  const styles = [
    {
      title: 'Brush Lettering',
      description: 'Modern interpretation using brush pens and markers',
      features: ['Flexible strokes', 'Bold colors', 'Dynamic compositions']
    },
    {
      title: 'Digital Calligraphy',
      description: 'Combining traditional techniques with digital tools',
      features: ['iPad lettering', 'Vector graphics', 'Animated text']
    },
    {
      title: 'Mixed Media',
      description: 'Incorporating various materials and techniques',
      features: ['Watercolor backgrounds', 'Gold leafing', 'Texture overlays']
    },
    {
      title: 'Experimental Scripts',
      description: 'Pushing boundaries with innovative letterforms',
      features: ['Abstract shapes', 'Deconstructed letters', 'Artistic freedom']
    }
  ]

  return (
    <div className="contemporary-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Contemporary Calligraphy</h2>
          <p className="section-subtitle">
            Where tradition meets innovation in modern artistic expression
          </p>
        </motion.div>

        <div className="styles-container">
          {styles.map((style, index) => (
            <motion.div
              key={index}
              className="style-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="style-number">{`0${index + 1}`}</div>
              <div className="style-content">
                <h3>{style.title}</h3>
                <p>{style.description}</p>
                <ul className="features-list">
                  {style.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ContemporaryCalligraphy