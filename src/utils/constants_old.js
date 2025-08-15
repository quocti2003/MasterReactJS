// Constants for Scratchy Nib Calligraphy Website
// All static data, configuration values, and constant variables

// ==================== SITE INFORMATION ====================
export const SITE_CONFIG = {
  name: 'Scratchy Nib',
  tagline: 'Where Art Meets History - The Ancient Craft of Beautiful Writing',
  description: 'Calligraphy, derived from the Greek words "kallos" (beauty) and "graphein" (to write), is an ancient art form that transforms written language into visual art. Originating over 3,000 years ago in China, this timeless craft has evolved across cultures, from Islamic geometric patterns to Western illuminated manuscripts, becoming a bridge between communication and artistic expression.',
  version: '1.0.0',
  author: 'Scratchy Nib Team'
};

// ==================== NAVIGATION MENU ITEMS ====================
export const MENU_ITEMS = [
  { id: 'home', label: 'Home', icon: '<à' },
  { id: 'traditional', label: 'Traditional', icon: '=Ü' },
  { id: 'contemporary', label: 'Contemporary', icon: '<¨' },
  { id: 'modern', label: 'Modern', icon: '(' },
  { id: 'hand-lettering', label: 'Hand Lettering', icon: '' },
  { id: 'gallery', label: 'Gallery', icon: '=¼' },
  { id: 'fonts', label: 'Typography', icon: '=$' },
  { id: 'about', label: 'About Us', icon: '9' },
  { id: 'contact', label: 'Contact', icon: '=ç' },
  { id: 'feedback', label: 'Feedback', icon: '=­' },
  { id: 'sitemap', label: 'Site Map', icon: '=ú' }
];

// ==================== CALLIGRAPHY STYLES ====================
export const CALLIGRAPHY_STYLES = {
  traditional: {
    id: 'traditional',
    name: 'Traditional Calligraphy',
    description: 'Classic forms passed down through generations',
    features: ['Copperplate', 'Spencerian', 'Foundational Hand', 'Uncial'],
    difficulty: 'Advanced',
    timeToLearn: '6-12 months',
    tools: ['Dip pen', 'India ink', 'Guidelines', 'Quality paper']
  },
  contemporary: {
    id: 'contemporary',
    name: 'Contemporary Calligraphy',
    description: 'Modern interpretations of classical techniques',
    features: ['Brush lettering', 'Modern scripts', 'Creative layouts', 'Mixed media'],
    difficulty: 'Intermediate',
    timeToLearn: '3-6 months',
    tools: ['Brush pens', 'Watercolors', 'Mixed media', 'Textured papers']
  },
  modern: {
    id: 'modern',
    name: 'Modern Calligraphy',
    description: 'Breaking traditional rules with creative freedom',
    features: ['Loose guidelines', 'Personal style', 'Digital integration', 'Experimental'],
    difficulty: 'Beginner to Advanced',
    timeToLearn: '1-3 months',
    tools: ['Various pens', 'Digital tablets', 'Creative surfaces', 'Modern inks']
  },
  handLettering: {
    id: 'hand-lettering',
    name: 'Hand Lettering & Design',
    description: 'Drawing letters as art and design elements',
    features: ['Typography design', 'Logo creation', 'Decorative elements', 'Commercial use'],
    difficulty: 'Intermediate',
    timeToLearn: '2-4 months',
    tools: ['Pencils', 'Markers', 'Digital tools', 'Design software']
  }
};

// ==================== GALLERY FILTER OPTIONS ====================
export const GALLERY_FILTERS = {
  all: { id: 'all', label: 'All Styles', icon: '<¨' },
  arabic: { id: 'arabic', label: 'Arabic', icon: '=L', culture: 'Middle Eastern' },
  chinese: { id: 'chinese', label: 'Chinese', icon: '<î', culture: 'East Asian' },
  japanese: { id: 'japanese', label: 'Japanese', icon: '<8', culture: 'East Asian' },
  greek: { id: 'greek', label: 'Greek', icon: '<Û', culture: 'European' },
  indic: { id: 'indic', label: 'Indic', icon: '=I', culture: 'South Asian' },
  western: { id: 'western', label: 'Western', icon: '', culture: 'European/American' },
  modern: { id: 'modern', label: 'Modern', icon: '=«', culture: 'Contemporary' }
};

// ==================== CONTACT INFORMATION ====================
export const CONTACT_INFO = {
  organization: 'Scratchy Nib Calligraphy Studio',
  email: 'info@scratchynib.com',
  phone: '+1 (555) 123-NILS',
  address: {
    street: '123 Artisan Avenue',
    city: 'Creative District',
    state: 'California',
    zip: '90210',
    country: 'United States'
  },
  hours: {
    weekdays: '9:00 AM - 6:00 PM',
    weekend: '10:00 AM - 4:00 PM',
    timezone: 'PST'
  },
  social: {
    instagram: '@scratchynib',
    facebook: 'ScratchyNibStudio',
    youtube: 'ScratchyNibChannel',
    pinterest: 'scratchynib'
  }
};

// ==================== ANIMATION SETTINGS ====================
export const ANIMATION_CONFIG = {
  duration: {
    fast: 0.3,
    normal: 0.6,
    slow: 1.0,
    extra_slow: 1.5
  },
  easing: {
    ease_out: 'easeOut',
    ease_in: 'easeIn',
    ease_in_out: 'easeInOut',
    bounce: 'anticipate'
  },
  stagger: {
    children: 0.1,
    items: 0.05
  },
  scroll_threshold: 0.1
};

