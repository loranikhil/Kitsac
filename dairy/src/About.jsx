import React from 'react';
import { 
  Code2, 
  Cloud, 
  Shield, 
  Users, 
  Building2, 
  HeadphonesIcon,
  Wrench,
  MapPin,
  CheckCircle,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import './About.css';

const About = () => {
  const services = [
    {
      icon: <Code2 className="service-icon" />,
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs"
    },
    {
      icon: <Wrench className="service-icon" />,
      title: "Project Outsourcing",
      description: "Comprehensive utility management and optimization services"
    },
    {
      icon: <Users className="service-icon" />,
      title: "Recruiting",
      description: "Recruiting and management solutions"
    },
    {
      icon: <HeadphonesIcon className="service-icon" />,
      title: "BPO Service",
      description: "Reliable business process outsourcing solutions"
    },
    {
      icon: <Building2 className="service-icon" />,
      title: "Medical Billing Service",
      description: "Managing the entire billing cycle."
    },
     {
      icon: <ShieldCheck className="service-icon" />,
      title: "Internship",
      description: "Internship Completion Certificate provided"
    }
  ];

  const highlights = [
    "Innovative & Scalable Solutions",
    "Secure IT Infrastructure",
    "Digital Transformation Expertise",
    "SSI Registered Unit",
    "Future-Ready Technologies"
  ];

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Header Section */}
        <div className="about-header">
         
          <h2 className="about-title">About Us</h2>
          <div className="about-subtitle">
            Empowering Businesses Through Digital Innovation
          </div>
        </div>

        {/* Main Content */}
        <div className="about-content">
          <div className="about-description">
            <div className="description-card">
              <div className="card-header">
                <Shield className="header-icon" />
                <h3>Our Mission</h3>
              </div>
              <p>
                KitSac IT Solutions offers innovative, scalable, and secure IT services, 
                specializing in software development, cloud solutions, cybersecurity, and 
                IT consulting to drive digital transformation and empower businesses for 
                future growth.
              </p>
              <div className="registration-info">
                <div className="reg-badge">
                  <CheckCircle className="reg-icon" />
                  <span>Registered SSI Unit - Hyderabad, India</span>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="highlights-section">
              <h2>Why Choose Us</h2>
              <div className="highlights-grid">
                {highlights.map((highlight, index) => (
                  <div key={index} className="highlight-item">
                    <ArrowRight className="highlight-icon" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="services-section">
            <h3 className="services-title">Our Core Services</h3>
            <div className="services-grid">
              {services.map((service, index) => (
                <div key={index} className="service-card">
                  <div className="service-header">
                    {service.icon}
                    <h4>{service.title}</h4>
                  </div>
                  <p>{service.description}</p>
                  <div className="service-overlay">
                    <ArrowRight className="overlay-icon" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        {/* <div className="about-footer">
          <div className="footer-content">
            <div className="footer-text">
              <Cloud className="footer-icon" />
              <span>Driving Digital Transformation & Future Growth</span>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;