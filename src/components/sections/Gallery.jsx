import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FilterButtons from '../ui/FilterButtons'
import GalleryCard from '../ui/GalleryCard'
import './Gallery.css'

const Gallery = () => {
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)

  const galleryItems = [
    {
      id: 1,
      title: 'Arabic Calligraphy',
      category: 'arabic',
      image: '/images/arabic/arabic1.jpg',
      description: 'Beautiful flowing Arabic script with geometric patterns'
    },
    {
      id: 2,
      title: 'Chinese Characters',
      category: 'chinese',
      image: '/images/chinese/chinese1.jpg',
      description: 'Traditional Chinese brush calligraphy'
    },
    {
      id: 3,
      title: 'Greek Letters',
      category: 'greek',
      image: '/images/greek/greek1.jpg',
      description: 'Classical Greek letterforms'
    },
    {
      id: 4,
      title: 'Indic Scripts',
      category: 'indic',
      image: '/images/indic/indic1.jpg',
      description: 'Sanskrit and Devanagari calligraphy'
    },
    {
      id: 5,
      title: 'Gothic Style',
      category: 'western',
      image: '/images/western/gothic1.jpg',
      description: 'Medieval Gothic blackletter'
    },
    {
      id: 6,
      title: 'Modern Brush',
      category: 'modern',
      image: '/images/modern/modern1.jpg',
      description: 'Contemporary brush lettering'
    },
    {
      id: 7,
      title: 'Japanese Kanji',
      category: 'japanese',
      image: '/images/japanese/japanese1.jpg',
      description: 'Elegant Japanese calligraphy'
    },
    {
      id: 8,
      title: 'Copperplate',
      category: 'western',
      image: '/images/western/copperplate1.jpg',
      description: 'Classic Copperplate script'
    }
  ]

  const filters = [
    { value: 'all', label: 'All Styles' },
    { value: 'arabic', label: 'Arabic' },
    { value: 'chinese', label: 'Chinese' },
    { value: 'japanese', label: 'Japanese' },
    { value: 'greek', label: 'Greek' },
    { value: 'indic', label: 'Indic' },
    { value: 'western', label: 'Western' },
    { value: 'modern', label: 'Modern' }
  ]

  const filteredItems = selectedFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedFilter)

  return (
    <div className="gallery-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Calligraphy Gallery</h2>
          <p className="section-subtitle">
            Explore diverse calligraphic styles from around the world
          </p>
        </motion.div>

        <FilterButtons 
          filters={filters}
          selectedFilter={selectedFilter}
          onFilterChange={setSelectedFilter}
        />

        <motion.div 
          className="gallery-grid"
          layout
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <GalleryCard
                key={item.id}
                item={item}
                index={index}
                onClick={() => setSelectedImage(item)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal for enlarged image */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                className="modal-content"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  className="modal-close"
                  onClick={() => setSelectedImage(null)}
                >
                  ×
                </button>
                <img 
                  src={selectedImage.image} 
                  alt={selectedImage.title}
                  className="modal-image"
                />
                <div className="modal-info">
                  <h3>{selectedImage.title}</h3>
                  <p>{selectedImage.description}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Gallery