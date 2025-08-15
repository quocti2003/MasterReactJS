import React from 'react'
import { motion } from 'framer-motion'
import './Loader.css'

const Loader = () => {
  return (
    <div className="loader-container">
      <motion.div
        className="loader-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="pen-animation">
          <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            className="pen-svg"
          >
            <motion.path
              d="M30 90 Q60 30, 90 90"
              stroke="url(#gradient)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity
              }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#667eea" />
                <stop offset="100%" stopColor="#764ba2" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        <motion.h2
          className="loader-title calligraphic-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Scratchy Nib
        </motion.h2>
        
        <motion.p
          className="loader-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Preparing your canvas...
        </motion.p>

        <div className="loader-dots">
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
          >.</motion.span>
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
          >.</motion.span>
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
          >.</motion.span>
        </div>
      </motion.div>
    </div>
  )
}

export default Loader