import React, { useState, useEffect, useRef } from 'react'
import './App.css'

// Components
import Header from './components/common/Header'
import Navigation from './components/common/Navigation'
import Footer from './components/common/Footer'
import ScrollingTicker from './components/common/ScrollingTicker'
import VisitorCounter from './components/common/VisitorCounter'

// Sections
import HeroSection from './components/sections/HeroSection'
import TraditionalCalligraphy from './components/sections/TraditionalCalligraphy'
import ContemporaryCalligraphy from './components/sections/ContemporaryCalligraphy'
import ModernCalligraphy from './components/sections/ModernCalligraphy'
import HandLettering from './components/sections/HandLettering'
import CalligraphyFilter from './components/sections/CalligraphyFilter'
import FontShowcase from './components/sections/FontShowcase'
import AboutUs from './components/sections/AboutUs'
import ContactUs from './components/sections/ContactUs'
import Feedback from './components/sections/Feedback'

// UI Components
import Loader from './components/ui/Loader'
import ScrollToTop from './components/ui/ScrollToTop'

function App() {
  const [loading, setLoading] = useState(true)
  const [activeSection, setActiveSection] = useState('home')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const sectionsRef = useRef({})

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Improved Intersection Observer for better section tracking
    const options = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: [0, 0.1, 0.5, 0.9]
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
          setActiveSection(entry.target.id)
        }
      })
    }, options)

    // Observe all sections
    Object.values(sectionsRef.current).forEach(section => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [loading])

  const scrollToSection = (sectionId) => {
    const section = sectionsRef.current[sectionId]
    if (section) {
      const headerHeight = window.innerWidth >= 1024 ? 120 : 60
      const elementPosition = section.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
      setIsMobileMenuOpen(false)
    }
  }

  if (loading) {
    return <Loader />
  }

  return (
    <div className="app">
      {/* Fixed Components */}
      <VisitorCounter />
      <Header />
      <Navigation 
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      {/* Main Content - Single Page Application */}
      <main className="main-content">
        <section id="home" ref={el => sectionsRef.current.home = el}>
          <HeroSection />
        </section>

        <section id="traditional" ref={el => sectionsRef.current.traditional = el}>
          <TraditionalCalligraphy />
        </section>

        <section id="contemporary" ref={el => sectionsRef.current.contemporary = el}>
          <ContemporaryCalligraphy />
        </section>

        <section id="modern" ref={el => sectionsRef.current.modern = el}>
          <ModernCalligraphy />
        </section>

        <section id="hand-lettering" ref={el => sectionsRef.current['hand-lettering'] = el}>
          <HandLettering />
        </section>

        <section id="filter" ref={el => sectionsRef.current.filter = el}>
          <CalligraphyFilter />
        </section>


        <section id="fonts" ref={el => sectionsRef.current.fonts = el}>
          <FontShowcase />
        </section>

        <section id="about" ref={el => sectionsRef.current.about = el}>
          <AboutUs />
        </section>

        <section id="contact" ref={el => sectionsRef.current.contact = el}>
          <ContactUs />
        </section>

        <section id="feedback" ref={el => sectionsRef.current.feedback = el}>
          <Feedback />
        </section>

      </main>

      <Footer scrollToSection={scrollToSection} />
      <ScrollingTicker />
      <ScrollToTop />
    </div>
  )
}

export default App;