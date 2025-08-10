import React, { useState, useEffect } from 'react'
import { FaMapMarkerAlt, FaClock, FaCalendarAlt } from 'react-icons/fa'
import useGeolocation from '../../hooks/useGeolocation'
import './ScrollingTicker.css'

const ScrollingTicker = () => {
  const [currentTime, setCurrentTime] = useState(new Date())
  const { location, loading, error } = useGeolocation()

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })
  }

  const getLocationString = () => {
    if (loading) return 'Getting location...'
    if (error) return 'Location unavailable'
    if (location) {
      return `${location.city || 'Unknown City'}, ${location.country || 'Unknown Country'}`
    }
    return 'Location unavailable'
  }

  return (
    <div className="ticker-container">
      <div className="ticker-content">
        <div className="ticker-track">
          {/* First set of items */}
          <div className="ticker-item">
            <FaCalendarAlt className="ticker-icon" />
            <span>{formatDate(currentTime)}</span>
          </div>
          
          <div className="ticker-item">
            <FaClock className="ticker-icon" />
            <span>{formatTime(currentTime)}</span>
          </div>
          
          <div className="ticker-item">
            <FaMapMarkerAlt className="ticker-icon" />
            <span>{getLocationString()}</span>
          </div>

          <div className="ticker-item">
            <span className="ticker-message">
              🎨 Welcome to Scratchy Nib - Where Every Stroke Tells a Story 
            </span>
          </div>

          {/* Duplicate set for seamless scrolling */}
          <div className="ticker-item">
            <FaCalendarAlt className="ticker-icon" />
            <span>{formatDate(currentTime)}</span>
          </div>
          
          <div className="ticker-item">
            <FaClock className="ticker-icon" />
            <span>{formatTime(currentTime)}</span>
          </div>
          
          <div className="ticker-item">
            <FaMapMarkerAlt className="ticker-icon" />
            <span>{getLocationString()}</span>
          </div>

          <div className="ticker-item">
            <span className="ticker-message">
              🎨 Welcome to Scratchy Nib - Where Every Stroke Tells a Story 
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScrollingTicker