import React from 'react';
import { Mail, ExternalLink } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="contact-icons" />,
      title: "Email",
      details: ["contact@kitsacitsolutions.com"]
    },
  ];

  const handleFormButtonClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSef1XRCW_Qon2COEwbTptFumrL7ms21UTtYS8t6sKYJ1WTjww/viewform?usp=header', '_blank');
  };

  return (
    <section className="contact-container" id="contact">
      <div className="contact-header">
        <h1 className="contact-titleee">Get In Touch</h1>
        <p className="contact-subtitle">
          We'd love to hear from you. Click the button below to fill out our contact form.
        </p>
      </div>

      <div className="contact-content">
        {/* Contact Information */}
        <div className="contact-info-section">
          <h2 className="section-title">Contact Information</h2>
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-info-card">
                <div className="contact-info-icon">
                  {info.icon}
                </div>
                <div className="contact-info-content">
                  <h3 className="contact-info-title">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="contact-info-detail">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Map Embed */}
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.1839593100044!2d78.40505047383199!3d17.498729799590585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91005237436f%3A0x7f4095d753aa9df5!2sKITSAC%20IT%20Solutions%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1749547170620!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            ></iframe>
          </div>
        </div>

        {/* Contact Form Section - Now with Button */}
        <div className="contact-form-section">
          <h2 className="section-title">Send Us a Message</h2>
          
          <div className="form-button-container">
            <div className="form-info">
              <p className="form-description">
                Ready to get started? Click the button below to access our detailed contact form where you can tell us about your project requirements and how we can help you.
              </p>
            </div>
            
            <button
              onClick={handleFormButtonClick}
              className="contact-form-btn"
            >
              <ExternalLink className="btn-icon" />
              Open Contact Form
            </button>
            
            <div className="form-features">
              <div className="feature-item">
                <span className="feature-dot"></span>
                <span>Quick and easy to fill</span>
              </div>
              <div className="feature-item">
                <span className="feature-dot"></span>
                <span>Secure and private</span>
              </div>
              <div className="feature-item">
                <span className="feature-dot"></span>
                <span>Fast response guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;