import React from 'react'
import { motion } from 'framer-motion'
import { FaPenFancy, FaTabletAlt, FaPrint, FaLaptop, FaBrush, FaSprayCan } from 'react-icons/fa'
import './ModernCalligraphy.css'

const ModernCalligraphy = () => {
  const techniques = [
    {
      icon: <FaPenFancy />,
      title: 'Pointed Pen',
      description: 'Modern pointed pen calligraphy for elegant scripts'
    },
    {
      icon: <FaTabletAlt />,
      title: 'Digital Tools',
      description: 'iPad Pro and stylus for digital lettering'
    },
    {
      icon: <FaPrint />,
      title: 'Print Design',
      description: 'Typography for modern branding and design'
    },
    {
      icon: <FaLaptop />,
      title: 'Web Typography',
      description: 'Custom fonts and web-based calligraphy'
    },
    {
      icon: <FaBrush />,
      title: 'Brush Lettering',
      description: 'Modern brush pens and markers for expressive, fluid letterforms'
    },
    {
      icon: <FaSprayCan />,
      title: 'Graffiti Calligraphy',
      description: 'Urban street art meets traditional lettering in contemporary expression'
    }
  ]

  return (
    <div className="modern-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Modern Calligraphy</h2>
          <p className="section-subtitle">
            Contemporary techniques for the digital age
          </p>
        </motion.div>

        <div className="techniques-grid">
          {techniques.map((tech, index) => (
            <motion.div
              key={index}
              className="technique-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <div className="tech-icon">{tech.icon}</div>
              <h3>{tech.title}</h3>
              <p>{tech.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="modern-showcase"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3>The Evolution of Writing</h3>
          <p>
            Modern calligraphy bridges the gap between traditional artistry and contemporary design. 
            It adapts classical techniques for today's applications, from wedding invitations to 
            brand identities, making beautiful lettering accessible and relevant in the digital era.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default ModernCalligraphy