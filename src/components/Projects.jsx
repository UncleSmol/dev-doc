import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CodeSnippet from './CodeSnippet';

// Import individual project components
import MtapProject from './projects/MtapProject';
import VillaRomaProject from './projects/VillaRomaProject';
import HarveyNortjeProject from './projects/HarveyNortjeProject';
import MyPhysioProject from './projects/MyPhysioProject';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Projects = ({ isVisible }) => {
  const [showSnippet, setShowSnippet] = useState(false);
  const [snippetType, setSnippetType] = useState('');
  
  const projectsRef = useRef(null);
  const projectCardsRef = useRef([]);
  
  // Function to add project cards to the ref array
  const addToProjectCardsRef = (el) => {
    if (el && !projectCardsRef.current.includes(el)) {
      projectCardsRef.current.push(el);
    }
  };
  
  // Function to handle showing code snippets
  const handleShowSnippet = (type) => {
    setSnippetType(type);
    setShowSnippet(true);
  };
  
  // Function to close code snippet
  const handleCloseSnippet = () => {
    setShowSnippet(false);
  };
  
  // Animation for projects section
  useEffect(() => {
    if (isVisible && projectsRef.current) {
      // Animate the section title
      gsap.fromTo(
        projectsRef.current.querySelector('h2'),
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );
      
      // Animate each project card with scroll trigger
      projectCardsRef.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top bottom-=100",
              toggleActions: "play none none none"
            },
            delay: index * 0.2
          }
        );
      });
    }
    
    // Clean up ScrollTrigger instances when component unmounts
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [isVisible]);
  
  return (
    <section 
      id="projects" 
      className="projects" 
      style={{ display: isVisible ? 'block' : 'none' }}
      ref={projectsRef}
    >
      <div className="container">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {/* Render individual project components */}
          <MtapProject 
            addToProjectCardsRef={addToProjectCardsRef} 
            handleShowSnippet={handleShowSnippet} 
          />
          
          <VillaRomaProject 
            addToProjectCardsRef={addToProjectCardsRef} 
            handleShowSnippet={handleShowSnippet} 
          />
          
          <HarveyNortjeProject 
            addToProjectCardsRef={addToProjectCardsRef} 
            handleShowSnippet={handleShowSnippet} 
          />
          
          <MyPhysioProject 
            addToProjectCardsRef={addToProjectCardsRef} 
            handleShowSnippet={handleShowSnippet} 
          />
        </div>
      </div>
      
      {/* Code Snippet Modal */}
      {showSnippet && (
        <CodeSnippet type={snippetType} onClose={handleCloseSnippet} />
      )}
    </section>
  );
};

export default Projects;