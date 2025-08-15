import React from 'react'
import { motion } from 'framer-motion'
import './GalleryCard.css'

const GalleryCard = ({ item, index, onClick }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ y: -10 }}
      className="gallery-card"
      onClick={() => onClick(item)}
    >
      <div className="card-image-wrapper">
        <img 
          src={item.image} 
          alt={item.title}
          className="card-image"
        />
        <div className="card-overlay">
          <span className="view-text">View Details</span>
        </div>
      </div>
      <div className="card-content">
        <h3 className="card-title">{item.title}</h3>
        <p className="card-category">{item.category}</p>
        <p className="card-description">{item.description}</p>
      </div>
    </motion.div>
  )
}

export default GalleryCard