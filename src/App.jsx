import React, { useState, useEffect, useRef } from 'react'
// eslint-disable-next-line no-unused-vars
import { AnimatePresence } from 'framer-motion'
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
import Gallery from './components/sections/Gallery'
import AboutUs from './components/sections/AboutUs'
import ContactUs from './components/sections/ContactUs'
import Feedback from './components/sections/Feedback'
import Sitemap from './components/sections/Sitemap'
import FontShowcase from './components/sections/FontShowcase'

// UI Components
import Loader from './components/ui/Loader'

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
    // Intersection Observer for section tracking
    const options = {
      root: null,
      rootMargin: '-50% 0px',
      threshold: 0
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
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
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
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

        {/* <section id="contemporary" ref={el => sectionsRef.current.contemporary = el}>
          <ContemporaryCalligraphy />
        </section> */}

        {/* <section id="modern" ref={el => sectionsRef.current.modern = el}>
          <ModernCalligraphy />
        </section> */}

        {/* <section id="hand-lettering" ref={el => sectionsRef.current['hand-lettering'] = el}>
          <HandLettering />
        </section> */}

        <section id="gallery" ref={el => sectionsRef.current.gallery = el}>
          <Gallery />
        </section>

        <section id="fonts" ref={el => sectionsRef.current.fonts = el}>
          <FontShowcase />
        </section>

        {/* <section id="about" ref={el => sectionsRef.current.about = el}>
          <AboutUs />
        </section> */}

        <section id="contact" ref={el => sectionsRef.current.contact = el}>
          <ContactUs />
        </section>

        <section id="feedback" ref={el => sectionsRef.current.feedback = el}>
          <Feedback />
        </section>

        <section id="sitemap" ref={el => sectionsRef.current.sitemap = el}>
          <Sitemap />
        </section>
      </main>

      <Footer scrollToSection={scrollToSection} />
      <ScrollingTicker />
    </div>
  )
}

export default App;