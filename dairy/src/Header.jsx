import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDropdownToggle = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const menuItems = [
    { name: 'Home', href: '/' },
    {
      name: 'Services',
      href: '#services',
      dropdown: [
        { name: 'Software Development', href: '#web-dev' },
        { name: 'Project Outsourcing', href: '#mobile-apps' },
        { name: 'HR Consultancy', href: '#cloud' },
        { name: 'BPO Service', href: '#ai-ml' },
        { name: 'Medical Billing', href: '#devops' }
      ]
    },
    {
      name: 'Solutions',
      href: '#solutions',
      dropdown: [
        { name: 'Enterprise Software', href: '#enterprise' },
        { name: 'E-commerce', href: '#ecommerce' },
        { name: 'CRM Systems', href: '#crm' },
        { name: 'Custom Software', href: '#custom' }
      ]
    },
    { name: 'Career', href: '/career' }, 
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        {/* Logo */}
        <Link to="/" className="logo">
  <div className="logo-container">
    <img src="https://kitsacitsolutions.com/img/akashay%20logo.jpg" alt="Logo" className="logo-image" />
  </div>
  <span className="logo-text">
    Kitsac
    <span className="logo-subtitle">IT Solutions Pvt Ltd</span>
  </span>
</Link>


        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-menu">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`nav-item ${item.dropdown ? 'has-dropdown' : ''}`}
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
              >
                {item.href.startsWith('/') ? (
                  <Link to={item.href} className="nav-link">
                    {item.name}
                  </Link>
                ) : (
                  <a href={item.href} className="nav-link">
                    {item.name}
                    {item.dropdown && (
                      <svg className="dropdown-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <polyline points="6,9 12,15 18,9"></polyline>
                      </svg>
                    )}
                  </a>
                )}
                {item.dropdown && (
                  <div className={`dropdown-menu ${activeDropdown === item.name ? 'active' : ''}`}>
                    {item.dropdown.map((dropItem, dropIndex) => (
                      <a key={dropIndex} href={dropItem.href} className="dropdown-link">
                        {dropItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button */}
        <div className="header-cta">
         <button 
  className="cta-button"
  onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSef1XRCW_Qon2COEwbTptFumrL7ms21UTtYS8t6sKYJ1WTjww/viewform', '_blank')}
>
  <span>Get Started</span>
  <div className="button-glow"></div>
</button>

        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-nav-content">
          {menuItems.map((item, index) => (
            <div key={index} className="mobile-nav-item">
              {item.href.startsWith('/') ? (
                <Link 
                  to={item.href} 
                  className="mobile-nav-link"
                  onClick={() => !item.dropdown && setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ) : (
                <a 
                  href={item.href} 
                  className="mobile-nav-link"
                  onClick={() => !item.dropdown && setIsMobileMenuOpen(false)}
                >
                  {item.name}
                  {item.dropdown && (
                    <button
                      className="mobile-dropdown-toggle"
                      onClick={(e) => {
                        e.preventDefault();
                        handleDropdownToggle(item.name);
                      }}
                    >
                      <svg 
                        className={`dropdown-arrow ${activeDropdown === item.name ? 'rotated' : ''}`}
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor"
                      >
                        <polyline points="6,9 12,15 18,9"></polyline>
                      </svg>
                    </button>
                  )}
                </a>
              )}
              {item.dropdown && (
                <div className={`mobile-dropdown ${activeDropdown === item.name ? 'active' : ''}`}>
                  {item.dropdown.map((dropItem, dropIndex) => (
                    <a 
                      key={dropIndex} 
                      href={dropItem.href} 
                      className="mobile-dropdown-link"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {dropItem.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="mobile-cta">
            <button className="cta-button mobile">
              <span>Get Started</span>
              <div className="button-glow"></div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`mobile-overlay ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>
    </header>
  );
};

export default Header;
