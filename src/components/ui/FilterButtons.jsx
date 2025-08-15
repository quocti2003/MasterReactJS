import React from 'react'
import { motion } from 'framer-motion'
import './FilterButtons.css'

const FilterButtons = ({ filters, selectedFilter, onFilterChange }) => {
  return (
    <div className="filter-container">
      <div className="filter-buttons">
        {filters.map((filter, index) => (
          <motion.button
            key={filter.value}
            className={`filter-btn ${selectedFilter === filter.value ? 'active' : ''}`}
            onClick={() => onFilterChange(filter.value)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {filter.label}
          </motion.button>
        ))}
      </div>
    </div>
  )
}

export default FilterButtons