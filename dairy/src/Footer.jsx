import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Github,
  Mail,
  Phone,
  MapPin,
  Send
} from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' }
    ],
    services: [
      { name: 'Web Development', href: '/services/web' },
      { name: 'Mobile Apps', href: '/services/mobile' },
      { name: 'Consulting', href: '/services/consulting' },
      { name: 'Support', href: '/support' }
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Documentation', href: '/docs' },
      { name: 'Help Center', href: '/help' },
      { name: 'Community', href: '/community' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'GDPR', href: '/gdpr' }
    ]
  };

  const socialLinks = [
   
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/kitsac-it-sloultions/', icon: Linkedin },
    { name: 'Instagram', href: 'https://www.instagram.com/kitsac_pvt.ltd/', icon: Instagram }
  ];

  const contactInfo = [
    { icon: Mail, text: 'contact@kitsacitsolutions.com', href: 'contact@kitsacitsolutions.com' },
    { icon: MapPin, text: 'Kitsac IT Solutions Pvt.Ltd', href: 'https://www.google.com/maps/place/KITSAC+IT+Solutions+Pvt+Ltd/@17.4987298,78.4050505,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb91005237436f:0x7f4095d753aa9df5!8m2!3d17.4987247!4d78.4076254!16s%2Fg%2F11yc0z79sw?entry=ttu&g_ep=EgoyMDI1MDYwOC4wIKXMDSoASAFQAw%3D%3D' }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Company Info */}
          <div className="footer-section footer-brand">
            <div className="footer-logo">
                 <div className="logo-container">
  <img src="https://kitsacitsolutions.com/img/akashay%20logo.jpg" alt="Logo" className="logo-image" />
</div>
            </div>
            <p className="footer-description">
              Building innovative solutions that transform businesses and enhance user experiences. 
              We're committed to excellence in everything we do.
            </p>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  className="social-link"
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div className="footer-links">
            <div className="footer-column">
              <h4 className="footer-title">Company</h4>
              <ul className="footer-list">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer-link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-title">Services</h4>
              <ul className="footer-list">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer-link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-title">Resources</h4>
              <ul className="footer-list">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer-link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-title">Legal</h4>
              <ul className="footer-list">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer-link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="footer-section footer-contact">
            <h4 className="footer-title">Get in Touch</h4>
            <div className="contact-info">
              {contactInfo.map((contact, index) => (
                <a 
                  key={index}
                  href={contact.href}
                  className="contact-item"
                >
                  <contact.icon size={18} />
                  <span>{contact.text}</span>
                </a>
              ))}
            </div>
            
            {/* Newsletter Signup */}
           
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © 2024 Kitsac IT Solutions. All rights reserved.
            </p>
             <p className="copyright">
            Designed by © 2024 buildursite.ui.
            </p>
            <div className="footer-bottom-links">
              <a href="/privacy" className="footer-bottom-link">Privacy</a>
              <a href="/terms" className="footer-bottom-link">Terms</a>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;