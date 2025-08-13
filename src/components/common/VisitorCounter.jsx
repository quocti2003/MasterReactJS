import React, { useState, useEffect } from 'react'
import { FaUsers } from 'react-icons/fa'
import './VisitorCounter.css'

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Get current count from localStorage
    let count = parseInt(localStorage.getItem('visitorCount') || '1000', 10)
    
    // Check if this is a new session
    const sessionKey = 'hasVisited'
    const hasVisited = sessionStorage.getItem(sessionKey)
    
    if (!hasVisited) {
      // Increment count for new visitors
      count += 1
      localStorage.setItem('visitorCount', count.toString())
      sessionStorage.setItem(sessionKey, 'true')
    }
    
    // Animate the counter
    const duration = 1000 // 1 second
    const steps = 20
    const increment = count / steps
    let currentCount = 0
    
    const timer = setInterval(() => {
      currentCount += increment
      if (currentCount >= count) {
        setVisitorCount(count)
        setIsLoading(false)
        clearInterval(timer)
      } else {
        setVisitorCount(Math.floor(currentCount))
      }
    }, duration / steps)
    
    return () => clearInterval(timer)
  }, [])

  const formatNumber = (num) => {
    return num.toLocaleString()
  }

  return (
    <div className="visitor-counter">
      <div className="counter-content">
        <div className="counter-icon-wrapper">
          <FaUsers className="counter-icon" />
        </div>
        <div className="counter-text">
          <span className="counter-label">Visitors</span>
          <span className={`counter-number ${isLoading ? 'loading' : ''}`}>
            {formatNumber(visitorCount)}
          </span>
        </div>
      </div>
      
      {/* Decorative gradient border */}
      <div className="counter-border"></div>
    </div>
  )
}

export default VisitorCounter