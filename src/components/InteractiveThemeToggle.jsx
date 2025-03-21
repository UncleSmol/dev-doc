import React, { useState, useEffect, useRef } from 'react';
import ThemeToggle from './ThemeToggle';
import '../styles/InteractiveThemeToggle.css';

const InteractiveThemeToggle = () => {
  const [isVisible, setIsVisible] = useState(true);
  const timeoutRef = useRef(null);
  
  // Function to show the toggle button
  const showToggle = () => {
    setIsVisible(true);
    
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    // Set a new timeout to hide the button after inactivity
    timeoutRef.current = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // Hide after 3 seconds of inactivity
  };
  
  useEffect(() => {
    // Show toggle on initial load
    showToggle();
    
    // Add event listeners for user interaction
    const handleInteraction = () => {
      showToggle();
    };
    
    // Listen for mouse movement, clicks, and scrolling
    window.addEventListener('mousemove', handleInteraction);
    window.addEventListener('click', handleInteraction);
    window.addEventListener('scroll', handleInteraction);
    window.addEventListener('touchstart', handleInteraction);
    
    // Clean up event listeners on component unmount
    return () => {
      window.removeEventListener('mousemove', handleInteraction);
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);
  
  return (
    <div className={`interactive-theme-toggle ${isVisible ? 'visible' : 'hidden'}`}>
      <ThemeToggle />
    </div>
  );
};

export default InteractiveThemeToggle;