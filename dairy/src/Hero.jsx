import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  ShoppingCart, 
  Globe, 
  Palette, 
  Store, 
  GraduationCap, 
  Headset, 
  Smartphone, 
  Search, 
  Mail,
  ArrowRight 
} from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
  
  });

  const rotatingTexts = [
    "Custom Web Applications",
    "Mobile App Development",
    "Cloud-Based Systems",
    "AI-Powered Solutions"
  ];

  const services = [
     {
      id: 'webdesign',
      name: 'Web Development',
      icon: Palette,
      color: '#f59e0b'
    },
    {
      id: 'hospital',
      name: 'Medical Billing Services',
      icon: Building2,
      color: '#22c55e'
    },
    // {
    //   id: 'erp',
    //   name: 'ERP Solutions',
    //   icon: ShoppingCart,
    //   color: '#3b82f6'
    // },
    // {
    //   id: 'domain',
    //   name: 'Tourism Services',
    //   icon: Globe,
    //   color: '#8b5cf6'
    // },
    {
      id: 'ecommerce',
      name: 'Ecommerce Website',
      icon: Store,
      color: '#ef4444'
    },
     {
      id: 'email',
      name: 'Email Marketing Solution',
      icon: Mail,
      color: '#14b8a6'
    },
    {
      id: 'mobile',
      name: 'Mobile App Development',
      icon: Smartphone,
      color: '#6366f1'
    },
     {
      id: 'restaurant',
      name: 'Telecalling Services',
      icon: Headset,
      color: '#84cc16'
    },
   
    {
      id: 'digital',
      name: 'Digital Marketing & SEO',
      icon: Search,
      color: '#ec4899'
    },
   {
      id: 'school',
      name: 'Internship',
      icon: GraduationCap,
      color: '#06b6d4'
    },
    
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const textInterval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);

    return () => clearInterval(textInterval);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceSelect = (serviceId) => {
    setFormData(prev => ({
      ...prev,
      service: serviceId
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission
    console.log('Form submitted:', formData);
    // You can integrate with your backend or email service
    alert('Thank you for your inquiry! We will get back to you soon.');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="home">
      {/* Animated Background */}
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="floating-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className={`particle particle-${i + 1}`}></div>
          ))}
        </div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="grid-overlay"></div>

      <div className="hero-container">
        <div className="hero-content">
          <div className={`hero-text ${isVisible ? 'animate-in' : ''}`}>
            <h1 className="hero-titles">
              <span className="title-lines">Transforming Ideas Into</span>
              <span className="title-highlight">
                <span className="rotating-text" key={currentText}>
                  {rotatingTexts[currentText]}
                </span>
              </span>
            </h1>

            <p className="hero-description">
              At Kitsac Software Solutions, we craft cutting-edge digital experiences 
              that drive innovation and accelerate business growth.
            </p>

            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">100+</span>
                <span className="stat-label">Projects Delivered</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">98%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Years Experience</span>
              </div>
            </div>

            <div className="hero-actions">
              <button 
                className="primary-btn"
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeVqUa7DcWkscFSNmHIEdIp7c00YJSjPpn7M6Vz-qYWNNTFMA/viewform', '_blank')}
              >
                <span>Let's Work Together</span>
                <div className="btn-glow"></div>
                <ArrowRight className="btn-icon" size={16} />
              </button>
            </div>
          </div>

          {/* Business Services Form */}
          <div className={`business-form-container ${isVisible ? 'animate-in' : ''}`}>
            <div className="business-form-card">
              <div className="form-header">
                <h3 className="form-title">WANT TO EXPAND YOUR BUSINESS ON THE WEB?</h3>
                <p className="form-subtitle">We can help you get started</p>
              </div>

              <form  className="business-form">
                {/* Service Selection Grid */}
                <div className="services-grids">
                  {services.map((service) => {
                    const IconComponent = service.icon;
                    return (
                      <div
                        key={service.id}
                        className={`service-item ${formData.service === service.id ? 'selected' : ''}`}
                        onClick={() => handleServiceSelect(service.id)}
                      >
                        <div className="service-icon" style={{ color: service.color }}>
                          <IconComponent size={20} />
                        </div>
                        <span className="service-name">{service.name}</span>
                      </div>
                    );
                  })}
                </div>

             

                <button type="submit" className="quote-submit-btn"
                 onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSef1XRCW_Qon2COEwbTptFumrL7ms21UTtYS8t6sKYJ1WTjww/viewform', '_blank')}
>
                  
                  <span>Get Free Quote</span>
                  <ArrowRight className="btn-icon" size={16} />
                  
                </button>

                {/* <p className="form-note">
                  We'll respond within 24 hours with a detailed proposal tailored to your needs.
                </p> */}
              </form>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="scroll-text">Scroll to explore</div>
          <div className="scroll-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;