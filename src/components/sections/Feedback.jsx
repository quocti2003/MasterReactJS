import React, { useState, useEffect } from 'react'
import { FaStar, FaUser, FaEnvelope, FaComment, FaClock } from 'react-icons/fa'
import './Feedback.css'

const Feedback = () => {
  // State quản lý dữ liệu form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 5,
    message: ''
  })

  // State quản lý trạng thái đã submit
  const [submitted, setSubmitted] = useState(false)
  // State quản lý sao đang hover
  const [hoveredStar, setHoveredStar] = useState(0)
  // State lưu trữ tất cả feedback
  const [allFeedbacks, setAllFeedbacks] = useState([])
  // State hiển thị tất cả feedback hay không
  const [showAllFeedbacks, setShowAllFeedbacks] = useState(false)

  // Xử lý thay đổi input form
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Xử lý click chọn sao đánh giá
  const handleRatingClick = (rating) => {
    setFormData(prev => ({
      ...prev,
      rating
    }))
  }

  // Load feedback từ localStorage khi component mount
  useEffect(() => {
    loadFeedbacks()
  }, [])

  // Hàm load feedback từ localStorage
  const loadFeedbacks = () => {
    const feedbacks = JSON.parse(localStorage.getItem('feedbacks') || '[]')
    // Sắp xếp theo thời gian mới nhất
    feedbacks.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
    setAllFeedbacks(feedbacks)
  }

  // Xử lý submit form
  const handleSubmit = (e) => {
    e.preventDefault()
    // Lưu feedback vào localStorage (giả lập database)
    const feedbacks = JSON.parse(localStorage.getItem('feedbacks') || '[]')
    const newFeedback = {
      ...formData,
      timestamp: new Date().toISOString(),
      id: Date.now() // Tạo ID đơn giản
    }
    feedbacks.push(newFeedback)
    localStorage.setItem('feedbacks', JSON.stringify(feedbacks))
    
    // Load lại feedback để hiển thị feedback mới
    loadFeedbacks()
    
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

  // Định dạng ngày tháng
  const formatDate = (timestamp) => {
    const date = new Date(timestamp)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <div className="feedback-section">
      <div className="container">
        <div className="feedback-content">
          {/* Header section */}
          <div className="section-header">
            <h2 className="section-title">Share Your Feedback</h2>
            <p className="section-subtitle">
              We'd love to hear about your experience with calligraphy
            </p>
          </div>

          {/* Hiển thị thông báo sau khi submit */}
          {submitted ? (
            <div className="success-message">
              <div className="success-icon">✓</div>
              <h3>Thank You!</h3>
              <p>Your feedback has been successfully submitted.</p>
            </div>
          ) : (
            /* Form nhập feedback */
            <form
              className="feedback-form"
              onSubmit={handleSubmit}
            >
              {/* Nhập tên và email */}
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

              {/* Đánh giá sao */}
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

              {/* Nhập nội dung feedback */}
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

              {/* Nút submit */}
              <button
                type="submit"
                className="btn btn-primary submit-btn"
              >
                Submit Feedback
              </button>
            </form>
          )}

          {/* Hiển thị feedback từ người dùng */}
          {allFeedbacks.length > 0 && (
            <div className="user-feedbacks">
              <div className="feedbacks-header">
                <h3 className="feedbacks-title">Community Feedback</h3>
                <button 
                  className="toggle-feedbacks-btn"
                  onClick={() => setShowAllFeedbacks(!showAllFeedbacks)}
                >
                  {showAllFeedbacks ? 'Show Less' : `View All (${allFeedbacks.length})`}
                </button>
              </div>
              
              {/* Lưới hiển thị feedback */}
              <div className="user-feedbacks-grid">
                {(showAllFeedbacks ? allFeedbacks : allFeedbacks.slice(0, 3)).map((feedback) => (
                  <div key={feedback.id} className="user-feedback-card">
                    <div className="feedback-header">
                      <div className="feedback-user">
                        <FaUser className="user-icon" />
                        <span className="user-name">{feedback.name}</span>
                      </div>
                      <div className="feedback-rating">
                        {[...Array(5)].map((_, i) => (
                          <FaStar 
                            key={i} 
                            className={`star-icon ${i < feedback.rating ? 'active' : ''}`} 
                          />
                        ))}
                      </div>
                    </div>
                    
                    <p className="feedback-message">{feedback.message}</p>
                    
                    <div className="feedback-timestamp">
                      <FaClock className="clock-icon" />
                      <span>{formatDate(feedback.timestamp)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Testimonials mẫu */}
          <div className="testimonials">
            <h3 className="testimonials-title">Featured Testimonials</h3>
            <div className="testimonial-cards">
              <div className="testimonial-card">
                <div className="testimonial-rating">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="star-icon" />
                  ))}
                </div>
                <p className="testimonial-text">
                  "Learning calligraphy here has been an incredible journey. The variety of styles and expert guidance is amazing!"
                </p>
                <p className="testimonial-author">- Sarah M.</p>
              </div>

              <div className="testimonial-card">
                <div className="testimonial-rating">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="star-icon" />
                  ))}
                </div>
                <p className="testimonial-text">
                  "The perfect blend of tradition and modern techniques. I've discovered my passion for hand lettering!"
                </p>
                <p className="testimonial-author">- David L.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feedback