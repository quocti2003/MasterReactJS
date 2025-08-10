import React from 'react'
import { motion } from 'framer-motion'
import { FaHeart } from 'react-icons/fa'
import './Footer.css'

const Footer = ({ scrollToSection }) => {
  const siteMapLinks = [
    { id: 'home', label: 'Home' },
    { id: 'traditional', label: 'Traditional' },
    { id: 'contemporary', label: 'Contemporary' },
    { id: 'modern', label: 'Modern' },
    { id: 'hand-lettering', label: 'Hand Lettering' }
  ]

  const quickLinks = [
    { id: 'gallery', label: 'Gallery' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
    { id: 'feedback', label: 'Feedback' }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle newsletter subscription
    const email = e.target.email.value
    console.log('Newsletter subscription:', email)
    e.target.reset()
    alert('Thank you for subscribing!')
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="footer-title calligraphic-title">Scratchy Nib</h3>
            <p className="footer-description">
              Preserving the ancient art of beautiful writing for modern times.
              Join us in celebrating the timeless elegance of calligraphy.
            </p>
          </motion.div>

          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="footer-heading">Site Map</h4>
            <ul className="footer-links">
              {siteMapLinks.map(link => (
                <li key={link.id}>
                  <button 
                    className="footer-link"
                    onClick={() => scrollToSection(link.id)}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map(link => (
                <li key={link.id}>
                  <button 
                    className="footer-link"
                    onClick={() => scrollToSection(link.id)}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="footer-heading">Newsletter</h4>
            <p className="footer-text">
              Subscribe to receive updates on workshops and calligraphy tips
            </p>
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <input 
                type="email" 
                name="email"
                placeholder="Your email" 
                className="newsletter-input"
                required
              />
              <button type="submit" className="newsletter-btn">
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © 2024 Scratchy Nib. Made with <FaHeart className="heart-icon" /> for calligraphy lovers
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer