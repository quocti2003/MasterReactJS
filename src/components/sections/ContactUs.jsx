import React from 'react'
import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import './ContactUs.css'

const ContactUs = () => {
  const contactInfo = {
    phone: '+1 (555) 123-4567',
    email: 'info@scratchynib.com',
    address: '123 Calligraphy Lane, Art District, San Francisco, CA 94102',
    hours: 'Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM\nSunday: Closed'
  }

  const socialLinks = [
    { icon: <FaFacebook />, url: '#', label: 'Facebook' },
    { icon: <FaTwitter />, url: '#', label: 'Twitter' },
    { icon: <FaInstagram />, url: '#', label: 'Instagram' },
    { icon: <FaLinkedin />, url: '#', label: 'LinkedIn' }
  ]

  return (
    <div className="contact-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">
            We'd love to hear from you and help you on your calligraphy journey
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div 
            className="contact-info-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="info-title">Contact Information</h3>
            
            <div className="info-item">
              <div className="info-icon">
                <FaPhone />
              </div>
              <div className="info-details">
                <h4>Phone</h4>
                <p>{contactInfo.phone}</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <div className="info-details">
                <h4>Email</h4>
                <p>{contactInfo.email}</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="info-details">
                <h4>Address</h4>
                <p>{contactInfo.address}</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <FaClock />
              </div>
              <div className="info-details">
                <h4>Business Hours</h4>
                <p style={{ whiteSpace: 'pre-line' }}>{contactInfo.hours}</p>
              </div>
            </div>

            <div className="social-links">
              <h4>Follow Us</h4>
              <div className="social-icons">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    className="social-icon"
                    aria-label={link.label}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="contact-map"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="map-placeholder">
              <div className="map-content">
                <FaMapMarkerAlt className="map-icon" />
                <h3>Visit Our Studio</h3>
                <p>Experience the art of calligraphy in person</p>
                <button className="btn btn-primary">Get Directions</button>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="contact-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3>Ready to Start Your Calligraphy Journey?</h3>
          <p>Join our workshops and discover the beauty of handwritten art</p>
          <button className="btn btn-primary">Book a Workshop</button>
        </motion.div>
      </div>
    </div>
  )
}

export default ContactUs