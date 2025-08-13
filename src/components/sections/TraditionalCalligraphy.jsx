import React from 'react'
import { FaScroll, FaFeatherAlt, FaBook, FaPalette, FaGlobeAsia, FaDharmachakra, FaHistory, FaUsers, FaHeart } from 'react-icons/fa'
import './TraditionalCalligraphy.css'

const TraditionalCalligraphy = () => {
  const styles = [
    {
      name: 'Brush Calligraphy',
      description: 'The art of writing with brush and ink, emphasizing fluid strokes and expressive character forms.',
      icon: <FaScroll />,
      characteristics: ['Brush technique', 'Ink flow', 'Character expression'],
      image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=400&h=250'
    },
    {
      name: 'Pen Calligraphy',
      description: 'Elegant writing using traditional pens, focusing on consistent letterforms and classical beauty.',
      icon: <FaFeatherAlt />,
      characteristics: ['Pen control', 'Letter spacing', 'Classical forms'],
      image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=250'
    },
    {
      name: 'Script Traditions',
      description: 'Time-honored writing systems that preserve cultural heritage through beautiful lettering.',
      icon: <FaBook />,
      characteristics: ['Cultural heritage', 'Traditional methods', 'Historical scripts'],
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250'
    }
  ]

  return (
    <div className="traditional-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Traditional Calligraphy</h2>
          <p className="section-subtitle">
            Discover the timeless art of beautiful writing that has shaped human communication for millennia
          </p>
        </div>


        <div className="styles-grid">
          {styles.map((style, index) => (
            <div
              key={index}
              className="style-card"
            >
              <div className="card-image">
                <img src={style.image} alt={style.name} />
                <div className="image-overlay">
                  <div className="style-icon">{style.icon}</div>
                </div>
              </div>
              <div className="card-content">
                <h3 className="style-name">{style.name}</h3>
                <p className="style-description">{style.description}</p>
                <div className="characteristics">
                  {style.characteristics.map((char, i) => (
                    <span key={i} className="characteristic-tag">{char}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default TraditionalCalligraphy