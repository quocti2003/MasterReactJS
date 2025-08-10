import React, { useState, useEffect } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import './Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header 
      className={`header ${isScrolled ? 'shrink' : ''} ${isHovered && isScrolled ? 'expand-on-hover' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <div className="header-content">
          <motion.h1 
            className="site-title calligraphic-title"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Scratchy Nib
          </motion.h1>
          {(!isScrolled || (isScrolled && isHovered)) && (
            <>
              <motion.p 
                className="site-tagline"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                Where Art Meets History - The Ancient Craft of Beautiful Writing
              </motion.p>
              <motion.div 
                className="header-info"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className="header-description">
                  Calligraphy, derived from the Greek words "kallos" (beauty) and "graphein" (to write),
                  is an ancient art form that transforms written language into visual art. 
                  Originating over 3,000 years ago in China, this timeless craft has evolved across 
                  cultures, from Islamic geometric patterns to Western illuminated manuscripts, 
                  becoming a bridge between communication and artistic expression.
                </p>
              </motion.div>
            </>
          )}
        </div>
      </div>
    </motion.header>
  )
}

export default Header