import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import '../styles/PageTransition.css';

const PageTransition = ({ isNavigating, onComplete }) => {
  const overlayRef = useRef(null);
  
  // Primary accent color
  const primaryColor = '#8A680C'; // You can adjust this to match your app's theme

  useEffect(() => {
    if (isNavigating) {
      // Timeline for the transition
      const tl = gsap.timeline();
      
      // Slide down animation
      tl.fromTo(
        overlayRef.current,
        { y: '-100%' },
        { y: '0%', duration: 0.5, ease: 'power2.out' }
      );
      
      // Small pause while overlay is visible
      tl.to(overlayRef.current, { duration: 0.3 });
      
      // Scroll to top before completing the navigation
      tl.call(() => {
        window.scrollTo({
          top: 0,
          behavior: 'instant' // Use 'instant' instead of 'smooth' to avoid visible scrolling during transition
        });
        
        // Then call onComplete to change the content
        onComplete();
      }, [], "+=0.1");
      
      // Slide up animation (happens after the page content has changed)
      tl.to(
        overlayRef.current,
        { y: '-100%', duration: 0.5, ease: 'power2.in' }
      );
    }
  }, [isNavigating, onComplete]);

  return (
    <div 
      ref={overlayRef} 
      className="page-transition-overlay"
      style={{ backgroundColor: primaryColor }}
    ></div>
  );
};

export default PageTransition;
