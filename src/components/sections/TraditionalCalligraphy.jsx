import React from 'react'
import { FaScroll, FaFeatherAlt, FaBook } from 'react-icons/fa'
import './TraditionalCalligraphy.css'
import stylesData from '../../data/traditionalCalligraphy.json'

// Icon mapping object
const iconMap = {
  'FaScroll': <FaScroll />,
  'FaFeatherAlt': <FaFeatherAlt />,
  'FaBook': <FaBook />
}

// Đây là component chính để hiển thị các phong cách thư pháp truyền thống
const TraditionalCalligraphy = () => {
  // Map data từ JSON và thêm React icons
  const styles = stylesData.map(style => ({
    ...style,
    icon: iconMap[style.icon]
  }))

  return (
    // Phần bao bọc chính của component
    <div className="traditional-section">
      <div className="container">
        {/* Phần tiêu đề và mô tả ngắn */}
        <div className="section-header">
          <h2 className="section-title">Traditional Calligraphy</h2>
          <p className="section-subtitle">
            Discover the timeless art of beautiful writing that has shaped human communication for millennia
          </p>
        </div>

        {/* Lưới hiển thị các phong cách thư pháp */}
        <div className="styles-grid">
          {/* Dùng `map` để render từng phong cách trong mảng `styles` */}
          {styles.map((style, index) => (
            <div
              key={index} // Key để React tối ưu việc render
              className="style-card" // Class CSS cho thẻ card
            >
              {/* Phần hình ảnh của card */}
              <div className="card-image">
                <img src={style.image} alt={style.name} />
                <div className="image-overlay">
                  <div className="style-icon">{style.icon}</div>
                </div>
              </div>
              {/* Phần nội dung của card */}
              <div className="card-content">
                <h3 className="style-name">{style.name}</h3>
                <p className="style-description">{style.description}</p>
                {/* Các đặc điểm (hiển thị dưới dạng tag) */}
                <div className="characteristics">
                  {style.characteristics.map((char, i) => (
                    <span key={i} className="characteristic-tag">{char}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default TraditionalCalligraphy // Xuất component để sử dụng ở file khác