import React from 'react';
import { FaHome, FaUser, FaLaptopCode } from 'react-icons/fa';

const Header = ({ activeSection, handleNavClick }) => {
  return (
    <header className="header">
      <div className="container">
        <div 
          className="logo" 
          onClick={(e) => handleNavClick('hero', e)}
        >
          DEV DOC
        </div>
        <nav className="navigation">
          <ul>
            <li>
              <a 
                href="#hero" 
                onClick={(e) => handleNavClick('hero', e)} 
                className={activeSection === 'hero' ? 'active' : ''}
              >
                <FaHome className="nav-icon" /> Home
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                onClick={(e) => handleNavClick('about', e)} 
                className={activeSection === 'about' ? 'active' : ''}
              >
                <FaUser className="nav-icon" /> About
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                onClick={(e) => handleNavClick('projects', e)} 
                className={activeSection === 'projects' ? 'active' : ''}
              >
                <FaLaptopCode className="nav-icon" /> Projects
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
