import React, { useState, useEffect } from 'react'
import { 
  FaBars, 
  FaTimes, 
  FaHome, 
  FaScroll, 
  FaPaintBrush, 
  FaPenFancy, 
  FaPenNib, 
  FaFilter,
  FaImages, 
  FaFont, 
  FaInfoCircle, 
  FaEnvelope, 
  FaCommentAlt,
  FaSitemap 
} from 'react-icons/fa'
import './Navigation.css'

const Navigation = ({ activeSection, scrollToSection, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false)

  const menuItems = [
    { id: 'home', label: 'Home', icon: <FaHome /> },
    { id: 'traditional', label: 'Traditional', icon: <FaScroll /> },
    { id: 'contemporary', label: 'Contemporary', icon: <FaPaintBrush /> },
    { id: 'modern', label: 'Modern', icon: <FaPenFancy /> },
    { id: 'hand-lettering', label: 'Hand Lettering', icon: <FaPenNib /> },
    { id: 'filter', label: 'Gallery', icon: <FaImages /> },
    { id: 'fonts', label: 'Typography', icon: <FaFont /> },
    { id: 'about', label: 'About Us', icon: <FaInfoCircle /> },
    { id: 'contact', label: 'Contact', icon: <FaEnvelope /> },
    { id: 'feedback', label: 'Feedback', icon: <FaCommentAlt /> }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="nav-wrapper">
            {/* Mobile Menu Toggle */}
            <button 
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Mobile Logo */}
            <h2 className="mobile-logo">Scratchy Nib</h2>

            {/* Desktop Navigation */}
            <ul className="nav-menu desktop-menu">
              {menuItems.map((item, index) => (
                <li key={item.id}>
                  <button
                    className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                    onClick={() => scrollToSection(item.id)}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                    }}
                  >
                    <span className="nav-icon">{item.icon}</span>
                    <span className="nav-label">{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          <div
            className="mobile-menu-overlay"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="mobile-menu">
              <ul className="mobile-nav-list">
                {menuItems.map((item) => (
                  <li key={item.id}>
                    <button
                      className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                      onClick={() => scrollToSection(item.id)}
                    >
                      <span className="nav-icon">{item.icon}</span>
                      <span className="nav-label">{item.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
    </>
  )
}

export default Navigation