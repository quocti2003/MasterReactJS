import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import './FontShowcase.css'

const FontShowcase = () => {
  const fontsUsed = [
    {
      name: 'Playfair Display',
      category: 'Calligraphic Headers',
      description: 'An elegant serif typeface with high contrast and distinctive details, perfect for calligraphic titles and headers. Features transitional letterforms with dramatic stroke contrast.',
      sample: 'Beautiful Calligraphy',
      usage: 'Main titles and section headers',
      className: 'font-playfair',
      characteristics: ['High contrast strokes', 'Elegant serifs', 'Display proportions', 'Transitional style'],
      letterforms: 'Based on 18th-century transitional designs with modern refinements'
    },
    {
      name: 'Dancing Script',
      category: 'Script Font',
      description: 'A lively casual script where the letters bounce and change size slightly. Reminds of hands-on calligraphy with natural pen movements.',
      sample: 'Handwritten Style',
      usage: 'Accent text and decorative elements',
      className: 'font-dancing',
      characteristics: ['Bouncing baseline', 'Connected letters', 'Casual script', 'Variable letter sizes'],
      letterforms: 'Mimics natural handwriting with connecting strokes and flowing movements'
    },
    {
      name: 'Poppins',
      category: 'Modern Sans-Serif',
      description: 'A clean, geometric sans-serif with excellent readability, providing modern contrast to traditional calligraphy. Features rounded letterforms.',
      sample: 'Clean & Modern Text',
      usage: 'Body text, navigation, and UI elements',
      className: 'font-poppins',
      characteristics: ['Geometric construction', 'Rounded forms', 'Open apertures', 'International support'],
      letterforms: 'Based on geometric principles with humanistic touches for readability'
    },
    {
      name: 'Crimson Text',
      category: 'Classical Serif',
      description: 'Inspired by old-style serif fonts, designed for reading comfort with traditional calligraphic influences. Perfect for long-form text.',
      sample: 'Traditional Reading',
      usage: 'Long-form content and descriptions',
      className: 'font-crimson',
      characteristics: ['Old-style numerals', 'Moderate contrast', 'Classical proportions', 'Excellent readability'],
      letterforms: 'Based on Renaissance typefaces with calligraphic heritage and modern optimization'
    },
    {
      name: 'Great Vibes',
      category: 'Formal Script',
      description: 'An elegant connecting script inspired by classical calligraphy, perfect for formal calligraphic demonstrations. Features sophisticated letterform connections.',
      sample: 'Elegant Calligraphy',
      usage: 'Special headings and artistic elements',
      className: 'font-great-vibes',
      characteristics: ['Connecting script', 'Formal elegance', 'Classical inspiration', 'Decorative capitals'],
      letterforms: 'Inspired by 18th and 19th-century formal penmanship with refined connecting strokes'
    },
    {
      name: 'Brush Script MT',
      category: 'Brush Lettering',
      description: 'A bold brush script that captures the essence of brush lettering and modern calligraphy. Perfect for contemporary calligraphic styles.',
      sample: 'Brush Lettering',
      usage: 'Bold headings and modern calligraphy examples',
      className: 'font-brush-script',
      characteristics: ['Brush stroke texture', 'Bold weight', 'Casual elegance', 'Modern appeal'],
      letterforms: 'Simulates brush pen strokes with varying line weights and natural connections'
    }
  ]

  return (
    <div className="font-showcase-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Typography & Fonts</h2>
          <p className="section-subtitle">
            Discover the carefully selected typefaces that bring our calligraphy website to life
          </p>
        </motion.div>

        <div className="fonts-grid">
          {fontsUsed.map((font, index) => (
            <motion.div
              key={font.name}
              className="font-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="font-header">
                <h3 className="font-name">{font.name}</h3>
                <span className="font-category">{font.category}</span>
              </div>

              <div className={`font-sample ${font.className}`}>
                {font.sample}
              </div>

              <div className="font-details">
                <p className="font-description">{font.description}</p>
                <div className="font-usage">
                  <strong>Usage:</strong> {font.usage}
                </div>
                
                <div className="font-characteristics">
                  <h5>Key Characteristics:</h5>
                  <ul>
                    {font.characteristics.map((char, i) => (
                      <li key={i}>{char}</li>
                    ))}
                  </ul>
                </div>

                <div className="letterforms-info">
                  <h5>Letterform Design:</h5>
                  <p>{font.letterforms}</p>
                </div>
              </div>

              <div className="font-alphabet">
                <h5>Complete Character Set:</h5>
                <div className={`alphabet-sample ${font.className}`}>
                  <div className="character-row">
                    <span className="label">Uppercase:</span>
                    <span className="uppercase">ABCDEFGHIJKLMNOPQRSTUVWXYZ</span>
                  </div>
                  <div className="character-row">
                    <span className="label">Lowercase:</span>
                    <span className="lowercase">abcdefghijklmnopqrstuvwxyz</span>
                  </div>
                  <div className="character-row">
                    <span className="label">Numbers:</span>
                    <span className="numbers">1234567890</span>
                  </div>
                  <div className="character-row">
                    <span className="label">Symbols:</span>
                    <span className="symbols">.,;:!?'"()[]{}@&$%</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="typography-philosophy"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3>Our Typography Philosophy</h3>
          <div className="philosophy-content">
            <p>
              Typography in calligraphy is not just about legibility—it's about emotion, tradition, and artistic expression. 
              Each font in our collection has been carefully chosen to complement different aspects of calligraphic art.
            </p>
            <p>
              From the classical elegance of serif fonts that echo traditional manuscript writing, to modern sans-serif 
              typefaces that provide clean contrast, our typography creates a harmonious balance between historical 
              reverence and contemporary accessibility.
            </p>
            <div className="typography-principles">
              <div className="principle">
                <h4>Readability</h4>
                <p>Every font ensures excellent legibility across all devices</p>
              </div>
              <div className="principle">
                <h4>Character</h4>
                <p>Each typeface reflects the personality of different calligraphic styles</p>
              </div>
              <div className="principle">
                <h4>Harmony</h4>
                <p>Fonts work together to create a cohesive visual experience</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default FontShowcase