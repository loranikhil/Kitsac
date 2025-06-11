import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const rotatingTexts = [
    "Custom Web Applications",
    "Mobile App Development",
    "Cloud-Based Systems",
    "AI-Powered Solutions"
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const textInterval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);

    return () => clearInterval(textInterval);
  }, []);

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
          {/* Main Content */}
          <div className={`hero-text ${isVisible ? 'animate-in' : ''}`}>
            {/* <div className="hero-badge">
              <span className="badge-icon">🚀</span>
              <span>Welcome to the Future of Software</span>
            </div> */}

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
  <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="m9 18 6-6-6-6"/>
  </svg>
</button>

              
             
            </div>

            {/* <div className="hero-social-proof">
              <span className="social-text">Trusted by leading companies</span>
              <div className="company-logos">
                <div className="company-logo">Tech Corp</div>
               
           
              </div>
            </div> */}
          </div>

          {/* Hero Visual */}
          <div className={`hero-visual ${isVisible ? 'animate-in' : ''}`}>
            <div className="visual-container">
              <div className="floating-card card-1">
                <div className="card-header">
                  <div className="card-dots">
                    <span></span><span></span><span></span>
                  </div>
                  <span className="card-title">Web Development</span>
                </div>
                <div className="card-content">
                  <div className="code-line"></div>
                  <div className="code-line short"></div>
                  <div className="code-line"></div>
                </div>
              </div>

              <div className="floating-card card-2">
                <div className="card-header">
                  <div className="card-dots">
                    <span></span><span></span><span></span>
                  </div>
                  <span className="card-title">Mobile Apps</span>
                </div>
                <div className="card-content">
                  <div className="app-mockup">
                    <div className="app-header"></div>
                    <div className="app-body">
                      <div className="app-element"></div>
                      <div className="app-element small"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="floating-card card-3">
                <div className="card-header">
                  <div className="card-dots">
                    <span></span><span></span><span></span>
                  </div>
                  <span className="card-title">Cloud Solutions</span>
                </div>
                <div className="card-content">
                  <div className="cloud-diagram">
                    <div className="cloud-node"></div>
                    <div className="cloud-node"></div>
                    <div className="cloud-connection"></div>
                  </div>
                </div>
              </div>

              <div className="central-element">
                <div className="central-circle">
                  <div className="circle-ring ring-1"></div>
                  <div className="circle-ring ring-2"></div>
                  <div className="circle-core">
                      <div className="logo-container">
  <img src="https://kitsacitsolutions.com/img/akashay%20logo.jpg" alt="Logo" className="logo-image" />
</div>
                  </div>
                </div>
              </div>
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