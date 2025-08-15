import { useEffect, useRef, useState } from 'react'

const useScrollAnimation = (options = {}) => {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const defaultOptions = {
      threshold: 0.1,
      rootMargin: '0px',
      ...options
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated) {
        setIsVisible(true)
        setHasAnimated(true)
        
        // Optionally disconnect after first animation
        if (options.once) {
          observer.disconnect()
        }
      } else if (!options.once) {
        setIsVisible(entry.isIntersecting)
      }
    }, defaultOptions)

    observer.observe(element)

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [hasAnimated, options])

  return { ref, isVisible, hasAnimated }
}

export default useScrollAnimation