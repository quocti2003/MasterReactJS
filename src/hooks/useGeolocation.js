import { useState, useEffect } from 'react'

const useGeolocation = () => {
  const [location, setLocation] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser')
      setLoading(false)
      return
    }

    const successHandler = async (position) => {
      try {
        const { latitude, longitude } = position.coords
        
        // Use Nominatim API for reverse geocoding (free and no API key required)
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&accept-language=en`
        )
        
        if (!response.ok) {
          throw new Error('Failed to fetch location data')
        }
        
        const data = await response.json()
        
        // Extract location details from the response
        const locationData = {
          latitude,
          longitude,
          city: data.address?.city || 
                data.address?.town || 
                data.address?.village || 
                data.address?.suburb ||
                data.address?.district ||
                'Unknown City',
          country: data.address?.country || 'Unknown Country',
          region: data.address?.state || 
                  data.address?.province || 
                  data.address?.region || 
                  '',
          timestamp: new Date().toISOString()
        }
        
        setLocation(locationData)
        setLoading(false)
      } catch (err) {
        console.error('Geolocation error:', err)
        // Fallback to basic location if API fails
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          city: 'Location detected',
          country: 'Please enable location services',
          region: '',
          timestamp: new Date().toISOString()
        })
        setLoading(false)
      }
    }

    const errorHandler = (error) => {
      switch(error.code) {
        case error.PERMISSION_DENIED:
          setError('Location permission denied')
          break
        case error.POSITION_UNAVAILABLE:
          setError('Location information unavailable')
          break
        case error.TIMEOUT:
          setError('Location request timed out')
          break
        default:
          setError('An unknown error occurred')
      }
      setLoading(false)
    }

    const options = {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 60000 // Cache for 1 minute
    }

    navigator.geolocation.getCurrentPosition(
      successHandler,
      errorHandler,
      options
    )
  }, [])

  return { location, loading, error }
}

export default useGeolocation