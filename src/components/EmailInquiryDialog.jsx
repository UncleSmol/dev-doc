import React, { useState, useRef, useEffect } from 'react';
import { FaTimes, FaEnvelope, FaCheck } from 'react-icons/fa';
import '../styles/EmailInquiryDialog.css';

/**
 * Opens an email inquiry dialog for package selection
 * @param {Object} packageDetails - The selected package details
 * @param {Function} onClose - Function to call when dialog is closed
 * @returns {void}
 */
export const openEmailInquiry = (packageDetails, onClose) => {
  // Create a root element for the dialog
  const dialogRoot = document.createElement('div');
  dialogRoot.id = 'email-inquiry-root';
  document.body.appendChild(dialogRoot);
  
  // Render the dialog component
  const closeDialog = () => {
    // Unmount and remove the dialog
    document.body.removeChild(dialogRoot);
    if (onClose) onClose();
  };
  
  // Use React to render our component into this root
  const root = require('react-dom').createRoot(dialogRoot);
  root.render(<EmailInquiryDialog packageDetails={packageDetails} onClose={closeDialog} />);
};

const EmailInquiryDialog = ({ packageDetails, onClose }) => {
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [sendingStatus, setSendingStatus] = useState('idle'); // idle, sending, success, error
  
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const lastFocusedElement = useRef(document.activeElement);
  
  // Add all features by default if they exist
  useEffect(() => {
    if (packageDetails?.features) {
      setSelectedFeatures(packageDetails.features);
    }
  }, [packageDetails]);
  
  // Focus management when dialog opens
  useEffect(() => {
    // Save the last focused element
    lastFocusedElement.current = document.activeElement;
    
    // Focus on the close button when dialog opens
    if (closeButtonRef.current) {
      setTimeout(() => {
        closeButtonRef.current.focus();
      }, 100);
    }
    
    // Restore focus when dialog closes
    return () => {
      if (lastFocusedElement.current) {
        lastFocusedElement.current.focus();
      }
    };
  }, []);
  
  // Handle Escape key to close dialog
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);
  
  // Toggle feature selection
  const toggleFeature = (feature) => {
    if (selectedFeatures.includes(feature)) {
      setSelectedFeatures(selectedFeatures.filter(f => f !== feature));
    } else {
      setSelectedFeatures([...selectedFeatures, feature]);
    }
  };
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Start loading state
    setSendingStatus('sending');
    
    // Create email content
    const subject = `Package Inquiry: ${packageDetails.title}`;
    
    let emailBody = `
      <h2>Package Inquiry: ${packageDetails.title}</h2>
      <p><strong>From:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phoneNumber}</p>
      <p><strong>Package Type:</strong> ${packageDetails.title}</p>
      <p><strong>Package Price:</strong> ${packageDetails.price}${packageDetails.monthlyPrice ? ` (${packageDetails.monthlyPrice})` : ''}</p>
      
      <h3>Selected Features:</h3>
      <ul>
        ${selectedFeatures.map(feature => `<li>${feature}</li>`).join('')}
      </ul>
      
      <h3>Additional Message:</h3>
      <p>${message || 'No additional message provided.'}</p>
    `;
    
    // In a real implementation, you'd send this via an API
    // For now, we'll simulate an API call
    try {
      // This would be replaced with your actual API call
      // await fetch('/api/send-email', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     to: 'dev.doc@outlook.com',
      //     subject,
      //     html: emailBody,
      //     from: email,
      //     name
      //   })
      // });
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Open mailto link as fallback (in a real app, you'd use a proper email API)
      const mailtoLink = `mailto:dev.doc@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody.replace(/<[^>]*>/g, ''))}`;
      window.open(mailtoLink, '_blank');
      
      setSendingStatus('success');
      
      // Close after success message
      setTimeout(() => {
        onClose();
      }, 3000);
    } catch (error) {
      console.error('Error sending email:', error);
      setSendingStatus('error');
    }
  };
  
  // Handle backdrop click
  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('email-inquiry-overlay')) {
      onClose();
    }
  };
  
  // Prevent interactions while sending
  if (sendingStatus === 'sending') {
    return (
      <div className="email-inquiry-overlay" onClick={handleBackdropClick}>
        <div className="email-inquiry-dialog sending" ref={dialogRef}>
          <div className="sending-status">
            <div className="loading-spinner"></div>
            <p>Sending your inquiry...</p>
          </div>
        </div>
      </div>
    );
  }
  
  // Show success message
  if (sendingStatus === 'success') {
    return (
      <div className="email-inquiry-overlay" onClick={handleBackdropClick}>
        <div className="email-inquiry-dialog success" ref={dialogRef}>
          <div className="success-message">
            <div className="success-icon">
              <FaCheck />
            </div>
            <h2>Inquiry Sent!</h2>
            <p>Thank you for your interest. I'll get back to you soon!</p>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="email-inquiry-overlay" onClick={handleBackdropClick}>
      <div className="email-inquiry-dialog" ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="inquiry-title">
        <div className="inquiry-header">
          <h2 id="inquiry-title">Request Information: {packageDetails.title}</h2>
          <button 
            className="close-inquiry" 
            onClick={onClose} 
            ref={closeButtonRef}
            aria-label="Close inquiry dialog"
          >
            <FaTimes />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="inquiry-form">
          <div className="package-summary">
            <h3>{packageDetails.title}</h3>
            <div className="package-price">
              {packageDetails.price}
              {packageDetails.monthlyPrice && (
                <span className="package-price-monthly">{packageDetails.monthlyPrice}</span>
              )}
            </div>
          </div>
          
          <div className="inquiry-section">
            <h3>Contact Information</h3>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input 
                type="text" 
                id="name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
                placeholder="Enter your name"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
                placeholder="Enter your email address"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                value={phoneNumber} 
                onChange={(e) => setPhoneNumber(e.target.value)} 
                placeholder="Enter your phone number (optional)"
              />
            </div>
          </div>
          
          <div className="inquiry-section">
            <h3>Package Features</h3>
            <p className="features-description">Select the features you're interested in:</p>
            
            <div className="feature-selection">
              {packageDetails.features && packageDetails.features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <label className="feature-label">
                    <input 
                      type="checkbox" 
                      checked={selectedFeatures.includes(feature)} 
                      onChange={() => toggleFeature(feature)} 
                    />
                    <span className="feature-text">{feature}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>
          
          <div className="inquiry-section">
            <h3>Additional Message</h3>
            <div className="form-group">
              <textarea 
                id="message" 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                placeholder="Enter any specific requirements or questions..."
                rows={5}
              />
            </div>
          </div>
          
          <div className="inquiry-actions">
            <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
            <button type="submit" className="submit-btn">
              <FaEnvelope className="icon" />
              Send Inquiry
            </button>
          </div>
          
          {sendingStatus === 'error' && (
            <div className="error-message">
              There was an error sending your inquiry. Please try again or contact directly at dev.doc@outlook.com.
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default EmailInquiryDialog;