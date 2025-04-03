import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { 
  FaGraduationCap, FaMapMarkerAlt, FaLightbulb, FaEye, 
  FaBullseye, FaChevronDown, FaChevronUp, FaUserTie
} from 'react-icons/fa';
import '../styles/About.css';

const About = ({ isVisible, handleNavClick }) => {
  // Refs for GSAP animations
  const aboutRef = useRef(null);
  const titleRef = useRef(null);
  const introTextRef = useRef(null);
  const statsRef = useRef(null);
  const sectionRefs = useRef([]);
  const navigationRef = useRef(null);
  
  // Reset sectionRefs array
  sectionRefs.current = [];
  
  // Add to sectionRefs array
  const addToSectionRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };
  
  // State to track which sections are expanded
  const [expandedSections, setExpandedSections] = useState({
    background: false,
    education: false,
    career: false,
    ambitions: false,
    vision: false,
    approach: false
  });

  // Toggle section expansion
  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // GSAP animations when component becomes visible
  useEffect(() => {
    if (isVisible) {
      // Create a timeline for sequential animations
      const tl = gsap.timeline();
      
      // Animate the section title
      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );
      
      // Animate the intro text
      tl.fromTo(
        introTextRef.current.querySelectorAll('p'),
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.6, 
          stagger: 0.2, 
          ease: "power2.out" 
        },
        "-=0.4"
      );
      
      // Animate the stats if statsRef.current exists
      if (statsRef.current) {
        tl.fromTo(
          statsRef.current.querySelectorAll('.stat'),
          { opacity: 0, scale: 0.8 },
          { 
            opacity: 1, 
            scale: 1, 
            duration: 0.5, 
            stagger: 0.15, 
            ease: "back.out(1.7)" 
          },
          "-=0.2"
        );
      }
      
      // Animate each section with stagger
      tl.fromTo(
        sectionRefs.current,
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.5, 
          stagger: 0.2, 
          ease: "power1.out" 
        },
        "-=0.3"
      );
      
      // Animate the navigation buttons
      tl.fromTo(
        navigationRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
        "-=0.2"
      );
      
      // Add hover animations for section headers
      sectionRefs.current.forEach(section => {
        const header = section.querySelector('.section-header');
        
        header.addEventListener('mouseenter', () => {
          gsap.to(header, { 
            backgroundColor: 'rgba(var(--color-background-secondary-rgb), 0.2)', 
            duration: 0.3 
          });
        });
        
        header.addEventListener('mouseleave', () => {
          gsap.to(header, { 
            backgroundColor: 'transparent', 
            duration: 0.3 
          });
        });
      });
      
      // Clean up event listeners
      return () => {
        sectionRefs.current.forEach(section => {
          const header = section.querySelector('.section-header');
          header.removeEventListener('mouseenter', () => {});
          header.removeEventListener('mouseleave', () => {});
        });
      };
    }
  }, [isVisible]);

  // Animation for expanding/collapsing sections
  useEffect(() => {
    Object.entries(expandedSections).forEach(([section, isExpanded]) => {
      const contentElement = document.querySelector(`.${section}-content`);
      if (contentElement) {
        if (isExpanded) {
          gsap.to(contentElement, { 
            height: 'auto', 
            opacity: 1, 
            duration: 0.5, 
            ease: "power2.out" 
          });
        } else {
          gsap.to(contentElement, { 
            height: '80px', 
            opacity: 0.7, 
            duration: 0.5, 
            ease: "power2.out" 
          });
        }
      }
    });
  }, [expandedSections]);

  // Add null check for statsRef
  useEffect(() => {
    if (isVisible && statsRef.current) {
      // Animate the stats
      gsap.fromTo(
        statsRef.current.querySelectorAll('.stat'),
        { opacity: 0, scale: 0.8 },
        { 
          opacity: 1, 
          scale: 1, 
          duration: 0.5, 
          stagger: 0.15, 
          ease: "back.out(1.7)" 
        }
      );
    }
  }, [isVisible]);

  return (
    <section id="about" className="section" style={{ display: isVisible ? 'block' : 'none' }} ref={aboutRef}>
      <div className="container">
        <h2 className="section-title" ref={titleRef}>About Me</h2>
        
        <div className="about-content">
          <div className="about-text" ref={introTextRef}>
            <p>
              I love bringing ideas to life through code. As a frontend developer, I'm all about creating websites that not only look good but also work smoothly for the people using them. I started my journey in web development by diving deep into web technologies and finding ways to make digital experiences better, all through self-learning.
            </p>
            <p>
              When I'm working on a project, I try to balance good design with clean code. I'm not just interested in making things that look pretty – I want them to be built on a solid foundation too. I'm always tinkering with new tools and techniques, partly because tech moves so fast, but mostly because I genuinely enjoy it.
            </p>
          </div>
        </div>
        
        {/* Personal Background */}
        <div className="about-section" ref={addToSectionRefs}>
          <div className="section-header" onClick={() => toggleSection('background')}>
            <h3 className="subsection-title">
              <FaMapMarkerAlt className="section-icon" /> My Roots
            </h3>
            <button className="toggle-btn">
              {expandedSections.background ? <FaChevronUp /> : <FaChevronDown />}
            </button>
          </div>
          <div className={`about-background background-content ${expandedSections.background ? 'expanded' : 'collapsed'}`}>
            <p>
              I was born in Waterval Boven, Mpumalanga, and grew up in Middelburg. Currently, I'm based in Emalahleni (formerly known as Witbank). Growing up in Mpumalanga shaped my perspective on technology and its potential to connect communities.
            </p>
            <p>
              I'm a self-taught developer who's quick to learn and easily adaptable to new environments. This adaptability has been crucial in my transition from Human Resources Management to programming, allowing me to pick up new technologies and concepts efficiently.
            </p>
          </div>
        </div>
        
        {/* Education */}
        <div className="about-section" ref={addToSectionRefs}>
          <div className="section-header" onClick={() => toggleSection('education')}>
            <h3 className="subsection-title">
              <FaGraduationCap className="section-icon" /> Learning Journey
            </h3>
            <button className="toggle-btn">
              {expandedSections.education ? <FaChevronUp /> : <FaChevronDown />}
            </button>
          </div>
          <div className={`education-timeline education-content ${expandedSections.education ? 'expanded' : 'collapsed'}`}>
            <div className="education-item">
              <div className="education-year">2022</div>
              <div className="education-details">
                <h4>Cybersecurity & Data Protection</h4>
                <p>Self-Study & Online Courses</p>
                <p>My programming journey began with an interest in cybersecurity and data protection. Although financial constraints prevented me from completing formal education in this area, it sparked my interest in the broader field of programming.</p>
              </div>
            </div>
            <div className="education-item">
              <div className="education-year">2024</div>
              <div className="education-details">
                <h4>Web Development</h4>
                <p>FreeCodeCamp & Documentation</p>
                <p>After a break from programming, I returned with renewed focus in 2024. I've been learning through FreeCodeCamp courses and official documentation, building small projects to test and improve my skills daily.</p>
              </div>
            </div>
            <div className="education-item">
              <div className="education-year">Ongoing</div>
              <div className="education-details">
                <h4>Continuous Learning</h4>
                <p>Daily Practice & Projects</p>
                <p>I believe in learning by doing, so I'm constantly building small solutions to test my skills and deepen my understanding. Each project teaches me something new and helps me grow as a developer.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Previous Career */}
        <div className="about-section" ref={addToSectionRefs}>
          <div className="section-header" onClick={() => toggleSection('career')}>
            <h3 className="subsection-title">
              <FaUserTie className="section-icon" /> Career Transition
            </h3>
            <button className="toggle-btn">
              {expandedSections.career ? <FaChevronUp /> : <FaChevronDown />}
            </button>
          </div>
          <div className={`career-content ${expandedSections.career ? 'expanded' : 'collapsed'}`}>
            <p>
              Before diving into programming, I worked in Human Resources Management. While I gained valuable experience in that field, I eventually realized it wasn't where my true passion and talents lay.
            </p>
            <p>
              The transition from HR to programming has given me a unique perspective. My background in human resources helps me understand user needs and communicate effectively with stakeholders, while my technical skills allow me to build solutions that address those needs.
            </p>
          </div>
        </div>
        
        {/* Ambitions */}
        <div className="about-section" ref={addToSectionRefs}>
          <div className="section-header" onClick={() => toggleSection('ambitions')}>
            <h3 className="subsection-title">
              <FaLightbulb className="section-icon" /> Where I'm Headed
            </h3>
            <button className="toggle-btn">
              {expandedSections.ambitions ? <FaChevronUp /> : <FaChevronDown />}
            </button>
          </div>
          <div className={`ambitions-content ${expandedSections.ambitions ? 'expanded' : 'collapsed'}`}>
            <p>
              I'm working toward becoming a full-stack developer, but with a twist. I want to specialize in building systems that make sense for South African contexts – solutions that work with our unique infrastructure challenges and that solve problems people actually have here. I've been experimenting with offline-first applications and low-bandwidth optimizations that could make a real difference.
            </p>
            <p>
              I'd love to eventually lead a development team and help grow the tech community in Mpumalanga. There's so much talent here that goes undiscovered because people don't have the right opportunities or mentorship. I benefited from a few key people who took time to guide me, and I want to do the same for others.
            </p>
          </div>
        </div>
        
        {/* Vision */}
        <div className="about-section" ref={addToSectionRefs}>
          <div className="section-header" onClick={() => toggleSection('vision')}>
            <h3 className="subsection-title">
              <FaEye className="section-icon" /> My Vision
            </h3>
            <button className="toggle-btn">
              {expandedSections.vision ? <FaChevronUp /> : <FaChevronDown />}
            </button>
          </div>
          <div className={`vision-content ${expandedSections.vision ? 'expanded' : 'collapsed'}`}>
            <p>
              I believe technology should work for everyone, not just people in major cities with the latest devices and fast internet. Some of the most innovative solutions I've seen came from developers who had to work around limitations – that kind of creative problem-solving is what I value most.
            </p>
            <p>
              I get frustrated when I see brilliant South African developers leaving to work abroad because there aren't enough opportunities here. I want to be part of changing that. We should be building solutions for our own challenges and exporting that innovation to the world, not the other way around.
            </p>
          </div>
        </div>
        
        {/* Approach */}
        <div className="about-section" ref={addToSectionRefs}>
          <div className="section-header" onClick={() => toggleSection('approach')}>
            <h3 className="subsection-title">
              <FaBullseye className="section-icon" /> My Approach
            </h3>
            <button className="toggle-btn">
              {expandedSections.approach ? <FaChevronUp /> : <FaChevronDown />}
            </button>
          </div>
          <div className={`approach-content ${expandedSections.approach ? 'expanded' : 'collapsed'}`}>
            <p>
              I try to write code that won't make me cringe when I look at it six months later. That means keeping things simple, documenting the tricky parts, and not overengineering solutions. I've learned this the hard way after having to maintain some of my earlier projects!
            </p>
            <p>
              I'm a big believer in learning the fundamentals deeply before chasing every new framework that comes along. That said, I do enjoy experimenting with new tools – I just try to be thoughtful about what actually makes it into production code. At the end of the day, I care most about building things that work reliably and that solve real problems for real people.
            </p>
          </div>
        </div>
        
        <div className="section-navigation" ref={navigationRef}>
          <button className="nav-button prev" onClick={(e) => handleNavClick('hero', e)}>
            Back to HUB
          </button>
          <button className="nav-button next" onClick={(e) => handleNavClick('projects', e)}>
            View MY WORK
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
