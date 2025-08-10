import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import './Sitemap.css'

const Sitemap = () => {
  const siteStructure = [
    {
      title: 'Main Sections',
      links: [
        { name: 'Home', description: 'Welcome to Scratchy Nib' },
        { name: 'Traditional Calligraphy', description: 'Ancient art forms and techniques' },
        { name: 'Contemporary Calligraphy', description: 'Modern interpretations of classic styles' },
        { name: 'Modern Calligraphy', description: 'Contemporary digital and artistic approaches' },
        { name: 'Hand Lettering & Design', description: 'Creative lettering and design elements' },
        { name: 'Gallery', description: 'Showcase of beautiful calligraphy works' }
      ]
    },
    {
      title: 'Information',
      links: [
        { name: 'About Us', description: 'Learn about our passion for calligraphy' },
        { name: 'Contact Us', description: 'Get in touch with us' },
        { name: 'Feedback', description: 'Share your thoughts and suggestions' }
      ]
    },
    {
      title: 'Calligraphy Styles',
      links: [
        { name: 'Arabic Calligraphy', description: 'Beautiful Arabic scripts and styles' },
        { name: 'Chinese Calligraphy', description: 'Traditional Chinese brush writing' },
        { name: 'Greek Calligraphy', description: 'Ancient Greek letter forms' },
        { name: 'Indic Scripts', description: 'Sanskrit and regional Indian scripts' },
        { name: 'Japanese Calligraphy', description: 'Shodo and Japanese writing arts' },
        { name: 'Western Calligraphy', description: 'Latin scripts and European traditions' }
      ]
    }
  ]

  return (
    <motion.div 
      className="sitemap-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <motion.div 
          className="sitemap-header"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="section-title">Site Map</h2>
          <p className="section-description">
            Navigate through our comprehensive guide to the art of calligraphy
          </p>
        </motion.div>

        <div className="sitemap-grid">
          {siteStructure.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              className="sitemap-category"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 + sectionIndex * 0.1 }}
            >
              <h3 className="category-title">{section.title}</h3>
              <ul className="sitemap-links">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    className="sitemap-link-item"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.4 + sectionIndex * 0.1 + linkIndex * 0.05 }}
                    whileHover={{ x: 10, scale: 1.02 }}
                  >
                    <div className="link-content">
                      <h4 className="link-name">{link.name}</h4>
                      <p className="link-description">{link.description}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="sitemap-footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p>
            Explore the rich world of calligraphy through our carefully curated sections. 
            Each page offers unique insights into this timeless art form.
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Sitemap