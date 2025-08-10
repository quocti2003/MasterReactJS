import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaStar, FaUser, FaEnvelope, FaComment } from 'react-icons/fa'
import './Feedback.css'

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 5,
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [hoveredStar, setHoveredStar] = useState(0)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleRatingClick = (rating) => {
    setFormData(prev => ({
      ...prev,
      rating
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Store feedback in localStorage (simulating database)
    const feedbacks = JSON.parse(localStorage.getItem('feedbacks') || '[]')
    feedbacks.push({
      ...formData,
      timestamp: new Date().toISOString()
    })
    localStorage.setItem('feedbacks', JSON.stringify(feedbacks))
    
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        rating: 5,
        message: ''
      })
    }, 3000)
  }

  return (
    <div className="feedback-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="feedback-content"
        >
          <div className="section-header">
            <h2 className="section-title">Share Your Feedback</h2>
            <p className="section-subtitle">
              We'd love to hear about your experience with calligraphy
            </p>
          </div>

          {submitted ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="success-message"
            >
              <div className="success-icon">✓</div>
              <h3>Thank You!</h3>
              <p>Your feedback has been successfully submitted.</p>
            </motion.div>
          ) : (
            <motion.form
              className="feedback-form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    <FaUser /> Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    required
                    placeholder="Enter your name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    <FaEnvelope /> Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    required
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">
                  <FaStar /> Rate Your Experience
                </label>
                <div className="rating-stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      className={`star-btn ${
                        star <= (hoveredStar || formData.rating) ? 'active' : ''
                      }`}
                      onClick={() => handleRatingClick(star)}
                      onMouseEnter={() => setHoveredStar(star)}
                      onMouseLeave={() => setHoveredStar(0)}
                    >
                      <FaStar />
                    </button>
                  ))}
                  <span className="rating-text">
                    {formData.rating} star{formData.rating !== 1 ? 's' : ''}
                  </span>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  <FaComment /> Your Feedback
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  rows="5"
                  required
                  placeholder="Share your thoughts about calligraphy..."
                />
              </div>

              <motion.button
                type="submit"
                className="btn btn-primary submit-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Submit Feedback
              </motion.button>
            </motion.form>
          )}

          <div className="testimonials">
            <h3 className="testimonials-title">What Others Say</h3>
            <div className="testimonial-cards">
              <motion.div 
                className="testimonial-card"
                whileHover={{ y: -5 }}
              >
                <div className="testimonial-rating">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="star-icon" />
                  ))}
                </div>
                <p className="testimonial-text">
                  "Learning calligraphy here has been an incredible journey. The variety of styles and expert guidance is amazing!"
                </p>
                <p className="testimonial-author">- Sarah M.</p>
              </motion.div>

              <motion.div 
                className="testimonial-card"
                whileHover={{ y: -5 }}
              >
                <div className="testimonial-rating">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="star-icon" />
                  ))}
                </div>
                <p className="testimonial-text">
                  "The perfect blend of tradition and modern techniques. I've discovered my passion for hand lettering!"
                </p>
                <p className="testimonial-author">- David L.</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Feedback