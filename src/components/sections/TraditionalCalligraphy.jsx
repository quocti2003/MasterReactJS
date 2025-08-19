import React from 'react'
import { FaScroll, FaFeatherAlt, FaBook, FaPalette, FaGlobeAsia, FaDharmachakra, FaHistory, FaUsers, FaHeart } from 'react-icons/fa'
import './TraditionalCalligraphy.css'

// Đây là component chính để hiển thị các phong cách thư pháp truyền thống
const TraditionalCalligraphy = () => {
  // Mảng `styles` chứa thông tin về các loại thư pháp
  const styles = [
    {
      name: 'Brush Calligraphy', // Tên phong cách
      description: 'The art of writing with brush and ink, emphasizing fluid strokes and expressive character forms.', // Mô tả
      icon: <FaScroll />, // Icon đại diện (dùng thư viện react-icons)
      characteristics: ['Brush technique', 'Ink flow', 'Character expression'], // Các đặc điểm nổi bật
      image: '/public/brush-lettering.jpg' // Ảnh minh họa
    },
    {
      name: 'Pen Calligraphy',
      description: 'Elegant writing using traditional pens, focusing on consistent letterforms and classical beauty.',
      icon: <FaFeatherAlt />,
      characteristics: ['Pen control', 'Letter spacing', 'Classical forms'],
      image: '/public/pen-calligraphy.jpeg'
    },
    {
      name: 'Script Traditions',
      description: 'Time-honored writing systems that preserve cultural heritage through beautiful lettering.',
      icon: <FaBook />,
      characteristics: ['Cultural heritage', 'Traditional methods', 'Historical scripts'],
      image: '/public/script-tradition.jpg'
    }
  ]

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