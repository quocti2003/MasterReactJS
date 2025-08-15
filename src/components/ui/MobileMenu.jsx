import React from 'react';
import { FaTimes } from 'react-icons/fa';
import './MobileMenu.css';

const MobileMenu = ({ isOpen, onClose, menuItems, activeSection, scrollToSection }) => {
  const handleItemClick = (sectionId) => {
    scrollToSection(sectionId);
    onClose();
  };

  return (
    <>
      {isOpen && (
        <>
          <div
            className="mobile-menu-overlay"
            onClick={onClose}
          />
          <div className="mobile-menu-container">
            <div className="mobile-menu-header">
              <h2 className="mobile-menu-title">Menu</h2>
              <button className="mobile-menu-close" onClick={onClose}>
                <FaTimes />
              </button>
            </div>
            <nav className="mobile-menu-nav">
              {menuItems.map((item, index) => (
                <button
                  key={item.id}
                  className={`mobile-menu-item ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => handleItemClick(item.id)}
                >
                  <span className="mobile-menu-icon">{item.icon}</span>
                  <span className="mobile-menu-label">{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </>
      )}
    </>
  );
};

export default MobileMenu;