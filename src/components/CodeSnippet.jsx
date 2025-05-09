import React, { useEffect, useRef, useCallback } from 'react';
import { FaTimes, FaCopy } from 'react-icons/fa';
import { gsap } from 'gsap';
import '../styles/CodeSnippet.css';

// Snippet data
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
  },

  // Villa Roma Project Snippets
  villaRomaCSS: {
    title: "Villa Roma CSS",
    language: "css",
    sections: [
      {
        title: "Basic CSS Reset Rules",
        code:
        `/* CSS Reset */
*, *::before, *::after {
margin: 0;
padding: 0;
box-sizing: border-box;
}

ol, ul {
list-style: circle;
margin-left: 15px;
margin-bottom: 15px;
}

html {
scrollbar-width: none;
-ms-overflow-style: none;
}

html::-webkit-scrollbar {
display: none;
}

blockquote, q {
quotes: none;
}

blockquote::before, blockquote::after, q::before, q::after {
content: none;
}

a {
text-decoration: none;
cursor: pointer;
color: black;
}

a:hover, a:active {
color: rgba(0, 0, 0, 0.455);
}

img {
max-width: 100%;
display: block;
border-style: none;
}

table {
border-collapse: collapse;
border-spacing: 0;
width: 100%;
}

body, input, textarea, button, select {
font-family: Arial, Helvetica, sans-serif;
font-size: 100%;
line-height: 1.5;
}

button, input, select, textarea {
background-color: transparent;
border: 0;
outline: 0;
-webkit-appearance: none;
appearance: none;
font-family: inherit;
}

button {
cursor: pointer;
}

img, video {
max-width: 100%;
height: auto;
}

:focus {
outline: 2px solid #000;
outline-offset: 2px;
}

article, aside, details, figcaption, figure, footer, header, main, nav, section, summary {
display: block;
overflow: hidden;
}

[hidden] {
display: none !important;
}

body {
line-height: 1.5;
-webkit-font-smoothing: antialiased;
-moz-font-smoothing: antialiased;
text-rendering: optimizeLegibility;
background-color: #000;
color: #333;
width: 100vw;
height: 100%;
position: relative;
}

hr {
border: 0;
border-top: 1px solid #ccc;
}

svg {
fill: currentColor;
}

[disabled] {
cursor: not-allowed;
}`
      },
      {
        title: "Page Styling",
        code:
        `.page {
width: 90vw;
height: 297mm;
max-width: 210mm;
margin: 20px auto;
background-color: #fff;
box-shadow: #333 0px 0px 10px;
padding: 1in;
scrollbar-width: none;
-ms-overflow-style: none;
}

#logo-section {
height: 80px;
background-color: rgb(255, 255, 255);
margin: -60px auto 30px auto;
}

#logos {
display: flex;
justify-content: space-between;
position: relative;
width: 100%;
height: 80px;
}

#logo1 {
width: 200px;
height: 100%;
}

#logo1 img {
width: 100%;
height: 100%;
object-fit: contain;
}

#logo2 {
width: 110px;
height: 100%;
}

#logo2 img {
width: 100%;
height: 100%;
object-fit: contain;
}

#logo3 {
width: 220px;
height: 100%;
}

#logo3 img {
width: 100%;
height: 100%;
object-fit: contain;
}

#enq-section {
margin-bottom: 10px;
}

#title-section {
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 10px;
}

#title-section h1 {
margin-top: 50%;
}`
      },
      {
        title: "Media Queries",
        code:
        `/* Tablet */
@media screen and (max-width: 768px) {
.page {
height: 90vh;
max-height: 297mm;
margin: 18px auto;
padding: 0.8in;
overflow: scroll;
scrollbar-width: none;
-ms-overflow-style: none;
}

.page::-webkit-scrollbar {
display: none;
}

#logo-section {
height: 80px;
margin: -25px auto 15px;
}

#title-section h1 {
margin-top: 30%;
font-size: 16pt;
margin-bottom: 8pt;
text-align: center;
}

h1 {
font-size: 16pt;
margin-bottom: 8pt;
}

p, li {
font-size: 10pt;
margin-bottom: 8pt;
line-height: 1.3;
}

#logos {
height: 70px;
}
}

/* Mobile */
@media screen and (max-width: 480px) {
.page {
margin: 5vh auto;
padding: 0.2in;
border-radius: 20px;
}

#logo-section {
height: 60px;
margin: -4px auto 8px;
}

#title-section h1 {
margin-top: 50%;
font-size: 14pt;
margin-bottom: 4pt;
}

h1 {
font-size: 12pt;
margin-bottom: 4pt;
}

h2, h3 {
font-size: 10pt;
margin-bottom: 4pt;
}

p, li {
font-size: 9pt;
margin-bottom: 4pt;
line-height: 1.4;
hyphens: auto;
word-break: break-word;
}

.line-breaker {
width: 100%;
height: 1.5px;
background-color: #ff0000;
}

.image-holder {
width: 100%;
height: 150px;
overflow: hidden;
}

.image-holder img {
width: 100%;
height: 100%;
object-fit: contain;
border-radius: 20px;
}
}`
      }
    ]
  },
  villaRomaJS: {
    title: "Villa Roma JS",
    language: "javascript",
    sections: [
      {
        title: "Scroll Monitoring and Helper Function",
        code:
        `const backToTopButton = document.getElementById('backToTop');
let lastScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

window.addEventListener('scroll', () => {
let currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

if (currentScrollPosition < lastScrollPosition) {
if (currentScrollPosition > 100) {
backToTopButton.classList.add('show');
} else {
backToTopButton.classList.remove('show');
}
} else {
backToTopButton.classList.remove('show');
}

lastScrollPosition = currentScrollPosition;
}, { passive: true });

backToTopButton.addEventListener('click', (e) => {
e.preventDefault();
window.scrollTo({
top: 0,
behavior: 'smooth',
});
});`
      },
      {
        title: "Event Listeners",
        code:
        `backToTopButton.addEventListener('click', e => {
e.preventDefault();
window.scrollTo({top:0,behavior:'smooth'});
});`
      },
      {
        title: "DOM Manipulation",
        code:
        `document.addEventListener('DOMContentLoaded', () => {
backToTopButton.classList.remove('show');

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function(e) {
e.preventDefault();
const targetId = this.getAttribute('href');
const targetElement = document.querySelector(targetId);

if(targetElement) {
targetElement.scrollIntoView({behavior:'smooth',block:'start'});
history.pushState(null,null,targetId);
}
});
});
});`
      }
    ]
  },

