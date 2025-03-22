import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">DEV DOC</div>
          <div className="footer-social">
            <a href="https://github.com/UncleSmol" className="social-link">
              <FaGithub /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/ntsako-khoza-a42a08356/" className="social-link">
              <FaLinkedin /> LinkedIn
            </a>
            <a href="mailto:dev.doc@outlook.com" className="social-link">
              <FaEnvelope /> Mail
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