import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaNodeJs, 
  FaEnvelope, FaLinkedin, FaTwitter, FaGithubSquare,
  FaDatabase, FaBootstrap, FaCode
} from 'react-icons/fa';
import { SiTailwindcss, SiCodeium } from 'react-icons/si';
import '../styles/ThemeAdaptiveIcons.css'; // Import the theme-adaptive CSS

const Hero = ({ isVisible, handleNavClick }) => {
  // Refs for GSAP animations
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const skillsRef = useRef(null);
  const buttonsRef = useRef(null);
  const contactRef = useRef(null);
  const imageRef = useRef(null);
  const techIconsRef = useRef(null);

  // GSAP animations when component becomes visible
  useEffect(() => {
    if (isVisible) {
      // Create a timeline for sequential animations
      const tl = gsap.timeline();
      
      // Animate the main elements
      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );
      
      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=0.4" // Start slightly before previous animation ends
      );
      
      tl.fromTo(
        descriptionRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.2"
      );
      
      // Animate the profile image with a bounce effect
      tl.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" },
        "-=0.6"
      );
      
      // Animate the skills section title
      tl.fromTo(
        skillsRef.current.querySelector('h3'),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.4"
      );
      
      // Animate each tech icon with a stagger effect
      tl.fromTo(
        techIconsRef.current.querySelectorAll('.tech-icon'),
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.4, 
          stagger: 0.1, 
          ease: "power1.out" 
        },
        "-=0.2"
      );
      
      // Animate the buttons
      tl.fromTo(
        buttonsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=0.2"
      );
      
      // Animate the contact section
      tl.fromTo(
        contactRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8 },
        "-=0.4"
      );
      
      // Add hover animations for tech icons
      const techIcons = techIconsRef.current.querySelectorAll('.tech-icon');
      techIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
          gsap.to(icon, { y: -10, duration: 0.3, ease: "power2.out" });
        });
        
        icon.addEventListener('mouseleave', () => {
          gsap.to(icon, { y: 0, duration: 0.3, ease: "power2.out" });
        });
      });
      
      // Clean up event listeners
      return () => {
        techIcons.forEach(icon => {
          icon.removeEventListener('mouseenter', () => {});
          icon.removeEventListener('mouseleave', () => {});
        });
      };
    }
  }, [isVisible]);

  return (
    <section className="hero" style={{ display: isVisible ? 'block' : 'none' }} ref={heroRef}>
      <div className="container">
        <div className="hero-content">
          <h1 ref={titleRef}>Ntsako Doctor Khoza</h1>
          <h2 ref={subtitleRef}>Frontend Developer</h2>
          <p className="hero-description" ref={descriptionRef}>
            I create engaging web applications, systems, and websites with a focus on user experience and modern technologies.
          </p>
          
          {/* Skills section integrated into hero */}
          <div className="hero-skills" ref={skillsRef}>
            <h3>My Technologies</h3>
            <div className="tech-icons" ref={techIconsRef}>
              <div className="tech-icon">
                <FaHtml5 className="icon html" />
                <span>HTML5</span>
              </div>
              <div className="tech-icon">
                <FaCss3Alt className="icon css" />
                <span>CSS3</span>
              </div>
              <div className="tech-icon">
                <FaJs className="icon js" />
                <span>JavaScript</span>
              </div>
              <div className="tech-icon">
                <FaReact className="icon react" />
                <span>React</span>
              </div>
              <div className="tech-icon">
                <FaGithub className="icon github" />
                <span>GitHub</span>
              </div>
              <div className="tech-icon">
                <SiCodeium className="icon codeium" />
                <span>Codeium AI</span>
              </div>
              <div className="tech-icon">
                <SiTailwindcss className="icon tailwind" />
                <span>Tailwind</span>
              </div>
              <div className="tech-icon">
                <FaBootstrap className="icon bootstrap" />
                <span>Bootstrap</span>
              </div>
              <div className="tech-icon">
                <FaCode className="icon gsap" />
                <span>GSAP</span>
              </div>
              <div className="tech-icon">
                <FaNodeJs className="icon node" />
                <span>Node.js</span>
              </div>
              <div className="tech-icon">
                <FaDatabase className="icon sql" />
                <span>SQL</span>
              </div>
            </div>
          </div>
          
          <div className="hero-buttons" ref={buttonsRef}>
            <a href="#projects" className="button primary" onClick={(e) => handleNavClick('projects', e)}>
              View My Work
            </a>
            <a href="#about" className="button secondary" onClick={(e) => handleNavClick('about', e)}>
              About Me
            </a>
          </div>
          
          {/* Contact section integrated into hero */}
          <div className="hero-contact" ref={contactRef}>
            <h3>Get In Touch</h3>
            <div className="contact-icons">
              <a href="mailto:ntsako@example.com" className="contact-icon">
                <FaEnvelope />
                <span>Email</span>
              </a>
              <a href="https://linkedin.com/in/ntsakodoctorkhoza" className="contact-icon">
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/dev-doc" className="contact-icon">
                <FaGithubSquare className="github-contact" />
                <span>GitHub</span>
              </a>
              <a href="https://twitter.com/devdoc" className="contact-icon">
                <FaTwitter />
                <span>Twitter</span>
              </a>
            </div>
          </div>
        </div>
        <div className="hero-image" ref={imageRef}>
          {/* You can add your profile image here */}
          <div className="profile-placeholder">
            <span className="accent">NK</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
