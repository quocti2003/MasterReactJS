// Helper functions for Scratchy Nib Calligraphy Website
// All utility functions for UI interactions, data processing, and animations

/**
 * Smooth scroll to a specific section with offset for fixed header
 * @param {string} sectionId - The ID of the section to scroll to
 * @param {number} offset - Optional offset from top (default: 140px for header)
 */
export const scrollToSection = (sectionId, offset = 140) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

/**
 * Get current active section based on scroll position
 * @param {Array} sections - Array of section IDs
 * @param {number} offset - Offset for header height
 * @returns {string} Active section ID
 */
export const getCurrentActiveSection = (sections, offset = 140) => {
  const scrollPosition = window.scrollY + offset + 100;
  
  for (let i = sections.length - 1; i >= 0; i--) {
    const element = document.getElementById(sections[i]);
    if (element && element.offsetTop <= scrollPosition) {
      return sections[i];
    }
  }
  return sections[0] || 'home';
};

/**
 * Format date for the scrolling ticker
 * @param {Date} date - Date object to format
 * @returns {string} Formatted date string
 */
export const formatTickerDate = (date = new Date()) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  return date.toLocaleDateString('en-US', options);
};

/**
 * Format time for the scrolling ticker
 * @param {Date} date - Date object to format
 * @returns {string} Formatted time string
 */
export const formatTickerTime = (date = new Date()) => {
  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
};

/**
 * Get user's location using geolocation API
 * @returns {Promise<string>} Promise that resolves to location string
 */
export const getCurrentLocation = () => {
  return new Promise((resolve) => {
    if (!navigator.geolocation) {
      resolve('Location not available');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          // Using a simple reverse geocoding approach
          const response = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
          );
          const data = await response.json();
          resolve(`${data.city}, ${data.countryName}`);
        } catch (fetchError) {
          console.log('Geocoding error:', fetchError);
          resolve(`${latitude.toFixed(2)}°, ${longitude.toFixed(2)}°`);
        }
      },
      (geolocationError) => {
        console.log('Geolocation error:', geolocationError);
        resolve('Location unavailable');
      },
      { timeout: 5000, maximumAge: 300000 }
    );
  });
};

/**
 * Generate visitor count (stored in localStorage)
 * @returns {number} Current visitor count
 */
export const getVisitorCount = () => {
  const visited = localStorage.getItem('visited');
  let count = parseInt(localStorage.getItem('visitorCount') || '1247');
  
  if (!visited) {
    count += 1;
    localStorage.setItem('visitorCount', count.toString());
    localStorage.setItem('visited', 'true');
  }
  
  return count;
};

/**
 * Validate feedback form data
 * @param {Object} formData - Form data object
 * @returns {Object} Validation result with isValid and errors
 */
export const validateFeedbackForm = (formData) => {
  const errors = {};
  
  if (!formData.name || formData.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters long';
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.email || !emailRegex.test(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  if (!formData.message || formData.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters long';
  }
  
  if (formData.rating < 1 || formData.rating > 5) {
    errors.rating = 'Rating must be between 1 and 5 stars';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

/**
 * Store feedback data in localStorage
 * @param {Object} feedbackData - Feedback form data
 * @returns {boolean} Success status
 */
export const storeFeedback = (feedbackData) => {
  try {
    const existingFeedbacks = JSON.parse(localStorage.getItem('feedbacks') || '[]');
    const newFeedback = {
      ...feedbackData,
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      status: 'submitted'
    };
    
    existingFeedbacks.push(newFeedback);
    localStorage.setItem('feedbacks', JSON.stringify(existingFeedbacks));
    return true;
  } catch (storageError) {
    console.error('Error storing feedback:', storageError);
    return false;
  }
};

/**
 * Get stored feedbacks from localStorage
 * @returns {Array} Array of feedback objects
 */
export const getFeedbacks = () => {
  try {
    return JSON.parse(localStorage.getItem('feedbacks') || '[]');
  } catch (parseError) {
    console.error('Error retrieving feedbacks:', parseError);
    return [];
  }
};

/**
 * Debounce function for scroll events
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Throttle function for frequent events
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} Throttled function
 */
export const throttle = (func, limit) => {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

/**
 * Check if element is in viewport
 * @param {Element} element - DOM element to check
 * @param {number} threshold - Threshold percentage (0-1)
 * @returns {boolean} True if element is in viewport
 */
export const isInViewport = (element, threshold = 0.1) => {
  if (!element) return false;
  
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;
  
  const verticalThreshold = windowHeight * threshold;
  const horizontalThreshold = windowWidth * threshold;
  
  return (
    rect.top <= windowHeight - verticalThreshold &&
    rect.bottom >= verticalThreshold &&
    rect.left <= windowWidth - horizontalThreshold &&
    rect.right >= horizontalThreshold
  );
};

/**
 * Generate animation variants for Framer Motion
 * @param {string} type - Animation type (fadeIn, slideUp, slideDown, etc.)
 * @returns {Object} Framer Motion variants object
 */
export const getAnimationVariants = (type) => {
  const variants = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.6 } }
    },
    slideUp: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
    },
    slideDown: {
      hidden: { opacity: 0, y: -50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
    },
    slideLeft: {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
    },
    slideRight: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } }
    },
    stagger: {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.1
        }
      }
    }
  };
  
  return variants[type] || variants.fadeIn;
};

/**
 * Format number with comma separators
 * @param {number} num - Number to format
 * @returns {string} Formatted number string
 */
export const formatNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

/**
 * Generate random testimonial for display
 * @returns {Object} Random testimonial object
 */
export const getRandomTestimonial = () => {
  const testimonials = [
    {
      text: "Learning calligraphy here has been an incredible journey. The variety of styles and expert guidance is amazing!",
      author: "Sarah M.",
      rating: 5
    },
    {
      text: "The perfect blend of tradition and modern techniques. I've discovered my passion for hand lettering!",
      author: "David L.",
      rating: 5
    },
    {
      text: "Exceptional quality content and beautiful presentation. Highly recommended for calligraphy enthusiasts!",
      author: "Emma R.",
      rating: 5
    },
    {
      text: "Amazing resource for learning different calligraphy styles. The gallery is absolutely stunning!",
      author: "Michael K.",
      rating: 4
    }
  ];
  
  return testimonials[Math.floor(Math.random() * testimonials.length)];
};

/**
 * Check if user prefers reduced motion
 * @returns {boolean} True if user prefers reduced motion
 */
export const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};