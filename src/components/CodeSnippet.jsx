import React, { useEffect, useRef, useCallback } from 'react';
import { FaTimes, FaCopy } from 'react-icons/fa';
import { gsap } from 'gsap';
import '../styles/CodeSnippet.css';

// Snippet data - replace these with your actual code snippets
const snippets = {
  // MTAP Project Snippets
  responsive: {
    title: "MTAP Group Responsive CSS",
    language: "css",
    sections: [
      {
        title: "Header Styles",
        code:
        `/* Header Styles */
h1 span,
.colorCycle {
  -webkit-animation: colorCycle 5s infinite;
  animation: colorCycle 5s infinite;
}

@keyframes colorCycle {
  0% { color: red; }
  33% { color: orange; }
  66% { color: white; }
  100% { color: red; }
}

.navLi {
  position: relative;
  list-style: none;
  cursor: pointer;
  transition: all 1000ms ease-in-out;
}

.navLi:hover {
  color: red;
  transition: all 250ms ease-out;
  transform: translateY(3px);
}

.navLi::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: black;
  transition: width 0.5s ease, background-color 0.5s ease;
}

.navLi:hover::after {
  width: 100%;
  background: red;
}

#hamburger {
  cursor: pointer;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 24px;
  position: relative;
}

#hamburger span {
  display: block;
  background: #333;
  border-radius: 2px;
  transition: all 0.4s ease;
  transform-origin: center;
}

#hamburger.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

#hamburger.active span:nth-child(2) {
  opacity: 0;
}

#hamburger.active span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

#menu {
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
}

@media (max-width: 976px) {
  #menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 100vh;
    background: white;
    transform: translateY(-100%);
    opacity: 0;
  }

  #menu.open {
    transform: translateY(0);
    opacity: 1;
  }
}

@media (min-width: 976px) {
  #hamburger {
    display: none;
  }
}

.snap-down {
  position: absolute;
  bottom: -55px;
  right: 0;
  width: 576px;
  background: #ffffff;
}

#mobile-menu {
  height: calc(100svh - 4rem);
        }`
              },
      {
        title: "Team Section",
        code:
        `/* Team Section */
#team {
  font-family: Arial, sans-serif;
}

.team-card {
  position: relative;
  overflow: hidden;
  transform-style: preserve-3d;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background: #fff;
}

.card-image {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  z-index: 5;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.team-card:hover .card-image {
  opacity: 1;
}

.team-card:hover .relative.z-10 {
  opacity: 0.2;
  transition: opacity 0.3s ease-in-out;
}

.team-card h3 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.team-card p {
  font-size: 1rem;
  color: #555;
}

.team-card ul {
  margin-top: 1rem;
  padding-left: 1.5rem;
  list-style-type: disc;
  color: #333;
}

/* Dropdown Components */
.service-dropdown {
  transition: all 0.3s ease-in-out;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.dropdown-header {
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}

.dropdown-header:hover {
  background-color: #f8fafc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.dropdown-header.active svg {
  transform: rotate(180deg);
}

.dropdown-content {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
}

.dropdown-content.active {
  max-height: 2000px;
  opacity: 1;
}

/* Animations */
@keyframes slide {
  0%, 23% { transform: translateX(0); }
  25%, 48% { transform: translateX(-25%); }
  50%, 73% { transform: translateX(-50%); }
  75%, 98% { transform: translateX(-75%); }
  100% { transform: translateX(0); }
}

.slide-animation {
  display: flex;
  width: 400%;
  animation: slide 20s infinite ease-in-out;
}

.slide-animation img {
  width: 25%;
  object-fit: cover;
}

/* Interactive Elements */
.bg-gray-50 {
  transition: all 0.3s ease-in-out;
  border: 1px solid #e5e7eb;
}

.bg-gray-50:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.inline-block.bg-blue-600 {
  transition: all 0.3s ease;
}

.inline-block.bg-blue-600:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 6px rgba(37, 99, 235, 0.2);
}

/* Responsive Design */
@media (min-width: 768px) {
  .team-card {
    transition: transform 0.3s ease-in-out;
  }
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }
}

@media (prefers-reduced-motion: reduce) {
  .slide-animation {
    animation: none;
  }
  
  .dropdown-content {
    transition: none;
  }
}

/* Typography */
.text-blue-600 {
  color: #2563eb;
}

.font-semibold {
  font-weight: 600;
}`
              },
      {
        title: "Competitive Advantages Styling",
        code:
        `/* Icon Styling */
.icon {
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Advantage Content Hover Effect */
.advantage-point:hover .icon {
background-color: #2563eb;
transform: scale(1.1);
transition: all 0.3s ease-in-out;
}

.advantage-point:hover .content h3 {
color: #2563eb;
transition: color 0.3s ease-in-out;
}`
      }
    ]
  },
  animation: {
    title: "MTAP Animations",
    language: "javascript",
    sections: [
      {
        title: "Hero Animation",
        code:
        `const elements = document.querySelectorAll("[data-animate]");
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("in-view");
observer.unobserve(entry.target);
}
});
});
elements.forEach((el) => observer.observe(el));`
      },
      {
        title: "Team Members Cards with 3D tilt effect",
        code: 
        `const elements = document.querySelectorAll("[data-animate]");
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("in-view");
observer.unobserve(entry.target);
}
});
});
elements.forEach((el) => observer.observe(el));`
      },
      {
        title: "Navigation Menu",
        code: 
        `// Select the hamburger, menu, and mobile menu elements
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelectorAll("#mobile-menu .navLi a");
let lastScrollTop = 0; // Variable to track the last scroll position

// Function to toggle the visibility of the menu and the hamburger state
hamburger.addEventListener("click", () => {
// Toggle the mobile menu visibility
mobileMenu.classList.toggle("hidden");
mobileMenu.classList.toggle("flex");

// Toggle hamburger menu animation (cross effect)
hamburger.classList.toggle("active");
hamburger.children[0].classList.toggle("rotate-45");
hamburger.children[1].classList.toggle("opacity-0");
hamburger.children[2].classList.toggle("-rotate-45");
});`
      }
    ]
  }
  // Add other project snippets here...

  
};

const CodeSnippet = ({ type, onClose }) => {
  const modalRef = useRef(null);
  const contentRef = useRef(null);
  
  const snippetData = snippets[type];
  
  // Copy code to clipboard
  const copyToClipboard = (code) => {
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
  
  // Close modal with animation
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

  if (!snippetData) return null;
  
  return (
    <div className="code-snippet-modal" ref={modalRef} onClick={handleBackdropClick}>
      <div className="code-snippet-content" ref={contentRef}>
        <div className="code-snippet-header">
          <h3>{snippetData.title}</h3>
          <div className="code-snippet-actions">
            <button className="close-btn" onClick={closeModal} aria-label="Close">
              <FaTimes />
            </button>
          </div>
        </div>
        <div className="code-snippet-body">
          {snippetData.sections.map((section, index) => (
            <div key={index} className="snippet-section">
              <div className="snippet-section-header">
                <h4>{section.title}</h4>
                <button 
                  className="copy-btn" 
                  onClick={() => copyToClipboard(section.code)} 
                  aria-label="Copy code"
                >
                  <FaCopy />
                </button>
              </div>
              <pre className={`language-${snippetData.language}`}>
                <code>{section.code}</code>
              </pre>
            </div>
          ))}
        </div>
        <div className="code-snippet-footer">
          <span className="language-badge">{snippetData.language}</span>
        </div>
      </div>
    </div>
  );
};

export default CodeSnippet;
