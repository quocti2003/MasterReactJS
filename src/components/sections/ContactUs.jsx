import React from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaUser, FaUsers } from 'react-icons/fa'
import './ContactUs.css'

const ContactUs = () => {
  const teamMembers = [
    {
      name: 'Edric',
      email: 'edricvn24@gmail.com',
      address: '21bis Hậu Giang, Phường Tân Sơn Nhất, TP. HCM',
      phone: '0901471134',
      role: 'Team Lead'
    },
    {
      name: 'Hoang Huynh Hieu',
      email: 'hoanghuynhhieu123333@gmail.com',
      address: '22bis Hậu Giang, Phường Tân Sơn Nhất, TP. HCM',
      phone: '0901471135',
      role: 'Developer, Business Analysist'
    },
    {
      name: 'Huy',
      email: 'huygetamped748366@gmail.com',
      address: '23bis Hậu Giang, Phường Tân Sơn Nhất, TP. HCM',
      phone: '0985367579',
      role: 'Developer, Software Architect'
    }
  ]

  return (
    <div className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Contact Our Team</h2>
          <p className="section-subtitle">
            Get in touch with our calligraphy experts for guidance and collaboration
          </p>
        </div>

        <div className="team-contact-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="member-contact-card">
              <div className="member-header">
                <div className="member-avatar">
                  <FaUser />
                </div>
                <div className="member-info">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                </div>
              </div>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <FaEnvelope />
                  </div>
                  <div className="contact-text">
                    <h4>Email</h4>
                    <a href={`mailto:${member.email}`} className="contact-link">
                      {member.email}
                    </a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="contact-text">
                    <h4>Address</h4>
                    <p>{member.address}</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <FaPhone />
                  </div>
                  <div className="contact-text">
                    <h4>Contact Number</h4>
                    <a href={`tel:${member.phone}`} className="contact-link">
                      {member.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </div>
  )
}

export default ContactUs