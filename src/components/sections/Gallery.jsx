import React, { useState } from 'react'
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
      image: '/calligraphy-images/arabic/arabic1.jpg',
      description: 'Beautiful flowing Arabic script with geometric patterns'
    },
    {
      id: 2,
      title: 'Chinese Characters',
      category: 'chinese',
      image: '/calligraphy-images/chinese/chinese1.jpg',
      description: 'Traditional Chinese brush calligraphy'
    },
    {
      id: 3,
      title: 'Greek Letters',
      category: 'greek',
      image: '/calligraphy-images/greek/greek1.jpg',
      description: 'Classical Greek letterforms'
    },
    {
      id: 4,
      title: 'Indic Scripts',
      category: 'indic',
      image: '/calligraphy-images/indic/indic1.jpg',
      description: 'Sanskrit and Devanagari calligraphy'
    },
    {
      id: 5,
      title: 'Gothic Style',
      category: 'western',
      image: '/calligraphy-images/western/gothic1.jpg',
      description: 'Medieval Gothic blackletter'
    },
    {
      id: 6,
      title: 'Modern Brush',
      category: 'modern',
      image: '/calligraphy-images/modern/modern1.jpg',
      description: 'Contemporary brush lettering'
    },
    {
      id: 7,
      title: 'Japanese Kanji',
      category: 'japanese',
      image: 'https://drive.google.com/file/d/1RfOVFqk0Gq7lTSP_5c2r_Bv3BvNIRgPV/view?usp=sharing',
      description: 'Elegant Japanese calligraphy'
    },
    {
      id: 8,
      title: 'Copperplate',
      category: 'western',
      image: '/calligraphy-images/western/copperplate1.jpg',
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
        <div className="section-header">
          <h2 className="section-title">Calligraphy Gallery</h2>
          <p className="section-subtitle">
            Explore diverse calligraphic styles from around the world
          </p>
        </div>

        <FilterButtons 
          filters={filters}
          selectedFilter={selectedFilter}
          onFilterChange={setSelectedFilter}
        />

        <div className="gallery-grid">
            {filteredItems.map((item, index) => (
              <GalleryCard
                key={item.id}
                item={item}
                index={index}
                onClick={() => setSelectedImage(item)}
              />
            ))}
        </div>

        {/* Modal for enlarged image */}
        {selectedImage && (
          <div
            className="modal-overlay"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="modal-content"
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
              </div>
            </div>
          )}
      </div>
    </div>
  )
}

export default Gallery