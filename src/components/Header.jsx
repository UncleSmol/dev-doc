import React, { useState, useEffect, useRef } from 'react';
import { FaHome, FaUser, FaLaptopCode, FaBars, FaTimes } from 'react-icons/fa';
import { ReactComponent as DevDocLogo } from '../sig/dev-doc-logo.svg';
import '../styles/Header.css';

const Header = ({ activeSection, handleNavClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close mobile menu when a link is clicked
  const handleMobileNavClick = (section, e) => {
    handleNavClick(section, e);
    setMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        {/* Replace text logo with SVG logo */}
        <div 
          className="logo" 
          onClick={(e) => handleNavClick('hero', e)}
        >
          <DevDocLogo className="header-logo-svg" />
        </div>
        
        {/* Desktop Navigation */}
        <nav className="navigation desktop-nav">
          <ul>
            <li>
              <a 
                href="#hero" 
                onClick={(e) => handleNavClick('hero', e)} 
                className={activeSection === 'hero' ? 'active' : ''}
              >
                <FaHome className="nav-icon" /> HUB
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                onClick={(e) => handleNavClick('about', e)} 
                className={activeSection === 'about' ? 'active' : ''}
              >
                <FaUser className="nav-icon" /> BIO
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                onClick={(e) => handleNavClick('projects', e)} 
                className={activeSection === 'projects' ? 'active' : ''}
              >
                <FaLaptopCode className="nav-icon" /> MY WORK
              </a>
            </li>
          </ul>
        </nav>
        
        {/* Mobile Menu Toggle */}
        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        
        {/* Mobile Navigation */}
        <div 
          ref={mobileMenuRef}
          className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}
        >
          <nav className="mobile-nav-content">
            <ul>
              <li>
                <a 
                  href="#hero" 
                  onClick={(e) => handleMobileNavClick('hero', e)} 
                  className={activeSection === 'hero' ? 'active' : ''}
                >
                  <FaHome className="nav-icon" /> HUB
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => handleMobileNavClick('about', e)} 
                  className={activeSection === 'about' ? 'active' : ''}
                >
                  <FaUser className="nav-icon" /> BIO
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  onClick={(e) => handleMobileNavClick('projects', e)} 
                  className={activeSection === 'projects' ? 'active' : ''}
                >
                  <FaLaptopCode className="nav-icon" /> MY WORK
                </a>
              </li>
            </ul>
            
            {/* Logo at the bottom of mobile navigation */}
            <div className="mobile-nav-logo">
              <DevDocLogo width="60" height="60" />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;