import React from 'react'
import { motion } from 'framer-motion'
import './HandLettering.css'

const HandLettering = () => {
  const categories = [
    {
      name: 'Serif Styles',
      examples: ['Roman', 'Transitional', 'Modern', 'Slab Serif'],
      color: '#667eea'
    },
    {
      name: 'Sans Serif',
      examples: ['Geometric', 'Humanist', 'Neo-grotesque', 'Casual'],
      color: '#764ba2'
    },
    {
      name: 'Script Styles',
      examples: ['Formal', 'Casual', 'Brush', 'Calligraphic'],
      color: '#9b59b6'
    },
    {
      name: 'Decorative',
      examples: ['Vintage', 'Graffiti', 'Blackletter', 'Art Nouveau'],
      color: '#3498db'
    },
    {
      name: 'Chalk Lettering',
      examples: ['Bistro Style', 'Vintage Boards', 'Modern Chalk', 'Artistic Blend'],
      color: '#e74c3c'
    },
    {
      name: '3D Lettering',
      examples: ['Shadow Effects', 'Isometric', 'Dimensional', 'Perspective'],
      color: '#f39c12'
    }
  ]

  return (
    <div className="hand-lettering-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Hand Lettering & Design</h2>
          <p className="section-subtitle">
            Master the art of creating custom letterforms and typography
          </p>
        </motion.div>

        <div className="categories-grid">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="category-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              style={{ borderTop: `4px solid ${category.color}` }}
            >
              <h3 style={{ color: category.color }}>{category.name}</h3>
              <ul className="examples-list">
                {category.examples.map((example, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index * 0.1) + (i * 0.05) }}
                  >
                    {example}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="design-principles"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3>Design Principles</h3>
          <div className="principles-grid">
            <div className="principle">
              <h4>Hierarchy</h4>
              <p>Create visual importance through size and weight variations</p>
            </div>
            <div className="principle">
              <h4>Balance</h4>
              <p>Achieve harmony between different elements and styles</p>
            </div>
            <div className="principle">
              <h4>Contrast</h4>
              <p>Use differences in style, size, and color for impact</p>
            </div>
            <div className="principle">
              <h4>Consistency</h4>
              <p>Maintain cohesive style throughout your lettering</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default HandLettering