import { useState, useEffect } from 'react'

const useVisitorCount = () => {
  const [visitorCount, setVisitorCount] = useState(1000)

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
    
    setVisitorCount(count)
  }, [])

  return visitorCount
}

export default useVisitorCount