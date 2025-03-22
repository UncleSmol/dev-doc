
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
// eslint-disable-next-line no-unused-vars
import { 
  FaReact, FaJs, FaCss3Alt, FaHtml5, 
  FaExternalLinkAlt, FaGithub, FaCode, FaLightbulb, FaSolarPanel,
  FaRecycle, FaHotel, FaHospital, FaPortrait
} from 'react-icons/fa';
import CodeSnippet from './CodeSnippet';
import '../styles/Projects.css';

const Projects = ({ isVisible, handleNavClick }) => {
  // Refs for GSAP animations
  const projectsRef = useRef(null);
  const titleRef = useRef(null);
  const projectCardsRef = useRef([]);
  
  // State for code snippet modal
  const [showSnippet, setShowSnippet] = useState(false);
  const [activeSnippet, setActiveSnippet] = useState(null);
  
  // Reset projectCardsRef array
  projectCardsRef.current = [];
  
  // Add to projectCardsRef array
  const addToProjectCardsRef = (el) => {
    if (el && !projectCardsRef.current.includes(el)) {
      projectCardsRef.current.push(el);
    }
  };

  // Function to show code snippet
  const handleShowSnippet = (snippetId) => {
    setActiveSnippet(snippetId);
    setShowSnippet(true);
  };

  // GSAP animations when component becomes visible
  useEffect(() => {
    if (isVisible) {
      // Create a timeline for sequential animations
      const tl = gsap.timeline();
      
      // Animate the section title
      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );
      
      // Animate each project card with a stagger effect
      tl.fromTo(
        projectCardsRef.current,
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.6, 
          stagger: 0.2, 
          ease: "power2.out" 
        },
        "-=0.4"
      );
      
      // Add hover animations for project cards
      projectCardsRef.current.forEach(card => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, { 
            y: -10, 
            boxShadow: '0 20px 25px rgba(0, 0, 0, 0.15)', 
            duration: 0.3, 
            ease: "power2.out" 
          });
        });
        
        card.addEventListener('mouseleave', () => {
          gsap.to(card, { 
            y: 0, 
            boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)', 
            duration: 0.3, 
            ease: "power2.out" 
          });
        });
      });
      
      // Clean up event listeners
      return () => {
        projectCardsRef.current.forEach(card => {
          card.removeEventListener('mouseenter', () => {});
          card.removeEventListener('mouseleave', () => {});
        });
      };
    }
  }, [isVisible]);

  // Code snippets for projects
  const codeSnippets = {
    responsive: `/* Responsive design for MTAP Group website */
@media screen and (max-width: 768px) {
  .hero-content {
    flex-direction: column;
    text-align: center;
  }
  
  .hero-image {
    margin-top: 2rem;
    width: 100%;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}`,
    animation: `// Animation for service cards
const animateServiceCards = () => {
  const cards = document.querySelectorAll('.service-card');
  
  cards.forEach((card, index) => {
    // Add staggered entrance animation
    gsap.fromTo(
      card,
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.6,
        delay: index * 0.2,
        ease: "power2.out"
      }
    );
    
    // Add hover effect
    card.addEventListener('mouseenter', () => {
      gsap.to(card, { 
        y: -10, 
        boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
        duration: 0.3
      });
    });
    
    card.addEventListener('mouseleave', () => {
      gsap.to(card, { 
        y: 0, 
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
        duration: 0.3
      });
    });
  });
};`,
    villaRomaCSS: `/* Styling for the Villa Roma waste management manual */
.waste-category {
  margin-bottom: 2.5rem;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.category-header {
  background-color: #1a472a;
  color: white;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.category-header h3 {
  margin: 0;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.category-content {
  padding: 1.5rem;
  background-color: white;
}

.waste-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 0.75rem 0;
  border-bottom: 1px solid #e0e0e0;
}

.waste-item:last-child {
  border-bottom: none;
}

.waste-icon {
  font-size: 1.5rem;
  color: #1a472a;
  min-width: 2rem;
  text-align: center;
}

.waste-details h4 {
  margin: 0 0 0.5rem 0;
  font-size: 1.1rem;
  color: #333;
}

.waste-details p {
  margin: 0;
  color: #666;
  line-height: 1.5;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .category-header h3 {
    font-size: 1.1rem;
  }
  
  .waste-item {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .waste-icon {
    margin-bottom: 0.5rem;
  }
}`,
    villaRomaJS: `// Interactive elements for the waste management manual
document.addEventListener('DOMContentLoaded', function() {
  // Toggle category content visibility
  const categoryHeaders = document.querySelectorAll('.category-header');
  
  categoryHeaders.forEach(header => {
    header.addEventListener('click', function() {
      const content = this.nextElementSibling;
      const isExpanded = content.classList.contains('expanded');
      
      // Animate height
      if (isExpanded) {
        gsap.to(content, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          onComplete: () => {
            content.classList.remove('expanded');
          }
        });
      } else {
        content.classList.add('expanded');
        gsap.fromTo(content,
          { height: 0, opacity: 0 },
          { height: 'auto', opacity: 1, duration: 0.5 }
        );
      }
      
      // Rotate the toggle icon
      const icon = this.querySelector('.toggle-icon');
      gsap.to(icon, {
        rotation: isExpanded ? 0 : 180,
        duration: 0.3
      });
    });
  });
  
  // Search functionality for waste items
  const searchInput = document.getElementById('waste-search');
  const wasteItems = document.querySelectorAll('.waste-item');
  
  searchInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    
    wasteItems.forEach(item => {
      const itemName = item.querySelector('h4').textContent.toLowerCase();
      const itemDesc = item.querySelector('p').textContent.toLowerCase();
      
      if (itemName.includes(searchTerm) || itemDesc.includes(searchTerm)) {
        gsap.to(item, { opacity: 1, height: 'auto', duration: 0.3 });
      } else {
        gsap.to(item, { opacity: 0, height: 0, duration: 0.3 });
      }
    });
  });
});`,
    portfolioReact: `// React component for portfolio project
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const PortfolioItem = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="portfolio-item"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="portfolio-image">
        <img src={project.image} alt={project.title} />
        
        <motion.div 
          className="portfolio-overlay"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <h3>{project.title}</h3>
          <p>{project.shortDesc}</p>
          <div className="portfolio-actions">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              View Live
            </a>
            <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
              View Code
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PortfolioItem;`,
    portfolioAnimation: `// GSAP animations for Harvey Nortje portfolio
const animateSections = () => {
  // Animate hero section
  gsap.timeline()
    .fromTo('.hero-content h1', 
      { opacity: 0, y: -50 }, 
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    )
    .fromTo('.hero-content p', 
      { opacity: 0 }, 
      { opacity: 1, duration: 0.8, ease: "power3.out" }, 
      "-=0.4"
    )
    .fromTo('.hero-cta', 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, 
      "-=0.4"
    );
  
  // Animate sections on scroll
  const sections = document.querySelectorAll('.section');
  
  sections.forEach(section => {
    gsap.fromTo(section, 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });
};`,
    portfolioCSS: `/* Styling for Harvey Nortje portfolio */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.skill-card {
  background-color: #ffffff;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
}

.skill-icon {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #4a6cf7;
}

.skill-title {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1d2130;
}

.skill-description {
  color: #555;
  line-height: 1.6;
}

/* Dark mode styles */
@media (prefers-color-scheme: dark) {
  .skill-card {
    background-color: #1f2937;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  }
  
  .skill-title {
    color: #f3f4f6;
  }
  
  .skill-description {
    color: #d1d5db;
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}`,
    myphysioAnimation: `// Initialize animations on component mount
useEffect(() => {
  // Simple fade-in for header
  gsap.fromTo(headerRef.current,
    { opacity: 0, y: -30 },
    { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
  );

  // Simple fade-in for sections
  sectionsRef.current.forEach((section) => {
    gsap.fromTo(section,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 90%", // Start when top of section is 90% from top of viewport
          end: "top 10%", // End when top of section is 10% from top of viewport
          toggleActions: "play none none none" // Play once when entering
        }
      }
    );
  });
})`,
    myphysioContact: `<div className="contact-card">
  <div className="contact-card-header">
    <FaPhone className="contact-icon" />
    <h2>Phone Us</h2>
  </div>
  <div className="contact-card-content">
    <a href="tel:+27000000000" className="contact-link">000-000-0000</a>
    <a href="tel:+27000000000" className="contact-link">000-000-0000</a>
  </div>
</div>`,
    myphysioHours: `<div ref={addToSectionsRef} className="contact-hours-section">
  <div className="hours-card">
    <h2>Practice Hours</h2>
    <div className="hours-grid">
      <div className="hours-day">
        <span className="day">Monday - Friday</span>
        <span className="time">8:00 AM - 5:00 PM</span>
      </div>
      <div className="hours-day">
        <span className="day">Saturday</span>
        <span className="time">By Appointment</span>
      </div>
    </div>
  </div>
</div>`,
  };

  return (
    <section id="projects" className="section projects-section" style={{ display: isVisible ? 'block' : 'none' }} ref={projectsRef}>
      <div className="container">
        <h2 className="section-title" ref={titleRef}>Featured Projects</h2>
        <div className="projects-grid">
          {/* MTAP Group Project */}
          <div className="project-card" ref={addToProjectCardsRef}>
            <div className="project-image mtap-image">
              {/* Image will be set via CSS background */}
            </div>
            <div className="project-content">
              <div className="project-header">
                <h3 className="project-title">MTAP Group Website</h3>
                <div className="project-badge renewable">
                  <FaSolarPanel /> Renewable Energy
                </div>
              </div>
              <p className="project-description">
                A professional website for a new renewable energy company. Features responsive design, 
                modern animations, and clear presentation of services and company information.
              </p>
              <div className="project-features">
                <h4>Key Features:</h4>
                <ul>
                  <li>Responsive layout for all device sizes</li>
                  <li>Interactive service showcase</li>
                  <li>Optimized performance for fast loading</li>
                  <li>Contact form with validation</li>
                </ul>
              </div>
              <div className="project-technologies">
                <div className="tech-tag"><FaHtml5 /> HTML5</div>
                <div className="tech-tag"><FaCss3Alt /> CSS3</div>
                <div className="tech-tag"><FaJs /> JavaScript</div>
              </div>
              <div className="project-links">
                <a href="https://unclesmol.github.io/mtapgroup/#home" target="_blank" rel="noopener noreferrer" className="project-link">
                  <FaExternalLinkAlt /> Live Preview
                </a>
                <button onClick={() => handleShowSnippet('responsive')} className="project-link snippet-btn">
                  <FaCode /> CSS Snippet
                </button>
                <button onClick={() => handleShowSnippet('animation')} className="project-link snippet-btn">
                  <FaLightbulb /> Animation Snippet
                </button>
              </div>
            </div>
          </div>

          {/* Villa Roma Waste Management Project */}
          <div className="project-card" ref={addToProjectCardsRef}>
            <div className="project-image waste-management-image">
              {/* Image will be set via CSS background */}
            </div>
            <div className="project-content">
              <div className="project-header">
                <h3 className="project-title">Villa Roma Waste Management Manual</h3>
                <div className="project-badge environmental">
                  <FaHotel /> Hospitality
                </div>
              </div>
              <p className="project-description">
                A digital waste management manual for Villa Roma Boutique Hotel. This interactive guide helps 
                hotel staff implement proper waste sorting and disposal practices to improve sustainability.
              </p>
              <div className="project-features">
                <h4>Key Features:</h4>
                <ul>
                  <li>Categorized waste disposal guidelines</li>
                  <li>Interactive waste sorting reference</li>
                  <li>Mobile-friendly for staff access anywhere</li>
                  <li>Searchable waste items database</li>
                </ul>
              </div>
              <div className="project-technologies">
                <div className="tech-tag"><FaHtml5 /> HTML5</div>
                <div className="tech-tag"><FaCss3Alt /> CSS3</div>
                <div className="tech-tag"><FaJs /> JavaScript</div>
              </div>
              <div className="project-links">
                <a href="https://unclesmol.github.io/waste_management/" target="_blank" rel="noopener noreferrer" className="project-link">
                  <FaExternalLinkAlt /> Live Preview
                </a>
                <button onClick={() => handleShowSnippet('villaRomaCSS')} className="project-link snippet-btn">
                  <FaCode /> CSS Snippet
                </button>
                <button onClick={() => handleShowSnippet('villaRomaJS')} className="project-link snippet-btn">
                  <FaRecycle /> Interactive Features
                </button>
              </div>
            </div>
          </div>

          {/* Harvey Nortje Portfolio Project */}
          <div className="project-card" ref={addToProjectCardsRef}>
            <div className="project-image portfolio-image">
              {/* Image will be set via CSS background */}
            </div>
            <div className="project-content">
              <div className="project-header">
                <h3 className="project-title">Harvey Nortje Portfolio</h3>
                <div className="project-badge portfolio">
                  <FaPortrait /> Business Portfolio
                </div>
              </div>
              <p className="project-description">
                A modern React-based portfolio website showcasing Harvey Nortje's skills, projects, and professional experience with smooth animations and responsive design.
              </p>
              <div className="project-features">
                <h4>Key Features:</h4>
                <ul>
                  <li>Interactive UI with smooth transitions</li>
                  <li>Responsive layout for all devices</li>
                  <li>Project showcase with detailed information</li>
                  <li>Contact form with validation</li>
                </ul>
              </div>
              <div className="project-technologies">
                <div className="tech-tag"><FaReact /> React</div>
                <div className="tech-tag"><FaJs /> JavaScript</div>
                <div className="tech-tag"><FaCss3Alt /> CSS3</div>
              </div>
              <div className="project-links">
                <a href="https://unclesmol.github.io/harvey-nortje/" target="_blank" rel="noopener noreferrer" className="project-link">
                  <FaExternalLinkAlt /> Live Preview
                </a>
                <a href="https://github.com/UncleSmol/harvey-nortje" target="_blank" rel="noopener noreferrer" className="project-link">
                  <FaGithub /> GitHub Repo
                </a>
                <button onClick={() => handleShowSnippet('portfolioReact')} className="project-link snippet-btn">
                  <FaCode /> React Component
                </button>
                <button onClick={() => handleShowSnippet('portfolioAnimation')} className="project-link snippet-btn">
                  <FaLightbulb /> Animation Snippet
                </button>
                <button onClick={() => handleShowSnippet('portfolioCSS')} className="project-link snippet-btn">
                  <FaCss3Alt /> CSS Snippet
                </button>
              </div>
            </div>
          </div>

          {/* MyPhysio Project */}
          <div className="project-card" ref={addToProjectCardsRef}>
            <div className="project-image physio-image">
              {/* Image will be set via CSS background */}
            </div>
            <div className="project-content">
              <div className="project-header">
                <h3 className="project-title">MyPhysio Management System</h3>
                <div className="project-badge healthcare">
                  <FaHospital /> Healthcare
                </div>
              </div>
              <p className="project-description">
                A comprehensive physiotherapy practice management system with integrated contact functionality, 
                appointment scheduling, and patient management. Features a clean, professional design with 
                intuitive navigation.
              </p>
              <div className="project-features">
                <h4>Key Features:</h4>
                <ul>
                  <li>Responsive mobile-first design</li>
                  <li>Interactive service showcase</li>
                  <li>Online booking system</li>
                  <li>Patient information portal</li>
                  <li>Practice hours and contact information</li>
                </ul>
              </div>
              <div className="project-technologies">
                <div className="tech-tag"><FaReact /> React</div>
                <div className="tech-tag"><FaJs /> JavaScript</div>
                <div className="tech-tag"><FaCss3Alt /> CSS3</div>
              </div>
              <div className="project-links">
                <a href="https://unclesmol.github.io/myphysio/" target="_blank" rel="noopener noreferrer" className="project-link">
                  <FaExternalLinkAlt /> Live Preview
                </a>
                <a href="https://github.com/UncleSmol/myphysio" target="_blank" rel="noopener noreferrer" className="project-link">
                  <FaGithub /> GitHub Repo
                </a>
                <button onClick={() => handleShowSnippet('myphysioAnimation')} className="project-link snippet-btn">
                  <FaLightbulb /> Animation Snippet
                </button>
                <button onClick={() => handleShowSnippet('myphysioContact')} className="project-link snippet-btn">
                  <FaCode /> Contact Component
                </button>
                <button onClick={() => handleShowSnippet('myphysioHours')} className="project-link snippet-btn">
                  <FaHospital /> Hours Component
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="section-navigation">
          <button className="nav-button prev" onClick={(e) => handleNavClick('about', e)}>
            Back to BIO
          </button>
          <button className="nav-button next" onClick={(e) => handleNavClick('hero', e)}>
            Back to HUB
          </button>
        </div>
      </div>
      
      {/* Code Snippet Modal */}
      {showSnippet && (
        <CodeSnippet 
          code={activeSnippet ? codeSnippets[activeSnippet] : ''} 
          title={
            activeSnippet === 'responsive' ? 'Responsive CSS for MTAP Group' : 
            activeSnippet === 'animation' ? 'Animation JavaScript for MTAP Group' :
            activeSnippet === 'villaRomaCSS' ? 'Waste Categories Styling for Villa Roma' :
            activeSnippet === 'villaRomaJS' ? 'Interactive Features for Villa Roma Manual' :
            activeSnippet === 'portfolioReact' ? 'React Component for Portfolio Project' :
            activeSnippet === 'portfolioAnimation' ? 'GSAP Animations for Harvey Nortje Portfolio' :
            activeSnippet === 'portfolioCSS' ? 'CSS Styling for Harvey Nortje Portfolio' :
            'Code Snippet'
          }
          language={
            activeSnippet && (
              activeSnippet.includes('CSS') || 
              activeSnippet === 'responsive' || 
              activeSnippet === 'portfolioCSS'
            ) ? 'css' : 'javascript'
          }
          onClose={() => setShowSnippet(false)}
        />
      )}
    </section>
  );
};

export default Projects;