// ==================== UI THEME COLORS ====================
export const THEME_COLORS = {
  primary: {
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
    main: '#667eea',
    secondary: '#764ba2',
    accent: '#f093fb'
  },
  navigation: {
    background: 'rgba(102, 126, 234, 0.95)',
    hover: 'rgba(255, 255, 255, 0.2)',
    active: 'rgba(255, 215, 0, 0.25)',
    active_text: '#ffd700'
  },
  text: {
    primary: '#333333',
    secondary: '#666666',
    light: '#999999',
    white: '#ffffff',
    dark: '#2c3e50'
  },
  background: {
    main: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
    section_alt: 'rgba(255, 255, 255, 0.05)',
    glass: 'rgba(255, 255, 255, 0.1)',
    overlay: 'rgba(0, 0, 0, 0.5)'
  }
};

// ==================== RESPONSIVE BREAKPOINTS ====================
export const BREAKPOINTS = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
  large: '1200px',
  xlarge: '1440px'
};

// ==================== LOCAL STORAGE KEYS ====================
export const STORAGE_KEYS = {
  visitor_count: 'visitorCount',
  visited: 'visited',
  feedbacks: 'feedbacks',
  user_preferences: 'userPreferences',
  theme: 'selectedTheme',
  last_visit: 'lastVisit'
};

// ==================== FORM VALIDATION ====================
export const VALIDATION_RULES = {
  name: {
    min_length: 2,
    max_length: 50,
    required: true
  },
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    required: true,
    max_length: 100
  },
  message: {
    min_length: 10,
    max_length: 1000,
    required: true
  },
  rating: {
    min: 1,
    max: 5,
    required: true
  }
};

// ==================== SUCCESS MESSAGES ====================
export const SUCCESS_MESSAGES = {
  feedback_submitted: 'Thank you for your feedback! We appreciate your input.',
  contact_sent: 'Your message has been sent successfully. We\'ll get back to you soon!',
  newsletter_subscribed: 'Welcome! You\'ve been successfully subscribed to our newsletter.',
  form_saved: 'Your information has been saved successfully.'
};

// ==================== ERROR MESSAGES ====================
export const ERROR_MESSAGES = {
  form_validation: {
    name_required: 'Name is required',
    name_too_short: 'Name must be at least 2 characters long',
    name_too_long: 'Name cannot exceed 50 characters',
    email_required: 'Email address is required',
    email_invalid: 'Please enter a valid email address',
    message_required: 'Message is required',
    message_too_short: 'Message must be at least 10 characters long',
    message_too_long: 'Message cannot exceed 1000 characters',
    rating_required: 'Please provide a rating',
    rating_invalid: 'Rating must be between 1 and 5 stars'
  },
  network: {
    connection_error: 'Connection error. Please check your internet connection.',
    timeout: 'Request timeout. Please try again.',
    server_error: 'Server error. Please try again later.',
    not_found: 'Requested resource not found.'
  },
  geolocation: {
    permission_denied: 'Location access denied',
    position_unavailable: 'Location information unavailable',
    timeout: 'Location request timeout',
    not_supported: 'Geolocation not supported by this browser'
  }
};

// ==================== TESTIMONIALS DATA ====================
export const TESTIMONIALS = [
  {
    id: 1,
    text: "Learning calligraphy here has been an incredible journey. The variety of styles and expert guidance is amazing!",
    author: "Sarah M.",
    rating: 5,
    location: "New York, NY",
    style_learned: "Modern Calligraphy"
  },
  {
    id: 2,
    text: "The perfect blend of tradition and modern techniques. I've discovered my passion for hand lettering!",
    author: "David L.",
    rating: 5,
    location: "Los Angeles, CA",
    style_learned: "Hand Lettering"
  },
  {
    id: 3,
    text: "Exceptional quality content and beautiful presentation. Highly recommended for calligraphy enthusiasts!",
    author: "Emma R.",
    rating: 5,
    location: "Chicago, IL",
    style_learned: "Traditional Calligraphy"
  },
  {
    id: 4,
    text: "Amazing resource for learning different calligraphy styles. The gallery is absolutely stunning!",
    author: "Michael K.",
    rating: 4,
    location: "Seattle, WA",
    style_learned: "Contemporary Calligraphy"
  }
];

// ==================== SECTION METADATA ====================
export const SECTION_META = {
  home: {
    title: 'Welcome to Scratchy Nib',
    description: 'Discover the beautiful world of calligraphy'
  },
  traditional: {
    title: 'Traditional Calligraphy',
    description: 'Classic techniques passed down through generations'
  },
  contemporary: {
    title: 'Contemporary Calligraphy',
    description: 'Modern interpretations of timeless art'
  },
  modern: {
    title: 'Modern Calligraphy',
    description: 'Creative freedom meets artistic expression'
  },
  'hand-lettering': {
    title: 'Hand Lettering & Design',
    description: 'Letters as art and design elements'
  },
  gallery: {
    title: 'Calligraphy Gallery',
    description: 'Explore styles from around the world'
  },
  fonts: {
    title: 'Typography & Fonts',
    description: 'Understanding letterforms and font characteristics'
  },
  about: {
    title: 'About Scratchy Nib',
    description: 'Our story and passion for calligraphy'
  },
  contact: {
    title: 'Contact Us',
    description: 'Get in touch with our calligraphy experts'
  },
  feedback: {
    title: 'Share Your Feedback',
    description: 'We value your thoughts and experiences'
  },
  sitemap: {
    title: 'Site Map',
    description: 'Navigate through all our content'
  }
};

// ==================== DEFAULT VALUES ====================
export const DEFAULTS = {
  visitor_count: 1247,
  feedback_rating: 5,
  animation_delay: 0.1,
  scroll_offset: 140,
  debounce_delay: 300,
  throttle_limit: 100,
  geolocation_timeout: 5000,
  form_auto_save_delay: 2000
};