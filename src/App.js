import React, { useState, useCallback } from 'react';
import './App.css';
import './styles/HideMobileScrollbars.css'; // Import the scrollbar hiding CSS
import PageTransition from './components/PageTransition';
import { ThemeProvider } from './components/ThemeProvider';
import InteractiveThemeToggle from './components/InteractiveThemeToggle';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  // State to track which section is currently visible
  const [activeSection, setActiveSection] = useState('hero');
  
  // State to track if navigation is in progress
  const [isNavigating, setIsNavigating] = useState(false);
  
  // State to store the next section to navigate to
  const [nextSection, setNextSection] = useState(null);

  // Function to handle navigation clicks with transition
  const handleNavClick = useCallback((sectionId, event) => {
    if (event) event.preventDefault();
    
    // Don't do anything if we're already navigating
    if (isNavigating) return;
    
    // Don't do anything if clicking the current section
    if (sectionId === activeSection) return;
    
    // Start navigation process
    setIsNavigating(true);
    setNextSection(sectionId);
    
    // Update URL hash for bookmarking purposes
    window.history.pushState(null, null, `#${sectionId}`);
  }, [isNavigating, activeSection]);

  // Function to complete navigation after transition
  const completeNavigation = useCallback(() => {
    if (nextSection) {
      setActiveSection(nextSection);
      setNextSection(null);
      setIsNavigating(false);
    }
  }, [nextSection]);

  // Check if a section should be displayed
  const isSectionVisible = (sectionId) => {
    return activeSection === sectionId;
  };

  return (
    <ThemeProvider>
      <div className="App">
        <Header 
          activeSection={activeSection} 
          handleNavClick={handleNavClick} 
        />

        <Hero 
          isVisible={isSectionVisible('hero')} 
          handleNavClick={handleNavClick} 
        />

        <About 
          isVisible={isSectionVisible('about')} 
          handleNavClick={handleNavClick} 
        />

        <Projects 
          isVisible={isSectionVisible('projects')} 
          handleNavClick={handleNavClick} 
        />

        <Footer />

        {/* Interactive Theme Toggle that shows/hides based on user interaction */}
        <InteractiveThemeToggle />
        
        {/* Page transition overlay */}
        <PageTransition 
          isNavigating={isNavigating} 
          onComplete={completeNavigation} 
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