// MyPhysio Project Snippets
  myphysioAnimation: {
    title: "MyPhysio Animations",
    language: "javascript &amp; css",
    sections: [
      {
        title: "Navigation System",
        code:
        `useEffect(() => {
  let lastScrollTop = 0;
  const scrollThreshold = 100;
  const handleScroll = () => {};
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
  const handleClickOutside = (event) => {};
  document.addEventListener('mousedown', handleClickOutside);
  return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen, closeMenu]);

  useEffect(() => {
  return () => document.body.classList.remove('menu-open');
  }, []);

  useEffect(() => {
  navItemsRef.current = [];
  }, [location.pathname]);

  useEffect(() => {
  setTimeout(() => {
  navItemsRef.current.forEach((item, index) => {
  if (!item) return;
  const link = item.querySelector('.nav-link');
  if (!link) return;
  const path = index === 0 ? '/' : navItems[index - 1]?.path;
  if (path === undefined) return;
  const shouldBeActive = isLinkActive(path);
  if (shouldBeActive) {
  if (!link.classList.contains('active')) {
  link.classList.add('active');
  gsap.fromTo(link,{scale:1},{scale:1.05,duration:0.3,ease:'power2.out',yoyo:true,repeat:1});
  }
  } else {
  link.classList.remove('active');
  }
  });
  });
  }, [location.pathname, isLinkActive, navItems]);

  const addToNavItemsRef = (el) => {
  if (el && !navItemsRef.current.includes(el)) navItemsRef.current.push(el);
  };
        `
      },
      {
        title: "GSAP ScrollTrigger Animation",
        code:
        `gsap.registerPlugin(ScrollTrigger);

  const Documents = () => {
  const headerRef = useRef(null);
  const sectionsRef = useRef([]);
  const documentItemsRef = useRef([]);

  const addToSectionsRef = (el) => {};
  const addToDocumentItemsRef = (el) => {};

  useEffect(() => {
  gsap.fromTo(headerRef.current,{opacity:0,y:-30},{opacity:1,y:0,duration:0.8,ease:"power2.out"});

  sectionsRef.current.forEach(section => {
  gsap.fromTo(section,{opacity:0,y:30},{opacity:1,y:0,duration:0.8,ease:"power2.out",scrollTrigger:{trigger:section,start:"top 90%",end:"top 10%",toggleActions:"play none none none"}});
  });

  documentItemsRef.current.forEach((item,index) => {
  gsap.fromTo(item,{opacity:0,y:20},{opacity:1,y:0,duration:0.6,delay:index*0.15,ease:"power2.out",scrollTrigger:{trigger:item,start:"top 90%",end:"top 10%",toggleActions:"play none none none"}});
  });

  return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }, []);`
      },
      {
        title: "Collapsible Section CSS Animation Setup",
        code:
        `/* Collapsible Sections */  
  .collapsible-section {  
  margin-bottom: 1rem;  
  border: 1px solid var(--gray-200);  
  border-radius: 8px;  
  overflow: hidden;  
  }  

  .collapsible-button {  
  width: 100%;  
  padding: 1.25rem;  
  background: var(--white);  
  border: none;  
  font-size: 1.1rem;  
  font-weight: 600;  
  color: var(--text-dark);  
  cursor: pointer;  
  display: flex;  
  justify-content: space-between;  
  align-items: center;  
  transition: background-color 0.3s ease;  
  }  

  .collapsible-button:hover {  
  background-color: var(--gray-100);  
  }  

  .collapsible-button span {  
  flex: 1;  
  }  

  .collapsible-button svg {  
  font-size: 0.9rem;  
  color: var(--orange-500);  
  transition: transform 0.3s ease;  
  }  

  .collapsible-content {  
  padding: 0 1.25rem 1.25rem;  
  background: var(--white);  
  border-top: 1px solid var(--gray-200);  
  }  

  .collapsible-content h3 {  
  font-size: 1.2rem;  
  font-weight: 600;  
  color: var(--orange-600);  
  margin: 1.5rem 0 1rem;  
  }  

  .collapsible-content p {  
  font-size: 0.95rem;  
  line-height: 1.6;  
  color: var(--text-dark);  
  margin-bottom: 0.75rem;  
  }`
      }
    ]
  },
  myphysioContact: {
    title: "MyPhysio Contact Component",
    language: "JavaScript",
    sections: [
      {
        title: "Contact React Component",
        code:
        `import React, { useEffect, useRef } from 'react';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import { FaMapMarkerAlt, FaPhone, FaWhatsapp, FaFacebookSquare, FaEnvelope } from 'react-icons/fa';
  import '../../styles-config/components/Contact.css';

  gsap.registerPlugin(ScrollTrigger);

  const Contact = () => {
  const headerRef = useRef(null);
  const sectionsRef = useRef([]);

  const addToSectionsRef = (el) => {
  if (el && !sectionsRef.current.includes(el)) sectionsRef.current.push(el);
  };

  useEffect(() => {
  gsap.fromTo(headerRef.current,{opacity:0,y:-30},{opacity:1,y:0,duration:0.8,ease:"power2.out"});

  sectionsRef.current.forEach(section => {
  gsap.fromTo(section,{opacity:0,y:30},{opacity:1,y:0,duration:0.8,ease:"power2.out",scrollTrigger:{trigger:section,start:"top 90%",end:"top 10%",toggleActions:"play none none none"}});
  });

  return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }, []);

  return (
  <div className="contact-container">
  <div ref={headerRef} className="contact-header">
  <h1>Contact Us</h1>
  <div className="contact-subtitle">Get in touch with Van der Walt Physiotherapists</div>
  </div>

  <div className="contact-content">
  <div className="contact-grid">
  <div ref={addToSectionsRef} className="contact-info-section">
  <div className="contact-card">
  <div className="contact-card">
  <div className="contact-card-header">
  <FaPhone className="contact-icon"/>
  <h2>Phone Us</h2>
  </div>
  <div className="contact-card-content">
  <a href="tel:+27136562331" className="contact-link">013-656-2331</a>
  <a href="tel:+27871494320" className="contact-link">087-149-4320</a>
  <a href="tel:+27871531627" className="contact-link">087-153-1627</a>
  </div>
  </div>

  <div className="contact-card">
  <div className="contact-card-header">
  <FaWhatsapp className="contact-icon"/>
  <h2>WhatsApp Us</h2>
  </div>
  <div className="contact-card-content">
  <a href="https://wa.me/27833809768" target="_blank" rel="noopener noreferrer" className="contact-link whatsapp-link">
  <FaWhatsapp className="contact-link-icon"/>
  Click to Chat: 083 380 9768
  </a>
  </div>
  </div>

  <div className="contact-card">
  <div className="contact-card-header">
  <FaEnvelope className="contact-icon"/>
  <h2>Email Us</h2>
  </div>
  <div className="contact-card-content">
  <a href="mailto:admin@myphysio.pro" className="contact-link">
  <FaEnvelope className="contact-link-icon"/>
  admin@myphysio.pro
  </a>
  </div>
  </div>

  <div className="contact-card">
  <div className="contact-card-header">
  <FaFacebookSquare className="contact-icon"/>
  <h2>Social Media</h2>
  </div>
  <div className="contact-card-content">
  <a href="https://www.facebook.com/JacoVanDerWaltPhysiotherapists" target="_blank" rel="noopener noreferrer" className="contact-link facebook-link">
  <FaFacebookSquare className="contact-link-icon"/>
  Jaco van der Walt Physiotherapists
  </a>
  </div>
  </div>
  </div>

  <div ref={addToSectionsRef} className="contact-map-section">
  <div className="map-container">
  <h2>Our Location</h2>
  <div className="map-wrapper">
  <iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.0506246750734!2d29.22815491502734!3d-25.87654998358985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1eebbf1f6f7b5c7d%3A0x5c2a1a9d9c0c9b9e!2s117%20Woltemade%20St%2C%20Die%20Heuwel%2C%20Emalahleni%2C%201035!5e0!3m2!1sen!2sza!4v1628000000000!5m2!1sen!2sza" 
  width="100%" 
  height="450" 
  style={{border:0}} 
  allowFullScreen="" 
  loading="lazy" 
  referrerPolicy="no-referrer-when-downgrade"
  title="Van der Walt Physiotherapists Location"
  className="google-map"
  ></iframe>
  </div>
  <p className="map-note">Click on the map to interact or open in Google Maps</p>
  </div>
  </div>
  </div>

  <div ref={addToSectionsRef} className="contact-hours-section">
  <div className="hours-card">
  <h2>Practice Hours</h2>
  <div className="hours-grid">
  <div className="hours-day">
  <span className="day">Monday - Friday</span>
  <span className="time">8:00 AM - 5:00 PM</span>
  </div>
  <div className="hours-day">
  <span className="day">Saturday</span>
  <span className="time">By Appointment</span>
  </div>
  <div className="hours-day">
  <span className="day">Sunday & Public Holidays</span>
  <span className="time">Closed</span>
  </div>
  </div>
  </div>
  </div>

  <div ref={addToSectionsRef} className="contact-form-section">
  <div className="form-card">
  <h2>Send Us a Message</h2>
  <form className="contact-form">
  <div className="form-group">
  <label htmlFor="name">Your Name</label>
  <input type="text" id="name" name="name" required/>
  </div>

  <div className="form-group">
  <label htmlFor="email">Your Email</label>
  <input type="email" id="email" name="email" required/>
  </div>

  <div className="form-group">
  <label htmlFor="phone">Your Phone</label>
  <input type="tel" id="phone" name="phone"/>
  </div>

  <div className="form-group">
  <label htmlFor="message">Your Message</label>
  <textarea id="message" name="message" rows="5" required></textarea>
  </div>

  <button type="submit" className="submit-button">Send Message</button>
  </form>
  </div>
  </div>
  </div>
  </div>
  </div>
  );
  };

  export default Contact;`
      }
    ]
  },

