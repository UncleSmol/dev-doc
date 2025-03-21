import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">DEV DOC</div>
          <div className="footer-social">
            <a href="https://github.com/dev-doc" className="social-link">
              <FaGithub /> GitHub
            </a>
            <a href="https://linkedin.com/in/ntsakodoctorkhoza" className="social-link">
              <FaLinkedin /> LinkedIn
            </a>
            <a href="https://twitter.com/devdoc" className="social-link">
              <FaTwitter /> Twitter
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Ntsako Doctor Khoza. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;