import React, { useEffect, useRef, useCallback } from 'react';
import { FaTimes, FaCopy } from 'react-icons/fa';
import { gsap } from 'gsap';
import '../styles/CodeSnippet.css';

const CodeSnippet = ({ code, title, language, onClose }) => {
  const modalRef = useRef(null);
  const contentRef = useRef(null);
  
  // Copy code to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code)
      .then(() => {
        // Show copied notification
        const notification = document.createElement('div');
        notification.className = 'copy-notification';
        notification.textContent = 'Copied to clipboard!';
        document.body.appendChild(notification);
        
        // Animate and remove notification
        gsap.fromTo(
          notification, 
          { opacity: 0, y: 20 }, 
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.3,
            onComplete: () => {
              setTimeout(() => {
                gsap.to(notification, { 
                  opacity: 0, 
                  y: -20, 
                  duration: 0.3,
                  onComplete: () => {
                    document.body.removeChild(notification);
                  }
                });
              }, 2000);
            }
          }
        );
      })
      .catch(err => {
        console.error('Could not copy text: ', err);
      });
  };
  
  // Close modal when clicking outside content
  const handleBackdropClick = (e) => {
    if (e.target === modalRef.current) {
      closeModal();
    }
  };
  
  // Close modal with animation - wrapped in useCallback
  const closeModal = useCallback(() => {
    gsap.to(contentRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.3,
      onComplete: onClose
    });
  }, [onClose]);
  
  // Handle escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    // Entrance animation
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.4 }
    );
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);
  
  return (
    <div className="code-snippet-modal" ref={modalRef} onClick={handleBackdropClick}>
      <div className="code-snippet-content" ref={contentRef}>
        <div className="code-snippet-header">
          <h3>{title}</h3>
          <div className="code-snippet-actions">
            <button className="copy-btn" onClick={copyToClipboard} aria-label="Copy code">
              <FaCopy />
            </button>
            <button className="close-btn" onClick={closeModal} aria-label="Close">
              <FaTimes />
            </button>
          </div>
        </div>
        <div className="code-snippet-body">
          <pre className={`language-${language}`}>
            <code>{code}</code>
          </pre>
        </div>
        <div className="code-snippet-footer">
          <span className="language-badge">{language}</span>
        </div>
      </div>
    </div>
  );
};

export default CodeSnippet;
