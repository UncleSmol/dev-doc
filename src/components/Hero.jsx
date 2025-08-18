import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

import {
  FaWhatsapp,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
  FaNodeJs,
  FaEnvelope,
  FaLinkedin,
  FaGithubSquare,
  FaDatabase,
  FaBootstrap,
  FaCode,
  FaTimes,
  FaFileExcel,
  FaPhone,
} from "react-icons/fa";
import { SiTailwindcss, SiCodeium } from "react-icons/si";
import "../styles/ThemeAdaptiveIcons.css";
import "../styles/PricingPopup.css";
import ProfilePhoto from "../images/myProfileImage.jpg";
import pricingPackages from "../shared/PricingPackages";
import handlePackageInquiry from "../utils/packageInquiry";
const Hero = ({ isVisible, handleNavClick }) => {
  // State for pricing popup
  const [showPricing, setShowPricing] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

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
  const pricingPopupRef = useRef(null);
  const packageDetailsRef = useRef(null);

  // Toggle pricing popup
  const togglePricingPopup = () => {
    setShowPricing(!showPricing);
    if (selectedPackage) setSelectedPackage(null);
  };

  // View package details
  const viewPackageDetails = (packageType) => {
    setSelectedPackage(packageType);
  };

  // Close package details
  const closePackageDetails = (e) => {
    if (e) e.stopPropagation();
    setSelectedPackage(null);
  };

  // Close pricing popup when clicking outside
  const handleBackdropClick = (e) => {
    if (e.target.classList.contains("pricing-popup-overlay")) {
      setShowPricing(false);
      setSelectedPackage(null);
    } else if (e.target.classList.contains("package-details-overlay")) {
      closePackageDetails();
    }
  };

  // Handle the "Get Started" button click to open inquiry form
  const handleGetStarted = (packageType) => {
    handlePackageInquiry(pricingPackages[packageType], () => {
      console.log("Inquiry dialog closed for", packageType);
      togglePricingPopup();
    });
  };

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
        skillsRef.current.querySelector("h3"),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.4"
      );

      // Animate each tech icon with a stagger effect
      tl.fromTo(
        techIconsRef.current.querySelectorAll(".tech-icon"),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.1,
          ease: "power1.out",
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
      const techIcons = techIconsRef.current.querySelectorAll(".tech-icon");
      techIcons.forEach((icon) => {
        icon.addEventListener("mouseenter", () => {
          gsap.to(icon, { y: -10, duration: 0.3, ease: "power2.out" });
        });

        icon.addEventListener("mouseleave", () => {
          gsap.to(icon, { y: 0, duration: 0.3, ease: "power2.out" });
        });
      });

      // Clean up event listeners
      return () => {
        techIcons.forEach((icon) => {
          icon.removeEventListener("mouseenter", () => {});
          icon.removeEventListener("mouseleave", () => {});
        });
      };
    }
  }, [isVisible]);

  // Animation for pricing popup
  useEffect(() => {
    if (showPricing && pricingPopupRef.current) {
      // Animate the popup when it opens
      gsap.fromTo(
        pricingPopupRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
      );

      // Animate each pricing package with a stagger effect
      const packages =
        pricingPopupRef.current.querySelectorAll(".pricing-package");

      if (packages.length > 0) {
        gsap.fromTo(
          packages,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "back.out(1.2)",
          }
        );
      }
    }
  }, [showPricing]);

  // Animation for package details
  useEffect(() => {
    if (selectedPackage && packageDetailsRef.current) {
      gsap.fromTo(
        packageDetailsRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" }
      );
    }
  }, [selectedPackage]);

  return (
    <section
      className="hero"
      style={{ display: isVisible ? "block" : "none" }}
      ref={heroRef}
    >
      <div className="container">
        <div className="hero-content">
          <h1 ref={titleRef}>NTSAKO 'DOC' KHOZA</h1>
          <h2 ref={subtitleRef}>Frontend Developer</h2>
          <p className="hero-description" ref={descriptionRef}>
            Hello, I'm Doc, I build engaging web applications, systems, and
            websites with a focus on user experience and modern technologies.
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
              <div className="tech-icon">
                <FaFileExcel className="icon excel" />
                <span>VBA</span>
              </div>
            </div>
          </div>

          <div className="hero-buttons" ref={buttonsRef}>
            <a
              href="#projects"
              className="button primary"
              onClick={(e) => handleNavClick("projects", e)}
            >
              View My Work
            </a>
            <a
              href="#about"
              className="button secondary"
              onClick={(e) => handleNavClick("about", e)}
            >
              About Me
            </a>
            <button className="button secondary" onClick={togglePricingPopup}>
              Work With Me?
            </button>
          </div>

          {/* Contact section integrated into hero */}
          <div className="hero-contact" ref={contactRef}>
            <h3>Get In Touch</h3>
            <div className="contact-icons">
              <a href="mailto:dev.doc@outlook.com" className="contact-icon">
                <FaEnvelope />
                <span>Email</span>
              </a>
              <a
                href="https://www.linkedin.com/in/ntsako-khoza-a42a08356/"
                className="contact-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/UncleSmol"
                className="contact-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithubSquare className="github-contact" />
                <span>GitHub</span>
              </a>
              <a href="tel:+27687180502" className="contact-icon">
                <FaPhone />
                <span>Call</span>
              </a>
              {/* WhatsApp Contact */}
              <a
                href="https://wa.me/27687180502"
                className="contact-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />{" "}
                {/* Make sure to import FaWhatsapp from react-icons/fa */}
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
        <div className="hero-image" ref={imageRef}>
          <div className="profile-placeholder">
            <img
              className="profile-image"
              src={ProfilePhoto}
              alt="Profile Image of doctor Khoza"
            />
          </div>
        </div>
      </div>

      {/* Pricing Popup */}
      {showPricing && (
        <div className="pricing-popup-overlay" onClick={handleBackdropClick}>
          <div
            className="pricing-popup"
            ref={pricingPopupRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="pricing-title"
          >
            <div className="pricing-popup-header">
              <h2 id="pricing-title">My Services & Pricing</h2>
              <button
                className="close-popup"
                onClick={togglePricingPopup}
                aria-label="Close pricing popup"
              >
                <FaTimes />
              </button>
            </div>
            <div className="pricing-popup-content">
              {/* Standard Package */}
              <div
                className={`pricing-package ${pricingPackages.landing.type}`}
              >
                <h3>{pricingPackages.landing.title}</h3>
                <div className="package-price">
                  {pricingPackages.landing.price}
                </div>
                <ul className="package-features">
                  {pricingPackages.landing.features
                    .slice(0, 4)
                    .map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                </ul>
                <button
                  className="view-details-btn"
                  onClick={() => viewPackageDetails("landing")}
                >
                  View Details
                </button>
                <button
                  className="package-cta"
                  onClick={() => handleGetStarted("landing")}
                >
                  Get Started
                </button>
              </div>

              {/* Business Package */}
              <div
                className={`pricing-package ${pricingPackages.business.type}`}
              >
                <h3>{pricingPackages.business.title}</h3>
                <div className="package-price">
                  {pricingPackages.business.price}
                </div>
                <ul className="package-features">
                  {pricingPackages.business.features
                    .slice(0, 4)
                    .map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                </ul>
                <button
                  className="view-details-btn"
                  onClick={() => viewPackageDetails("business")}
                >
                  View Details
                </button>
                <button
                  className="package-cta"
                  onClick={() => handleGetStarted("business")}
                >
                  Get Started
                </button>
              </div>

              {/* Premium Package */}
              <div className={`pricing-package ${pricingPackages.custom.type}`}>
                <h3>{pricingPackages.custom.title}</h3>
                <div className="package-price">
                  {pricingPackages.custom.price}
                </div>
                <ul className="package-features">
                  {pricingPackages.custom.features
                    .slice(0, 4)
                    .map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                </ul>
                <button
                  className="view-details-btn"
                  onClick={() => viewPackageDetails("custom")}
                >
                  View Details
                </button>
                <button
                  className="package-cta"
                  onClick={() => handleGetStarted("custom")}
                >
                  Get Started
                </button>
              </div>

              {/* Hybrid Package */}
              <div className={`pricing-package ${pricingPackages.hybrid.type}`}>
                {pricingPackages.hybrid.popular && (
                  <div className="popular-tag">Most Popular</div>
                )}
                <h3>{pricingPackages.hybrid.title}</h3>
                <div className="package-price">
                  {pricingPackages.hybrid.price}
                  <span className="package-price-monthly">
                    {pricingPackages.hybrid.monthlyPrice}
                  </span>
                </div>
                <ul className="package-features">
                  {pricingPackages.hybrid.features
                    .slice(0, 4)
                    .map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                </ul>
                <button
                  className="view-details-btn"
                  onClick={() => viewPackageDetails("hybrid")}
                >
                  View Details
                </button>
                <button
                  className="package-cta"
                  onClick={() => handleGetStarted("hybrid")}
                >
                  Get Started
                </button>
              </div>
            </div>
            <div className="pricing-popup-footer">
              <p>
                The Hybrid package strictly covers Business and Premium packages
                and available upon request.{" "}
                <a href="mailto:dev.doc@outlook.com">Contact me</a> for more
                information.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Package Details Modal */}
      {selectedPackage && (
        <div className="package-details-overlay" onClick={handleBackdropClick}>
          <div
            className="package-details-modal"
            ref={packageDetailsRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="details-title"
          >
            <div className="package-details-header">
              <h3 id="details-title">
                {pricingPackages[selectedPackage].title}
              </h3>
              <button
                className="close-details"
                onClick={closePackageDetails}
                aria-label="Close details"
              >
                <FaTimes />
              </button>
            </div>
            <div className="package-details-price">
              {pricingPackages[selectedPackage].price}
              {pricingPackages[selectedPackage].monthlyPrice && (
                <span className="package-price-monthly">
                  {pricingPackages[selectedPackage].monthlyPrice}
                </span>
              )}
            </div>
            <ul className="package-details-features">
              {pricingPackages[selectedPackage].features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            {pricingPackages[selectedPackage].note && (
              <div className="contract-note">
                {pricingPackages[selectedPackage].note}
              </div>
            )}
            <button
              className="package-cta"
              onClick={() => handleGetStarted(selectedPackage)}
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
