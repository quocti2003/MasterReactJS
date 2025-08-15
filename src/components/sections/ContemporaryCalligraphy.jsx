import React from 'react'
import { motion } from 'framer-motion' // Thư viện tạo animation
import './ContemporaryCalligraphy.css'

const ContemporaryCalligraphy = () => {
  // Dữ liệu các phong cách thư pháp hiện đại
  const styles = [
    {
      title: 'Brush Lettering',
      description: 'Modern interpretation using brush pens and markers',
      features: ['Flexible strokes', 'Bold colors', 'Dynamic compositions']
    },
    {
      title: 'Digital Calligraphy',
      description: 'Combining traditional techniques with digital tools',
      features: ['iPad lettering', 'Vector graphics', 'Animated text']
    },
    {
      title: 'Mixed Media',
      description: 'Incorporating various materials and techniques',
      features: ['Watercolor backgrounds', 'Gold leafing', 'Texture overlays']
    },
    {
      title: 'Experimental Scripts',
      description: 'Pushing boundaries with innovative letterforms',
      features: ['Abstract shapes', 'Deconstructed letters', 'Artistic freedom']
    }
  ]

  return (
    // Section chính
    <div className="contemporary-section">
      <div className="container">
        {/* Header có animation xuất hiện */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} // Trạng thái ban đầu
          whileInView={{ opacity: 1, y: 0 }} // Trạng thái khi xuất hiện
          transition={{ duration: 0.6 }} // Thời gian animation
          className="section-header"
        >
          <h2 className="section-title">Contemporary Calligraphy</h2>
          <p className="section-subtitle">
            Where tradition meets innovation in modern artistic expression
          </p>
        </motion.div>

        {/* Container chứa các phong cách */}
        <div className="styles-container">
          {styles.map((style, index) => (
            // Mỗi item có animation riêng
            <motion.div
              key={index}
              className="style-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} // Xuất hiện từ trái/phải luân phiên
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }} // Animation delay tăng dần
            >
              {/* Số thứ tự */}
              <div className="style-number">{`0${index + 1}`}</div>
              
              {/* Nội dung phong cách */}
              <div className="style-content">
                <h3>{style.title}</h3>
                <p>{style.description}</p>
                
                {/* Danh sách đặc điểm */}
                <ul className="features-list">
                  {style.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ContemporaryCalligraphy