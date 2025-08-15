import React from 'react'
import VisitorCounter from './VisitorCounter'
import Navigation from './Navigation'
import './CompactHeader.css'

const CompactHeader = ({ activeSection, scrollToSection, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  return (
    <div className="compact-header">
      <div className="compact-header-content">
        <h1 className="compact-title calligraphic-title">
          Scratchy Nib
        </h1>
        <div className="compact-visitor">
          <VisitorCounter />
        </div>
      </div>
      <Navigation 
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
    </div>
  )
}

export default CompactHeader