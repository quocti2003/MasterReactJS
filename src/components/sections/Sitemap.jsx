import React from 'react'
import './Sitemap.css'

const Sitemap = () => {
  const siteStructure = [
    {
      title: 'Main Sections',
      links: [
        { name: 'Home', description: 'Welcome to Scratchy Nib' },
        { name: 'Traditional Calligraphy', description: 'Ancient art forms and techniques' },
        { name: 'Contemporary Calligraphy', description: 'Modern interpretations of classic styles' },
        { name: 'Modern Calligraphy', description: 'Contemporary digital and artistic approaches' },
        { name: 'Hand Lettering & Design', description: 'Creative lettering and design elements' },
        { name: 'Gallery', description: 'Showcase of beautiful calligraphy works' }
      ]
    },
    {
      title: 'Information',
      links: [
        { name: 'About Us', description: 'Learn about our passion for calligraphy' },
        { name: 'Contact Us', description: 'Get in touch with us' },
        { name: 'Feedback', description: 'Share your thoughts and suggestions' }
      ]
    },
    {
      title: 'Calligraphy Styles',
      links: [
        { name: 'Arabic Calligraphy', description: 'Beautiful Arabic scripts and styles' },
        { name: 'Chinese Calligraphy', description: 'Traditional Chinese brush writing' },
        { name: 'Greek Calligraphy', description: 'Ancient Greek letter forms' },
        { name: 'Indic Scripts', description: 'Sanskrit and regional Indian scripts' },
        { name: 'Japanese Calligraphy', description: 'Shodo and Japanese writing arts' },
        { name: 'Western Calligraphy', description: 'Latin scripts and European traditions' }
      ]
    }
  ]

  return (
    <div className="sitemap-section">
      <div className="container">
        <div className="sitemap-header">
          <h2 className="section-title">Site Map</h2>
          <p className="section-description">
            Navigate through our comprehensive guide to the art of calligraphy
          </p>
        </div>

        <div className="sitemap-grid">
          {siteStructure.map((section, sectionIndex) => (
            <div
              key={section.title}
              className="sitemap-category"
            >
              <h3 className="category-title">{section.title}</h3>
              <ul className="sitemap-links">
                {section.links.map((link, linkIndex) => (
                  <li
                    key={link.name}
                    className="sitemap-link-item"
                  >
                    <div className="link-content">
                      <h4 className="link-name">{link.name}</h4>
                      <p className="link-description">{link.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="sitemap-footer">
          <p>
            Explore the rich world of calligraphy through our carefully curated sections. 
            Each page offers unique insights into this timeless art form.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Sitemap