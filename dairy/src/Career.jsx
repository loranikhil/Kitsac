import React, { useState } from 'react';
import { 
  MapPin, 
  Clock, 
  DollarSign, 
  Users, 
  Code, 
  Rocket, 
  Heart, 
  Award,
  ChevronRight,
  Search,
  Filter,
  Mail,
  Phone,
  Globe
} from 'lucide-react';
import './Career.css';

const Career = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const jobCategories = [
    { id: 'all', name: 'All Positions', count: 1 },
    { id: 'frontend', name: 'Frontend', count: 1 },
    // { id: 'backend', name: 'Backend', count: 1 },
    // { id: 'fullstack', name: 'Full Stack', count: 1 },
    // { id: 'mobile', name: 'Mobile', count: 1 },
    // { id: 'devops', name: 'DevOps', count: 1 }
  ];

  const jobListings = [
    {
      id: 1,
      title: 'Front-end Developer',
      category: 'frontend',
      location: 'Hyderabad, India',
      type: 'Full-time',
      salary: '₹3.5-6 LPA',
      experience: '0-2 years',
      skills: ['React', 'TypeScript', 'JavaScript'],
      description: 'Join our frontend team to build cutting-edge web applications using modern React ecosystem.',
      posted: '2 days ago'
    },
   
  ];

  const benefits = [
    { icon: Rocket, title: 'Career Growth', desc: 'Clear career progression paths and skill development programs' },
    { icon: Code, title: 'Learning Budget', desc: 'Annual budget for courses, conferences, and certifications' },
    { icon: Users, title: 'Team Events', desc: 'Regular team building activities and company outings' }
  ];

  const filteredJobs = jobListings.filter(job => {
    const matchesCategory = selectedCategory === 'all' || job.category === selectedCategory;
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="career-page">
      {/* Hero Section */}
      <div className="hero-sections">
        <div className="hero-containers">
          <div className="hero-contentt">
            <h1 className="hero-titlee">
              Build Your Future with Kitsac
            </h1>
            <br></br>
            <p className="hero-subtitle">
              Join our innovative team of passionate developers, designers, and problem-solvers. 
              Shape the future of software solutions while growing your career.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">
                View Open Positions
              </button>
              <button className="btn-secondary">
                Learn About Our Culture
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Why Join Us Section */}
      <div className="benefits-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-titles">Why Choose Kitsac?</h2>
            <p className="section-subtitle">
              We're not just building software; we're building careers, fostering innovation, and creating impact.
            </p>
          </div>
          
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">
                  <benefit.icon className="icon" />
                </div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-desc">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Job Search Section */}
      <div className="jobs-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-titles">Open Positions</h2>
            <p className="section-subtitle">Find your perfect role and start your journey with us</p>
          </div>

          {/* Search and Filter */}
          <div className="search-filter-container">
            <div className="search-filter-wrapper">
              {/* Search Bar */}
              <div className="search-bar">
                <Search className="search-icon" />
                <input
                  type="text"
                  placeholder="Search jobs by title or skills..."
                  className="search-input"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Category Filter */}
              <div className="category-filters">
                {jobCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Job Listings */}
          <div className="job-listings">
            {filteredJobs.map((job) => (
              <div key={job.id} className="job-card">
                <div className="job-content">
                  <div className="job-header">
                    <div className="job-info">
                      <h3 className="job-title">{job.title}</h3>
                      <div className="job-meta">
                        <div className="meta-item">
                          <MapPin className="meta-icon" />
                          <span>{job.location}</span>
                        </div>
                        <div className="meta-item">
                          <Clock className="meta-icon" />
                          <span>{job.type}</span>
                        </div>
                        <div className="meta-item">
                          <DollarSign className="meta-icon" />
                          <span>{job.salary}</span>
                        </div>
                      </div>
                    </div>
                    <span className="job-posted">{job.posted}</span>
                  </div>
                  
                  <p className="job-description">{job.description}</p>
                  
                  <div className="job-skills">
                    {job.skills.map((skill, index) => (
                      <span key={index} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                  
                  <div className="job-experience">
                    <span className="experience-label">Experience:</span> {job.experience}
                  </div>
                </div>
                
                <div className="job-actions">
                  <button 
  className="apply-btn"
  onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeVqUa7DcWkscFSNmHIEdIp7c00YJSjPpn7M6Vz-qYWNNTFMA/viewform', '_blank')}
>
  Apply Now
  <ChevronRight className="btn-icon" />
</button>

                  <button className="learn-more-btn">Learn More</button>
                </div>
              </div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="no-results">
              <div className="no-results-icon">
                <Search className="icon-large" />
              </div>
              <h3 className="no-results-title">No positions found</h3>
              <p className="no-results-desc">Try adjusting your search criteria or check back later for new openings.</p>
            </div>
          )}
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-titles">Get in Touch</h2>
            <p className="section-subtitle">Don't see the right position? We'd still love to hear from you!</p>
          </div>
          
          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-icon email-icon">
                <Mail className="icon" />
              </div>
              <h3 className="contact-title">Email Us</h3>
              <p className="contact-info">contact@kitsacitsolutions.com</p>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon phone-icon">
                <MapPin className="icon" />
              </div>
              <h3 className="contact-title">Address</h3>
              <p className="contact-info">Kitsac IT Solutions Pvt Ltd, Hyderabad</p>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon website-icon">
                <Globe className="icon" />
              </div>
              <h3 className="contact-title">Visit Us</h3>
              <p className="contact-info">www.kitsacitsolutions.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;