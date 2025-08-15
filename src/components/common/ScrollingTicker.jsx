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

  const tickerItems = [
    {
      icon: <FaCalendarAlt className="ticker-icon" />,
      text: formatDate(currentTime)
    },
    {
      icon: <FaClock className="ticker-icon" />,
      text: formatTime(currentTime)
    },
    {
      icon: <FaMapMarkerAlt className="ticker-icon" />,
      text: getLocationString()
    },
    {
      icon: null,
      text: "🎨 Welcome to Scratchy Nib - Where Every Stroke Tells a Story",
      className: "ticker-message"
    }
  ]

  return (
    <div className="ticker-container">
      <div className="ticker-content">
        <div className="ticker-track">
          {/* Repeat items 3 times for seamless scrolling */}
          {Array(3).fill(null).map((_, repeatIndex) => (
            tickerItems.map((item, itemIndex) => (
              <div key={`${repeatIndex}-${itemIndex}`} className="ticker-item">
                {item.icon}
                <span className={item.className}>{item.text}</span>
              </div>
            ))
          ))}
        </div>
      </div>
    </div>
  )
}

export default ScrollingTicker