// Harvey Nortje Project Snippets
  portfolioReact: {
    title: "Harvey Nortje Components",
    language: "JavaScript",
    sections: [
      {
        title: "BEE Component",
        code:
        `import React, { useEffect, useRef } from 'react';
  import { gsap } from 'gsap';
  import './BEE.css';

  const BEE = () => {
  const pageRef = useRef(null);
  const headerRef = useRef(null);
  const contentRef = useRef(null);
  const badgeRef = useRef(null);
  const certificateRef = useRef(null);
  const commitmentRef = useRef(null);

  useEffect(() => {
  const tl = gsap.timeline();

  tl.fromTo(pageRef.current,{opacity:0},{opacity:1,duration:0.8,ease:"power2.out"})
  .fromTo(headerRef.current,{y:-30,opacity:0},{y:0,opacity:1,duration:0.7,ease:"power3.out"},"-=0.4")
  .fromTo(contentRef.current,{y:40,opacity:0},{y:0,opacity:1,duration:0.7,ease:"power2.out"},"-=0.3")
  .fromTo(badgeRef.current,{scale:0.5,opacity:0,rotation:-15},{scale:1,opacity:1,rotation:0,duration:1,ease:"elastic.out(1.2, 0.5)"},"-=0.2")
  .fromTo(certificateRef.current,{y:20,opacity:0},{y:0,opacity:1,duration:0.6,ease:"back.out(1.4)"},"-=0.6")
  .fromTo(commitmentRef.current,{y:30,opacity:0},{y:0,opacity:1,duration:0.7,ease:"power2.out"},"-=0.3")
  .fromTo(".bee-commitment ul li",{x:-20,opacity:0},{x:0,opacity:1,duration:0.4,stagger:0.1,ease:"power2.out"},"-=0.2");

  window.scrollTo(0,0);
  }, []);

  return (
  <div className="bee-page" ref={pageRef}>
  <div className="bee-header" ref={headerRef}>
  <div className="container">
  <h1>BEE</h1>
  <p className="bee-intro">Black Economic Empowerment</p>
  </div>
  </div>

  <div className="bee-content" ref={contentRef}>
  <div className="container">
  <div className="bee-section">
  <div className="bee-info">
  <p>Our firm is committed to implement Black Economic Empowerment and is currently a <strong>Level 2 contributor</strong>.</p>

  <div className="certificate-link" ref={certificateRef}>
  <a href="https://harveynortje.co.za/images/2024/BEE/BEE_Sertifikaat_2024.pdf" target="_blank" rel="noopener noreferrer" className="certificate-button">
  <span className="icon">📄</span>
  <span className="text">View our Broad Based Black Economic Empowerment Certificate</span>
  </a>
  </div>
  </div>

  <div className="bee-badge" ref={badgeRef}>
  <div className="level-badge">
  <div className="level-number">2</div>
  <div className="level-text">BEE Level</div>
  </div>
  </div>
  </div>

  <div className="bee-commitment" ref={commitmentRef}>
  <h2>Our Commitment to Transformation</h2>
  <p>
  At Harvey Nortje Attorneys, we are dedicated to the principles of economic transformation and 
  empowerment in South Africa. Our Level 2 B-BBEE status reflects our ongoing commitment to:
  </p>
  <ul>
  <li>Promoting diversity and inclusion within our firm</li>
  <li>Supporting skills development and training initiatives</li>
  <li>Contributing to socio-economic development in our communities</li>
  <li>Implementing fair and equitable employment practices</li>
  <li>Engaging with and supporting black-owned businesses</li>
  </ul>
  </div>
  </div>
  </div>
  </div>
  );
  };

  export default BEE;`
      },
      {
        title: "Careers Component",
        code:
        `import React, { useEffect, useRef } from 'react';
  import { gsap } from 'gsap';
  import './Careers.css';

  const Careers = () => {
  const pageRef = useRef(null);
  const headerRef = useRef(null);
  const contentRef = useRef(null);
  const benefitsRef = useRef(null);

  useEffect(() => {
  const tl = gsap.timeline();

  gsap.set([pageRef.current, headerRef.current, contentRef.current, benefitsRef.current, ".qualities-list li", ".benefit-card"], {visibility:"visible"});

  tl.fromTo(pageRef.current,{opacity:0},{opacity:1,duration:0.8,ease:"power2.out"})
  .fromTo(headerRef.current,{y:-20,opacity:0},{y:0,opacity:1,duration:0.8,ease:"power2.out"},"-=0.6")
  .fromTo(contentRef.current,{y:30,opacity:0},{y:0,opacity:1,duration:0.8,ease:"power2.out"},"-=0.6")
  .fromTo(".qualities-list li",{x:-20,opacity:0},{x:0,opacity:1,duration:0.5,stagger:0.1,ease:"power2.out"},"-=0.4")
  .fromTo(benefitsRef.current,{y:30,opacity:0},{y:0,opacity:1,duration:0.8,ease:"power2.out"},"-=0.2")
  .fromTo(".benefit-card",{y:20,opacity:0,scale:0.95},{y:0,opacity:1,scale:1,duration:0.6,stagger:0.15,ease:"back.out(1.2)"},"-=0.6");

  window.scrollTo(0,0);
  return () => tl.kill();
  }, []);

  return (
  <div className="careers-page" ref={pageRef}>
  <div className="careers-header" ref={headerRef}>
  <div className="container">
  <h1>Careers</h1>
  <p className="careers-intro">Explore career opportunities at Harvey Nortje Attorneys</p>
  </div>
  </div>

  <div className="careers-content" ref={contentRef}>
  <div className="container">
  <div className="careers-section">
  <h2>Working at Harvey Nortje Attorneys</h2>

  <p className="careers-description">
  As a result of our commitment to excellence, we require employees with exceptional skills and commitment. 
  Our emphasis on recruiting high calibre people and providing them with development opportunities, is vital 
  to attracting and retaining top people. This ensures that our employees - professionals and support staff - 
  provide the best legal services to our clients as one of the cornerstones of our practice.
  </p>

  <div className="qualities-section">
  <h3>We are looking to employ candidates with:</h3>

  <ul className="qualities-list">
  <li>The ability and drive to progress</li>
  <li>Leadership skills</li>
  <li>Commitment</li>
  <li>Academic excellence</li>
  <li>Enthusiasm and creativity</li>
  <li>Integrity and a zero-tolerance for negative intent</li>
  <li>A well-balanced lifestyle in respect of career, sport, hobbies, socialising etc. – an all-rounder</li>
  <li>Excellent communication skills</li>
  </ul>
  </div>

  <div className="careers-cta">
  <h3>Interested in joining our team?</h3>
  <p>
  If you believe you have what it takes to be part of our dynamic team, we'd love to hear from you.
  Please send your CV and a cover letter to our HR department.
  </p>
  <a href="mailto:careers@harveynortje.co.za" className="apply-button">Apply Now</a>
  </div>
  </div>

  <div className="careers-benefits" ref={benefitsRef}>
  <h2>Why Work With Us</h2>

  <div className="benefits-grid">
  <div className="benefit-card">
  <div className="benefit-icon">🚀</div>
  <h3>Professional Growth</h3>
  <p>Continuous learning and development opportunities to advance your legal career</p>
  </div>

  <div className="benefit-card">
  <div className="benefit-icon">👥</div>
  <h3>Collaborative Culture</h3>
  <p>Work alongside experienced attorneys in a supportive team environment</p>
  </div>

  <div className="benefit-card">
  <div className="benefit-icon">⚖️</div>
  <h3>Diverse Practice Areas</h3>
  <p>Gain experience across multiple legal disciplines and specializations</p>
  </div>

  <div className="benefit-card">
  <div className="benefit-icon">🏆</div>
  <h3>Recognition</h3>
  <p>Your contributions and achievements will be valued and recognized</p>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  );
  };

  export default Careers;`
      },
      {
        title: "History Component",
        code:
        `import React, { useEffect, useRef } from 'react';
  import { gsap } from 'gsap';
  import './History.css';

  const History = () => {
  // Create refs for animated elements
  const pageRef = useRef(null);
  const headerRef = useRef(null);
  const contentRef = useRef(null);
  const timelineRef = useRef(null);
  const valuesRef = useRef(null);

  useEffect(() => {
  // Simple fade-in animation for the entire page
  gsap.fromTo(
  pageRef.current,
  { opacity: 0 },
  { opacity: 1, duration: 0.8, ease: "power2.out" }
  );

  // Simple animation for header
  gsap.fromTo(
  headerRef.current,
  { y: -20, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", delay: 0.2 }
  );

  // Simple animation for content
  gsap.fromTo(
  contentRef.current,
  { y: 30, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", delay: 0.4 }
  );

  // Staggered animation for timeline items
  gsap.fromTo(
  ".timeline-item",
  { x: -30, opacity: 0 },
  {
  x: 0,
  opacity: 1,
  duration: 0.7,
  stagger: 0.2,
  ease: "power2.out",
  delay: 0.6
  }
  );

  // Animation for values section
  gsap.fromTo(
  valuesRef.current,
  { y: 30, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", delay: 0.8 }
  );

  // Staggered animation for value cards
  gsap.fromTo(
  ".value-card",
  { y: 20, opacity: 0, scale: 0.95 },
  {
  y: 0,
  opacity: 1,
  scale: 1,
  duration: 0.6,
  stagger: 0.15,
  ease: "back.out(1.2)",
  delay: 1
  }
  );

  // Scroll to top when component mounts
  window.scrollTo(0, 0);
  }, []);

  return (
  <div className="history-page" ref={pageRef}>
  <div className="history-header" ref={headerRef}>
  <div className="container">
  <h1>Since 1908</h1>
  <p className="history-intro">
  Learn about our rich history and heritage dating back to 1908.
  </p>
  </div>
  </div>
  <div className="history-content" ref={contentRef}>
  <div className="container">
  <div className="history-section">
  <div className="history-text">
  <p>
  One of our main focuses is to maintain Sound Client Relationships built on trust and confidentiality,
  and to be experienced by our clients and partners as an accessible firm that will do everything in
  its power to meet the individual needs of all our clients.
  </p>
  <p>
  The firm was established in 1908 in Witbank, Mpumalanga under the name of A E Harvey, and has
  since grown to a well established law firm.
  </p>
  <p>
  With offices situated in Emalahleni (Witbank), Mpumalanga, together with our national network
  of partners, we are able to render our services to clients country wide.
  </p>
  <p>
  We consist of a team of motivated and competent personnel who display a splendid team spirit
  based on mutual respect and trust, which enables us to provide excellent service to all our clients.
  </p>
  </div>
  <div className="history-timeline" ref={timelineRef}>
  <div className="timeline-item">
  <div className="timeline-year">1908</div>
  <div className="timeline-content">
  <h3>Establishment</h3>
  <p>Firm established in Witbank, Mpumalanga under the name of A E Harvey</p>
  </div>
  </div>
  <div className="timeline-item">
  <div className="timeline-year">1950s</div>
  <div className="timeline-content">
  <h3>Growth Period</h3>
  <p>Expansion of services and client base throughout Mpumalanga</p>
  </div>
  </div>
  <div className="timeline-item">
  <div className="timeline-year">1980s</div>
  <div className="timeline-content">
  <h3>Partnership Formation</h3>
  <p>Evolution into Harvey Nortje Attorneys with expanded legal expertise</p>
  </div>
  </div>
  <div className="timeline-item">
  <div className="timeline-year">Today</div>
  <div className="timeline-content">
  <h3>Modern Practice</h3>
  <p>A well-established law firm with a national network of partners</p>
  </div>
  </div>
  </div>
  </div>
  <div className="history-values" ref={valuesRef}>
  <h2>Our Core Values</h2>
  <div className="values-grid">
  <div className="value-card">
  <div className="value-icon">⚖️</div>
  <h3>Integrity</h3>
  <p>Upholding the highest ethical standards in all our dealings</p>
  </div>
  <div className="value-card">
  <div className="value-icon">🤝</div>
  <h3>Trust</h3>
  <p>Building lasting relationships based on mutual trust and confidentiality</p>
  </div>
  <div className="value-card">
  <div className="value-icon">👥</div>
  <h3>Accessibility</h3>
  <p>Remaining approachable and responsive to all our clients' needs</p>
  </div>
  <div className="value-card">
  <div className="value-icon">✨</div>
  <h3>Excellence</h3>
  <p>Striving for excellence in every aspect of our legal services</p>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  );
  };

  export default History;`
      }
    ]
  },
  portfolioCSS: {
    title: "Harvey Nortje CSS Snippets",
    language: "CSS",
    sections: [
      {
        title: "Variables and Styles",
        code: `:root {
  /* Primary Colors */
  --primary-orange: #ff7f00;
  --primary-orange-light: #ff9933;
  --primary-orange-dark: #cc6600;

  /* Neutral Colors */
  --neutral-black: #000000;
  --neutral-gray-dark: #333333;
  --neutral-gray: #666666;
  --neutral-gray-light: #999999;
  --neutral-gray-lighter: #cccccc;
  --neutral-white: #ffffff;

  /* Functional Colors */
  --text-primary: var(--neutral-white);
  --text-secondary: var(--neutral-gray-lighter);
  --background-primary: var(--neutral-white);
  --background-secondary: #f8f8f8;
  --accent: var(--primary-orange);
  --border: var(--neutral-gray);

  /* Component-specific colors */
  --header-background: var(--neutral-black);
  --header-text: var(--neutral-white);
  --header-text-hover: var(--neutral-gray-lighter);
  --header-active: var(--primary-orange);
  --header-shadow: rgba(255, 127, 0, 0.15);
  --header-gradient-start: #000000;
  --header-gradient-end: #1a1a1a;
  --submenu-background: rgba(26, 26, 26, 0.95);
  --footer-background: var(--neutral-gray-dark);
  --footer-text: var(--neutral-white);
  }`
      },
      {
        title: "Responsive Media Queries",
        code: `/* Responsive Styles */
  @media (max-width: 992px) {
  .services-header h1 {
  font-size: 2.5rem;
  }
  .services-intro {
  font-size: 1.1rem;
  }
  .services-grid {
  grid-template-columns: repeat(2, 1fr);
  }
  .service-card {
  height: 360px;
  padding: 2.5rem;
  }
  .service-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  }
  .service-card h2 {
  font-size: 1.6rem;
  margin-bottom: 1.2rem;
  }
  .service-description {
  font-size: 1rem;
  height: 6.4rem; /* 4 lines × 1.6 line-height × 1.0 font-size */
  }
  .services-cta h2 {
  font-size: 2.2rem;
  }
  .services-cta p {
  font-size: 1.1rem;
  }
  }

  @media (max-width: 768px) {
  .services-header {
  padding: 4rem 0 2.5rem;
  }
  .services-content {
  padding: 4rem 0;
  }
  .services-grid {
  grid-template-columns: 1fr;
  max-width: 500px;
  margin: 0 auto;
  }
  .service-card {
  height: 340px;
  padding: 2.2rem;
  }
  .more-info-button {
  padding: 0 2.2rem;
  }
  .services-cta {
  padding: 3rem 0;
  margin: 0 1rem;
  }
  .services-cta h2 {
  font-size: 2rem;
  }
  }

  @media (max-width: 576px) {
  .services-header h1 {
  font-size: 2rem;
  }
  .services-intro {
  font-size: 1rem;
  }
  .services-content {
  padding: 3rem 0;
  }
  .service-card {
  height: 320px;
  padding: 2rem;
  }
  .service-icon {
  font-size: 2.8rem;
  margin-bottom: 1.2rem;
  }
  .service-card h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  }
  .service-description {
  font-size: 0.95rem;
  height: 6.08rem; /* 4 lines × 1.6 line-height × 0.95 font-size */
  margin-bottom: 1.5rem;
  }
  .more-info-button {
  height: 45px;
  padding: 0 2rem;
  }
  .more-info-button .text {
  font-size: 1rem;
  }
  .services-cta h2 {
  font-size: 1.8rem;
  }
  .services-cta p {
  font-size: 1rem;
  }
  .cta-button {
  font-size: 1rem;
  padding: 0.9rem 2rem;
  }
  }`
      },
      {
        title: "Basic CSS STyling",
        code: `@import '../../styles/variables.css';

  .home-page {
  width: 100%;
  overflow-x: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;
  }

  .home-page::-webkit-scrollbar {
  display: none;
  }

  /* COVID Banner */
  .covid-banner {
  background: linear-gradient(90deg, var(--primary-orange), var(--primary-orange-dark));
  color: white;
  text-align: center;
  padding: 0.8rem 1rem;
  font-weight: 500;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  position: relative;
  z-index: 1;
  border-radius: 10px;
  }

  .covid-banner a {
  color: white;
  text-decoration: underline;
  font-weight: 600;
  margin-left: 0.3rem;
  transition: color 0.2s ease;
  }

  .covid-banner a:hover {
  color: var(--neutral-white);
  text-decoration: none;
  }

  /* Hero Section */
  .hero-section {
  position: relative;
  height: 80vh;
  min-height: 500px;
  max-height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-top: 10px;
  border-radius: 10px;
  }

  .hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
  to bottom,
  rgba(0, 0, 0, 0.6) 0%,
  rgba(0, 0, 0, 0.4) 50%,
  rgba(0, 0, 0, 0.7) 100%
  );
  z-index: 1;
  }

  .hero-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  }

  .hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
  padding: 0 2rem;
  max-width: 900px;
  }

  .hero-content h1 {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  }

  .hero-content p {
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 2rem;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
  }

  /* Main Content */
  .main-content {
  padding: 5rem 0;
  background-color: var(--background-primary);
  }

  .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  }

  .main-content h2 {
  font-size: 2.5rem;
  color: var(--primary-orange);
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  }`
      }
    ]
  },

  // Chef Luu Portfolio
  aboutChefLuu: {
    title: "About Chef Luu React Component",
    language: "JavaScript",
    sections: [
      {
        
      }
    ]
  }

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
