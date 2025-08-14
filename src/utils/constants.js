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
  { id: 'home', label: 'Home', icon: '🏠' },
  { id: 'traditional', label: 'Traditional', icon: '📜' },
  { id: 'contemporary', label: 'Contemporary', icon: '🎨' },
  { id: 'modern', label: 'Modern', icon: '✨' },
  { id: 'hand-lettering', label: 'Hand Lettering', icon: '✍️' },
  { id: 'gallery', label: 'Gallery', icon: '🖼️' },
  { id: 'fonts', label: 'Typography', icon: '🔤' },
  { id: 'about', label: 'About Us', icon: '👥' },
  { id: 'contact', label: 'Contact', icon: '📞' },
  { id: 'feedback', label: 'Feedback', icon: '💬' },
  { id: 'sitemap', label: 'Site Map', icon: '🗺️' }
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

// ==================== EXPANDED GALLERY FILTER OPTIONS ====================
export const GALLERY_FILTERS = {
  all: { id: 'all', label: 'All Styles', icon: '🎨' },
  
  // Arabic Calligraphy (10 categories)
  arabic: { 
    id: 'arabic', 
    label: 'Arabic', 
    icon: '🕌', 
    culture: 'Middle Eastern',
    categories: [
      { id: 'kufic', name: 'Kufic Script', description: 'Angular, geometric style' },
      { id: 'naskh', name: 'Naskh Script', description: 'Clear, readable cursive' },
      { id: 'thuluth', name: 'Thuluth Script', description: 'Elegant, flowing style' },
      { id: 'ruqah', name: 'Ruq\'ah Script', description: 'Ottoman administrative style' },
      { id: 'diwani', name: 'Diwani Script', description: 'Ornate Ottoman court style' },
      { id: 'nastaliq', name: 'Nastaliq Script', description: 'Persian flowing style' },
      { id: 'muhaqqaq', name: 'Muhaqqaq Script', description: 'Classical proportioned style' },
      { id: 'tawqi', name: 'Tawqi Script', description: 'Chancellery script' },
      { id: 'maghribi', name: 'Maghribi Script', description: 'North African style' },
      { id: 'modern_arabic', name: 'Modern Arabic', description: 'Contemporary interpretations' }
    ]
  },
  
  // Chinese Calligraphy (10 categories)
  chinese: { 
    id: 'chinese', 
    label: 'Chinese', 
    icon: '🐉', 
    culture: 'East Asian',
    categories: [
      { id: 'kaishu', name: 'Kaishu (Regular)', description: 'Standard block script' },
      { id: 'xingshu', name: 'Xingshu (Running)', description: 'Semi-cursive flowing script' },
      { id: 'caoshu', name: 'Caoshu (Cursive)', description: 'Highly stylized grass script' },
      { id: 'lishu', name: 'Lishu (Clerical)', description: 'Ancient official script' },
      { id: 'zhuanshu', name: 'Zhuanshu (Seal)', description: 'Ancient pictographic style' },
      { id: 'weibei', name: 'Weibei Script', description: 'Northern Wei dynasty style' },
      { id: 'songti', name: 'Songti Style', description: 'Song dynasty refined script' },
      { id: 'yan', name: 'Yan Zhenqing Style', description: 'Tang master\'s bold style' },
      { id: 'ou', name: 'Ouyang Xun Style', description: 'Precise structured style' },
      { id: 'modern_chinese', name: 'Modern Chinese', description: 'Contemporary calligraphy' }
    ]
  },
  
  // Japanese Calligraphy (10 categories)
  japanese: { 
    id: 'japanese', 
    label: 'Japanese', 
    icon: '🗾', 
    culture: 'East Asian',
    categories: [
      { id: 'shodo', name: 'Shodō (Way of Writing)', description: 'Traditional Japanese calligraphy' },
      { id: 'hiragana', name: 'Hiragana Script', description: 'Flowing phonetic writing' },
      { id: 'katakana', name: 'Katakana Script', description: 'Angular phonetic writing' },
      { id: 'kanji', name: 'Kanji Characters', description: 'Chinese-derived ideographs' },
      { id: 'gyosho', name: 'Gyōsho (Semi-cursive)', description: 'Flowing readable style' },
      { id: 'sosho', name: 'Sōsho (Cursive)', description: 'Highly stylized grass script' },
      { id: 'kaisho', name: 'Kaisho (Block)', description: 'Clear standard script' },
      { id: 'wayo', name: 'Wayō Style', description: 'Indigenous Japanese style' },
      { id: 'zen', name: 'Zen Calligraphy', description: 'Spiritual Buddhist writing' },
      { id: 'modern_japanese', name: 'Modern Japanese', description: 'Contemporary shodo' }
    ]
  },
  
  // Greek Calligraphy (10 categories)
  greek: { 
    id: 'greek', 
    label: 'Greek', 
    icon: '🏛️', 
    culture: 'European',
    categories: [
      { id: 'uncial', name: 'Uncial Script', description: 'Ancient rounded majuscule' },
      { id: 'minuscule', name: 'Minuscule Script', description: 'Medieval lowercase style' },
      { id: 'byzantine', name: 'Byzantine Script', description: 'Eastern Orthodox style' },
      { id: 'epigraphic', name: 'Epigraphic Style', description: 'Stone inscription letters' },
      { id: 'cursive_greek', name: 'Greek Cursive', description: 'Flowing connected style' },
      { id: 'majuscule', name: 'Majuscule Script', description: 'Ancient capital letters' },
      { id: 'paleography', name: 'Paleographic Style', description: 'Manuscript writing' },
      { id: 'orthodox', name: 'Orthodox Liturgical', description: 'Church ceremonial style' },
      { id: 'humanist_greek', name: 'Humanist Greek', description: 'Renaissance revival style' },
      { id: 'modern_greek', name: 'Modern Greek', description: 'Contemporary calligraphy' }
    ]
  },
  
  // Indic Calligraphy (10 categories)
  indic: { 
    id: 'indic', 
    label: 'Indic', 
    icon: '🕉️', 
    culture: 'South Asian',
    categories: [
      { id: 'devanagari', name: 'Devanagari Script', description: 'Sanskrit and Hindi script' },
      { id: 'bengali', name: 'Bengali Script', description: 'Curved Eastern script' },
      { id: 'tamil', name: 'Tamil Script', description: 'Ancient South Indian script' },
      { id: 'gujarati', name: 'Gujarati Script', description: 'Western Indian script' },
      { id: 'kannada', name: 'Kannada Script', description: 'South Indian rounded script' },
      { id: 'telugu', name: 'Telugu Script', description: 'Andhra Pradesh script' },
      { id: 'malayalam', name: 'Malayalam Script', description: 'Kerala circular script' },
      { id: 'gurmukhi', name: 'Gurmukhi Script', description: 'Sikh sacred script' },
      { id: 'oriya', name: 'Odia Script', description: 'Eastern Indian script' },
      { id: 'sanskrit', name: 'Sanskrit Calligraphy', description: 'Sacred language writing' }
    ]
  },
  
  // Korean Calligraphy (10 categories)
  korean: { 
    id: 'korean', 
    label: 'Korean', 
    icon: '🇰🇷', 
    culture: 'East Asian',
    categories: [
      { id: 'hangul', name: 'Hangul Script', description: 'Korean alphabet system' },
      { id: 'hanja', name: 'Hanja Characters', description: 'Korean Chinese characters' },
      { id: 'jeongja', name: 'Jeongja (Standard)', description: 'Formal block style' },
      { id: 'heulrimche', name: 'Heulrimche (Cursive)', description: 'Flowing connected style' },
      { id: 'gungche', name: 'Gungche (Palace)', description: 'Royal court calligraphy' },
      { id: 'minseo', name: 'Minseo (Folk)', description: 'Common people\'s writing' },
      { id: 'seoye', name: 'Seoye (Calligraphy)', description: 'Artistic brush writing' },
      { id: 'modern_hangul', name: 'Modern Hangul', description: 'Contemporary Korean style' },
      { id: 'traditional_hanja', name: 'Traditional Hanja', description: 'Classical Chinese-Korean' },
      { id: 'mixed_script', name: 'Mixed Script', description: 'Hangul-Hanja combination' }
    ]
  },
  
  // Hebrew Calligraphy (10 categories)
  hebrew: { 
    id: 'hebrew', 
    label: 'Hebrew', 
    icon: '✡️', 
    culture: 'Middle Eastern',
    categories: [
      { id: 'ashuri', name: 'Ashuri Script', description: 'Square Hebrew letters' },
      { id: 'rashi', name: 'Rashi Script', description: 'Medieval commentary style' },
      { id: 'sephardic', name: 'Sephardic Style', description: 'Spanish-Jewish tradition' },
      { id: 'ashkenazi', name: 'Ashkenazi Style', description: 'European Jewish tradition' },
      { id: 'stam', name: 'STaM Script', description: 'Torah scroll writing' },
      { id: 'cursive_hebrew', name: 'Hebrew Cursive', description: 'Flowing modern style' },
      { id: 'mizrahi', name: 'Mizrahi Style', description: 'Middle Eastern Jewish style' },
      { id: 'yemenite', name: 'Yemenite Script', description: 'Yemenite Jewish tradition' },
      { id: 'kabbalistic', name: 'Kabbalistic Script', description: 'Mystical Hebrew writing' },
      { id: 'modern_hebrew', name: 'Modern Hebrew', description: 'Contemporary Israeli style' }
    ]
  },
  
  // Cyrillic Calligraphy (10 categories)
  cyrillic: { 
    id: 'cyrillic', 
    label: 'Cyrillic', 
    icon: '☦️', 
    culture: 'Eastern European',
    categories: [
      { id: 'church_slavonic', name: 'Church Slavonic', description: 'Orthodox liturgical script' },
      { id: 'russian_calligraphy', name: 'Russian Calligraphy', description: 'Traditional Russian style' },
      { id: 'bulgarian', name: 'Bulgarian Script', description: 'Bulgarian calligraphic style' },
      { id: 'serbian', name: 'Serbian Script', description: 'Serbian Orthodox style' },
      { id: 'macedonian', name: 'Macedonian Script', description: 'Macedonian calligraphy' },
      { id: 'ukrainian', name: 'Ukrainian Script', description: 'Ukrainian decorative style' },
      { id: 'vyaz', name: 'Vyaz Script', description: 'Ornamental interlaced style' },
      { id: 'poluustav', name: 'Poluustav Script', description: 'Semi-uncial Cyrillic' },
      { id: 'ustav', name: 'Ustav Script', description: 'Formal church script' },
      { id: 'modern_cyrillic', name: 'Modern Cyrillic', description: 'Contemporary Slavic styles' }
    ]
  },
  
  // Thai Calligraphy (10 categories)
  thai: { 
    id: 'thai', 
    label: 'Thai', 
    icon: '🇹🇭', 
    culture: 'Southeast Asian',
    categories: [
      { id: 'thai_script', name: 'Thai Script', description: 'Traditional Thai writing' },
      { id: 'khom', name: 'Khom Script', description: 'Sacred Khmer-derived script' },
      { id: 'lanna', name: 'Lanna Script', description: 'Northern Thai script' },
      { id: 'fak_kham', name: 'Fak Kham Script', description: 'Decorative gold script' },
      { id: 'mul', name: 'Mul Script', description: 'Ancient Thai script' },
      { id: 'lai_sue', name: 'Lai Sue Script', description: 'Shan-Thai script' },
      { id: 'buddhist_thai', name: 'Buddhist Thai', description: 'Religious manuscript style' },
      { id: 'royal_thai', name: 'Royal Thai', description: 'Court ceremonial script' },
      { id: 'modern_thai', name: 'Modern Thai', description: 'Contemporary Thai calligraphy' },
      { id: 'decorative_thai', name: 'Decorative Thai', description: 'Ornamental Thai lettering' }
    ]
  },
  
  // Tibetan Calligraphy (10 categories)
  tibetan: { 
    id: 'tibetan', 
    label: 'Tibetan', 
    icon: '🏔️', 
    culture: 'Himalayan',
    categories: [
      { id: 'uchen', name: 'Uchen Script', description: 'Headed Tibetan letters' },
      { id: 'ume', name: 'Ume Script', description: 'Headless cursive script' },
      { id: 'phyag_yig', name: 'Phyag-yig Script', description: 'Fast cursive style' },
      { id: 'khyug_yig', name: 'Khyug-yig Script', description: 'Running script style' },
      { id: 'tsugs_thung', name: 'Tsugs-thung Script', description: 'Short-headed style' },
      { id: 'brtags_gsar', name: 'Brtags-gsar Script', description: 'New spell style' },
      { id: 'dbu_can', name: 'Dbu-can Script', description: 'With-head formal script' },
      { id: 'dbu_med', name: 'Dbu-med Script', description: 'Headless informal script' },
      { id: 'lantsa', name: 'Lantsa Script', description: 'Sanskrit-Tibetan ornate style' },
      { id: 'modern_tibetan', name: 'Modern Tibetan', description: 'Contemporary Tibetan writing' }
    ]
  },
  
  western: { id: 'western', label: 'Western', icon: '🖋️', culture: 'European/American' },
  modern: { id: 'modern', label: 'Modern', icon: '🎨', culture: 'Contemporary' }
};

// Rest of the constants remain the same...
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

export const BREAKPOINTS = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
  large: '1200px',
  xlarge: '1440px'
};

export const STORAGE_KEYS = {
  visitor_count: 'visitorCount',
  visited: 'visited',
  feedbacks: 'feedbacks',
  user_preferences: 'userPreferences',
  theme: 'selectedTheme',
  last_visit: 'lastVisit'
};

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

export const SUCCESS_MESSAGES = {
  feedback_submitted: 'Thank you for your feedback! We appreciate your input.',
  contact_sent: 'Your message has been sent successfully. We\'ll get back to you soon!',
  newsletter_subscribed: 'Welcome! You\'ve been successfully subscribed to our newsletter.',
  form_saved: 'Your information has been saved successfully.'
};

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