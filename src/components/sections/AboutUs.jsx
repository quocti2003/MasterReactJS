import React from 'react'
import { motion } from 'framer-motion'
import { FaAward, FaUsers, FaGraduationCap, FaHeart, FaEnvelope, FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa'
import './AboutUs.css'

const AboutUs = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'info@scratchynib.com',
      link: 'mailto:info@scratchynib.com'
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Address',
      value: '123 Calligraphy Street, Art District, Creative City, AC 12345',
      link: null
    },
    {
      icon: <FaPhone />,
      label: 'Phone',
      value: '+1 (555) 123-ARTS',
      link: 'tel:+15551232787'
    },
    {
      icon: <FaClock />,
      label: 'Hours',
      value: 'Mon-Fri: 9AM-6PM, Sat: 10AM-4PM',
      link: null
    }
  ]

  const values = [
    {
      icon: <FaAward />,
      title: 'Excellence',
      description: 'Committed to preserving and teaching the highest standards of calligraphic art'
    },
    {
      icon: <FaUsers />,
      title: 'Community',
      description: 'Building a global network of calligraphy enthusiasts and practitioners'
    },
    {
      icon: <FaGraduationCap />,
      title: 'Education',
      description: 'Providing comprehensive learning resources for all skill levels'
    }
  ]

  const milestones = [
    { year: '2015', event: 'Founded Scratchy Nib Studio' },
    { year: '2017', event: 'Launched Online Learning Platform' },
    { year: '2019', event: 'Opened Physical Gallery Space' },
    { year: '2021', event: 'International Calligraphy Exhibition' },
    { year: '2023', event: 'Published Calligraphy Textbook Series' },
    { year: '2024', event: 'Reached 10,000+ Students Worldwide' }
  ]

  return (
    <div className="about-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">About Scratchy Nib</h2>
          <p className="section-subtitle">
            Bringing together the art of calligraphy with knowledge and history
          </p>
        </motion.div>

        <motion.div
          className="about-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="about-text">
            <h3>Our Story</h3>
            <p>
              Scratchy Nib was born from a passion for preserving the ancient art of beautiful writing. 
              In an increasingly digital world, we believe in the irreplaceable value of handcrafted letters 
              and the meditative practice of calligraphy.
            </p>
            <p>
              Our mission is to make calligraphy accessible to everyone, from curious beginners to 
              seasoned artists. We blend traditional techniques with modern teaching methods, creating 
              a unique learning experience that honors the past while embracing the future.
            </p>
            <p>
              Through workshops, online courses, and our vibrant community, we've helped thousands 
              discover the joy of calligraphy. Every stroke tells a story, and we're here to help 
              you write yours.
            </p>
          </div>

          <div className="about-image">
            <div className="image-placeholder">
              <span className="calligraphic-title" style={{ fontSize: '3rem' }}>✒️</span>
              <p>Creating Beauty Through Words</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="values-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="values-title">Our Values</h3>
          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="value-card"
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="value-icon">{value.icon}</div>
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>


      </div>
    </div>
  )
}

export default AboutUs