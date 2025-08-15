import React, { useState } from 'react'
import { FaTimes, FaImages, FaStar } from 'react-icons/fa'
import './CalligraphyFilter.css'

const CalligraphyFilter = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedScript, setSelectedScript] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const calligraphyTypes = [
    {
      id: 'naskh',
      name: 'Naskh',
      type: 'Arabic Script',
      region: 'Middle East & North Africa',
      description: 'Clear, readable Arabic script commonly used for Quran',
      characteristics: ['Horizontal layout', 'Clear letterforms', 'Balanced proportions', 'Classical elegance'],
      example: 'نسخ',
      color: '#e74c3c',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400'
    },
    {
      id: 'thuluth',
      name: 'Thuluth',
      type: 'Arabic Script',
      region: 'Middle East & North Africa',
      description: 'Elegant Arabic script with elongated curves',
      characteristics: ['Curved strokes', 'Decorative style', 'Monumental use', 'Complex beauty'],
      example: 'ثلث',
      color: '#e74c3c',
      image: 'https://images.unsplash.com/photo-1580130379624-3a069adbffc5?w=600&h=400'
    },
    {
      id: 'kufic',
      name: 'Kufic',
      type: 'Arabic Script',
      region: 'Middle East & North Africa',
      description: 'Angular Arabic script with geometric forms',
      characteristics: ['Angular design', 'Geometric patterns', 'Ancient origins', 'Bold structure'],
      example: 'كوفي',
      color: '#e74c3c',
      image: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=600&h=400'
    },
    {
      id: 'diwani',
      name: 'Diwani',
      type: 'Arabic Script',
      region: 'Ottoman Empire',
      description: 'Ornate Ottoman calligraphy with flowing curves',
      characteristics: ['Flowing curves', 'Ottoman style', 'Ornamental', 'Court documents'],
      example: 'ديواني',
      color: '#e74c3c',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400'
    },
    {
      id: 'ruqah',
      name: 'Ruq\'ah',
      type: 'Arabic Script',
      region: 'Middle East',
      description: 'Simple, practical Arabic script for daily writing',
      characteristics: ['Simple forms', 'Easy to write', 'Modern usage', 'Practical design'],
      example: 'رقعة',
      color: '#e74c3c',
      image: 'https://images.unsplash.com/photo-1580130379624-3a069adbffc5?w=600&h=400'
    },
    {
      id: 'devanagari',
      name: 'Devanagari',
      type: 'Indic Script',
      region: 'South Asia',
      description: 'Sanskrit and Hindi script with horizontal line',
      characteristics: ['Horizontal line on top', 'Complex conjuncts', 'Sacred texts', 'Geometric forms'],
      example: 'देवनागरी',
      color: '#f39c12',
      image: 'https://images.unsplash.com/photo-1524230659092-07f99a75c013?w=600&h=400'
    },
    {
      id: 'bengali',
      name: 'Bengali',
      type: 'Indic Script',
      region: 'Bengal',
      description: 'Rounded script used for Bengali and Assamese',
      characteristics: ['Rounded forms', 'Flowing curves', 'Cultural heritage', 'Literary tradition'],
      example: 'বাংলা',
      color: '#f39c12',
      image: 'https://images.unsplash.com/photo-1544986581-efac024faf62?w=600&h=400'
    },
    {
      id: 'tamil',
      name: 'Tamil',
      type: 'Indic Script',
      region: 'South India',
      description: 'Ancient script with circular and curved forms',
      characteristics: ['Circular forms', 'Ancient origins', 'No horizontal line', 'Curved beauty'],
      example: 'தமிழ்',
      color: '#f39c12',
      image: 'https://images.unsplash.com/photo-1533122250115-6bb28e9a48c3?w=600&h=400'
    },
    {
      id: 'telugu',
      name: 'Telugu',
      type: 'Indic Script',
      region: 'Andhra Pradesh',
      description: 'Rounded script known as Italian of the East',
      characteristics: ['Rounded letters', 'Elegant curves', 'Vowel marks', 'Classical beauty'],
      example: 'తెలుగు',
      color: '#f39c12',
      image: 'https://images.unsplash.com/photo-1524230659092-07f99a75c013?w=600&h=400'
    },
    {
      id: 'kannada',
      name: 'Kannada',
      type: 'Indic Script',
      region: 'Karnataka',
      description: 'Rounded script with distinctive letterforms',
      characteristics: ['Rounded design', 'Unique forms', 'Ancient heritage', 'Smooth curves'],
      example: 'ಕನ್ನಡ',
      color: '#f39c12',
      image: 'https://images.unsplash.com/photo-1544986581-efac024faf62?w=600&h=400'
    },
    {
      id: 'ancient-greek',
      name: 'Ancient Greek',
      type: 'Greek Script',
      region: 'Ancient Greece',
      description: 'Classical Greek script used for literature and philosophy',
      characteristics: ['Capital letters only', 'Stone inscriptions', 'Classical texts', 'Geometric beauty'],
      example: 'ΕΛΛΗΝΙΚΑ',
      color: '#3498db',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400'
    },
    {
      id: 'byzantine',
      name: 'Byzantine',
      type: 'Greek Script',
      region: 'Byzantine Empire',
      description: 'Medieval Greek script with religious manuscripts',
      characteristics: ['Religious texts', 'Illuminated manuscripts', 'Ornate style', 'Christian heritage'],
      example: 'Βυζαντινά',
      color: '#3498db',
      image: 'https://images.unsplash.com/photo-1567613951019-9c5a35f8f9e3?w=600&h=400'
    },
    {
      id: 'modern-greek',
      name: 'Modern Greek',
      type: 'Greek Script',
      region: 'Modern Greece',
      description: 'Contemporary Greek script with simplified forms',
      characteristics: ['Upper and lowercase', 'Modern forms', 'Simplified writing', 'Contemporary use'],
      example: 'Ελληνικά',
      color: '#3498db',
      image: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=600&h=400'
    },
    {
      id: 'uncial-greek',
      name: 'Uncial Greek',
      type: 'Greek Script',
      region: 'Late Antiquity',
      description: 'Rounded Greek letterforms used in early manuscripts',
      characteristics: ['Rounded forms', 'Early manuscripts', 'Codex tradition', 'Transitional style'],
      example: 'ουγκιαλ',
      color: '#3498db',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400'
    },
    {
      id: 'kaishu',
      name: 'Kaishu (Regular)',
      type: 'Chinese Script',
      region: 'East Asia',
      description: 'Standard Chinese script with clear, readable forms',
      characteristics: ['Clear structure', 'Standard forms', 'Regular strokes', 'Printed texts'],
      example: '楷書',
      color: '#e67e22',
      image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=600&h=400'
    },
    {
      id: 'xingshu',
      name: 'Xingshu (Semi-cursive)',
      type: 'Chinese Script',
      region: 'East Asia',
      description: 'Semi-cursive Chinese script balancing speed and clarity',
      characteristics: ['Semi-cursive', 'Flowing strokes', 'Connected forms', 'Practical writing'],
      example: '行書',
      color: '#e67e22',
      image: 'https://images.unsplash.com/photo-1578228142513-9a1e0bb9f4e9?w=600&h=400'
    },
    {
      id: 'caoshu',
      name: 'Caoshu (Grass)',
      type: 'Chinese Script',
      region: 'East Asia',
      description: 'Highly cursive Chinese script with abstract forms',
      characteristics: ['Highly cursive', 'Abstract forms', 'Artistic expression', 'Swift writing'],
      example: '草書',
      color: '#e67e22',
      image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=600&h=400'
    },
    {
      id: 'lishu',
      name: 'Lishu (Clerical)',
      type: 'Chinese Script',
      region: 'Ancient China',
      description: 'Ancient Chinese script with broad, flat strokes',
      characteristics: ['Broad strokes', 'Flat forms', 'Official documents', 'Han Dynasty'],
      example: '隸書',
      color: '#e67e22',
      image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=600&h=400'
    },
    {
      id: 'zhuanshu',
      name: 'Zhuanshu (Seal)',
      type: 'Chinese Script',
      region: 'Ancient China',
      description: 'Ancient Chinese script used for seals and monuments',
      characteristics: ['Ancient forms', 'Seal carving', 'Decorative use', 'Historical importance'],
      example: '篆書',
      color: '#e67e22',
      image: 'https://images.unsplash.com/photo-1578228142513-9a1e0bb9f4e9?w=600&h=400'
    },
    {
      id: 'hiragana',
      name: 'Hiragana',
      type: 'Japanese Script',
      region: 'Japan',
      description: 'Curved Japanese syllabic script for native words',
      characteristics: ['Curved forms', 'Syllabic writing', 'Native words', 'Flowing style'],
      example: 'ひらがな',
      color: '#9b59b6',
      image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&h=400'
    },
    {
      id: 'katakana',
      name: 'Katakana',
      type: 'Japanese Script',
      region: 'Japan',
      description: 'Angular Japanese syllabic script for foreign words',
      characteristics: ['Angular forms', 'Foreign words', 'Simplified strokes', 'Modern usage'],
      example: 'カタカナ',
      color: '#9b59b6',
      image: 'https://images.unsplash.com/photo-1550439062-609e1531270e?w=600&h=400'
    },
    {
      id: 'kanji',
      name: 'Kanji',
      type: 'Japanese Script',
      region: 'Japan',
      description: 'Chinese characters adapted for Japanese writing',
      characteristics: ['Chinese origin', 'Complex meanings', 'Multiple readings', 'Ideographic'],
      example: '漢字',
      color: '#9b59b6',
      image: 'https://images.unsplash.com/photo-1578042040833-b95dfd6d5c67?w=600&h=400'
    },
    {
      id: 'shodo',
      name: 'Shodo',
      type: 'Japanese Calligraphy',
      region: 'Japan',
      description: 'Traditional Japanese brush calligraphy art',
      characteristics: ['Brush art', 'Zen philosophy', 'Artistic expression', 'Cultural practice'],
      example: '書道',
      color: '#9b59b6',
      image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&h=400'
    },
    {
      id: 'hangul',
      name: 'Hangul',
      type: 'Korean Script',
      region: 'Korea',
      description: 'Scientific Korean alphabet with syllabic blocks',
      characteristics: ['Syllabic blocks', 'Scientific design', 'Phonetic system', 'Modern innovation'],
      example: '한글',
      color: '#1abc9c',
      image: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=600&h=400'
    },
    {
      id: 'hanja',
      name: 'Hanja',
      type: 'Korean Script',
      region: 'Korea',
      description: 'Chinese characters used in Korean writing',
      characteristics: ['Chinese origin', 'Traditional use', 'Formal documents', 'Classical literature'],
      example: '漢字',
      color: '#1abc9c',
      image: 'https://images.unsplash.com/photo-1578894420191-9aaa0cf1e2b5?w=600&h=400'
    },
    {
      id: 'modern-korean',
      name: 'Modern Korean',
      type: 'Korean Script',
      region: 'Contemporary Korea',
      description: 'Contemporary Korean writing combining Hangul and Hanja',
      characteristics: ['Mixed script', 'Contemporary use', 'Digital adaptation', 'Cultural evolution'],
      example: '현대한국어',
      color: '#1abc9c',
      image: 'https://images.unsplash.com/photo-1564415315949-7a0c4c73aab4?w=600&h=400'
    },
    {
      id: 'square-hebrew',
      name: 'Square Hebrew',
      type: 'Hebrew Script',
      region: 'Middle East',
      description: 'Standard Hebrew script with square letterforms',
      characteristics: ['Square letters', 'Right-to-left', 'Religious texts', 'Classic form'],
      example: 'עברית',
      color: '#2ecc71',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400'
    },
    {
      id: 'cursive-hebrew',
      name: 'Cursive Hebrew',
      type: 'Hebrew Script',
      region: 'Modern Israel',
      description: 'Modern Hebrew script for handwriting',
      characteristics: ['Cursive forms', 'Handwriting', 'Connected letters', 'Modern use'],
      example: 'כתב יד',
      color: '#2ecc71',
      image: 'https://images.unsplash.com/photo-1567613951019-9c5a35f8f9e3?w=600&h=400'
    },
    {
      id: 'rashi-script',
      name: 'Rashi Script',
      type: 'Hebrew Script',
      region: 'Medieval Europe',
      description: 'Semi-cursive Hebrew script for rabbinical texts',
      characteristics: ['Semi-cursive', 'Rabbinical texts', 'Commentary style', 'Medieval origin'],
      example: 'רש"י',
      color: '#2ecc71',
      image: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=600&h=400'
    },
    {
      id: 'ashkenazi',
      name: 'Ashkenazi',
      type: 'Hebrew Script',
      region: 'Eastern Europe',
      description: 'Ashkenazi Jewish calligraphic tradition',
      characteristics: ['European tradition', 'Ornate style', 'Religious manuscripts', 'Cultural heritage'],
      example: 'אשכנזי',
      color: '#2ecc71',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400'
    },
    {
      id: 'church-slavonic',
      name: 'Church Slavonic',
      type: 'Cyrillic Script',
      region: 'Orthodox Christianity',
      description: 'Ancient Cyrillic script for liturgical texts',
      characteristics: ['Religious texts', 'Ancient forms', 'Orthodox tradition', 'Liturgical use'],
      example: 'Словѣньскъ',
      color: '#34495e',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400'
    },
    {
      id: 'russian-cursive',
      name: 'Russian Cursive',
      type: 'Cyrillic Script',
      region: 'Russia',
      description: 'Cursive Cyrillic script for Russian handwriting',
      characteristics: ['Cursive forms', 'Connected letters', 'Handwriting style', 'Modern use'],
      example: 'русский',
      color: '#34495e',
      image: 'https://images.unsplash.com/photo-1567613951019-9c5a35f8f9e3?w=600&h=400'
    },
    {
      id: 'bulgarian',
      name: 'Bulgarian',
      type: 'Cyrillic Script',
      region: 'Bulgaria',
      description: 'Bulgarian variant of Cyrillic script',
      characteristics: ['Bulgarian forms', 'National variant', 'Modern usage', 'Cultural identity'],
      example: 'българо',
      color: '#34495e',
      image: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=600&h=400'
    },
    {
      id: 'serbian',
      name: 'Serbian',
      type: 'Cyrillic Script',
      region: 'Serbia',
      description: 'Serbian Cyrillic with unique letterforms',
      characteristics: ['Serbian letters', 'Dual script use', 'National identity', 'Modern forms'],
      example: 'српски',
      color: '#34495e',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400'
    },
    {
      id: 'traditional-thai',
      name: 'Traditional Thai',
      type: 'Thai Script',
      region: 'Thailand',
      description: 'Classical Thai script with ornate forms',
      characteristics: ['Ornate forms', 'Classical style', 'Royal documents', 'Traditional texts'],
      example: 'ไทยโบราณ',
      color: '#e91e63',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400'
    },
    {
      id: 'modern-thai',
      name: 'Modern Thai',
      type: 'Thai Script',
      region: 'Contemporary Thailand',
      description: 'Simplified Thai script for modern use',
      characteristics: ['Simplified forms', 'Modern usage', 'Digital adaptation', 'Contemporary style'],
      example: 'ไทยสมัยใหม่',
      color: '#e91e63',
      image: 'https://images.unsplash.com/photo-1567613951019-9c5a35f8f9e3?w=600&h=400'
    },
    {
      id: 'lanna',
      name: 'Lanna',
      type: 'Thai Script',
      region: 'Northern Thailand',
      description: 'Northern Thai script with unique characteristics',
      characteristics: ['Northern style', 'Regional variant', 'Historical use', 'Cultural heritage'],
      example: 'ᨠᩦᩱᨶᩕ',
      color: '#e91e63',
      image: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=600&h=400'
    },
    {
      id: 'uchen',
      name: 'Uchen',
      type: 'Tibetan Script',
      region: 'Tibet',
      description: 'Formal Tibetan script with clear letterforms',
      characteristics: ['Formal style', 'Clear forms', 'Printed texts', 'Official use'],
      example: 'དབུ་ཅན',
      color: '#9c27b0',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400'
    },
    {
      id: 'ume',
      name: 'Ume',
      type: 'Tibetan Script',
      region: 'Tibet',
      description: 'Cursive Tibetan script for handwriting',
      characteristics: ['Cursive style', 'Handwriting', 'Flowing forms', 'Personal use'],
      example: 'དབུ་མེད',
      color: '#9c27b0',
      image: 'https://images.unsplash.com/photo-1567613951019-9c5a35f8f9e3?w=600&h=400'
    },
    {
      id: 'khyug',
      name: 'Khyug',
      type: 'Tibetan Script',
      region: 'Tibet',
      description: 'Running Tibetan script for quick writing',
      characteristics: ['Running style', 'Quick writing', 'Connected forms', 'Practical use'],
      example: 'འཁྱུག',
      color: '#9c27b0',
      image: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=600&h=400'
    }
  ]

  const filterButtons = [
    { id: 'all', label: 'All Scripts', icon: '🌍' },
    { id: 'Arabic Script', label: 'Arabic', icon: '🕌' },
    { id: 'Indic Script', label: 'Indic', icon: '🕉️' },
    { id: 'Greek Script', label: 'Greek', icon: '🏛️' },
    { id: 'Chinese Script', label: 'Chinese', icon: '🏮' },
    { id: 'Japanese Script', label: 'Japanese', icon: '🎌' },
    { id: 'Korean Script', label: 'Korean', icon: '🇰🇷' },
    { id: 'Hebrew Script', label: 'Hebrew', icon: '✡️' },
    { id: 'Cyrillic Script', label: 'Cyrillic', icon: '🪆' },
    { id: 'Thai Script', label: 'Thai', icon: '🛕' },
    { id: 'Tibetan Script', label: 'Tibetan', icon: '🏔️' }
  ]

  const filteredTypes = calligraphyTypes.filter(type => {
    const matchesFilter = activeFilter === 'all' || type.type === activeFilter
    const matchesSearch = searchTerm === '' || 
      type.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      type.region.toLowerCase().includes(searchTerm.toLowerCase()) ||
      type.type.toLowerCase().includes(searchTerm.toLowerCase())
    
    return matchesFilter && matchesSearch
  })

  return (
    <div className="calligraphy-filter-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Calligraphy Gallery & Filter</h2>
          <p className="section-subtitle">
            Discover calligraphic traditions from around the world - filter by script type and explore detailed galleries
          </p>
        </div>

        <div className="filter-controls">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search scripts, regions, or styles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="filter-buttons">
            {filterButtons.map((button) => (
              <button
                key={button.id}
                className={`filter-btn ${activeFilter === button.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(button.id)}
              >
                <span className="filter-icon">{button.icon}</span>
                <span className="filter-label">{button.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="results-count">
          {filteredTypes.length} {filteredTypes.length === 1 ? 'script' : 'scripts'} found
        </div>

        <div className="scripts-grid">
            {filteredTypes.map((script, index) => (
              <div
                key={script.id}
                className="script-card"
                style={{ '--accent-color': script.color }}
              >
                <div className="script-header">
                  <div className="script-id">#{script.id}</div>
                  <div className="script-example" style={{ color: script.color }}>
                    {script.example}
                  </div>
                </div>
                
                <div className="script-info">
                  <h3 className="script-name">{script.name}</h3>
                  <p className="script-region">{script.region}</p>
                </div>

                <div className="script-description">
                  <p>{script.description}</p>
                </div>

                <div className="learn-more-btn">
                  <button 
                    onClick={() => {
                      setSelectedScript(script)
                      setIsModalOpen(true)
                    }}
                    className="btn-learn-more"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
        </div>

        {/* Modal Popup */}
        {isModalOpen && selectedScript && (
          <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h2>{selectedScript.name} Calligraphy</h2>
                <button 
                  className="modal-close"
                  onClick={() => setIsModalOpen(false)}
                >
                  <FaTimes />
                </button>
              </div>

              <div className="modal-body">
                {/* Main Image */}
                <div className="script-main-image">
                  <img 
                    src={selectedScript.image} 
                    alt={`${selectedScript.name} calligraphy`}
                    className="main-img"
                  />
                </div>

                {/* Script Info */}
                <div className="modal-section">
                  <h3 className="script-modal-name">{selectedScript.name}</h3>
                  <p className="script-modal-type">{selectedScript.type}</p>
                </div>

                {/* Key Characteristics */}
                <div className="modal-section">
                  <h3><FaImages /> Key Characteristics</h3>
                  <ul className="characteristics-grid">
                    {selectedScript.characteristics.map((char, i) => (
                      <li key={i} className="characteristic-item">{char}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {filteredTypes.length === 0 && (
          <div className="no-results">
            <div className="no-results-icon">🔍</div>
            <h3>No scripts found</h3>
            <p>Try adjusting your search terms or filter selection</p>
          </div>
        )}

      </div>
    </div>
  )
}

export default CalligraphyFilter