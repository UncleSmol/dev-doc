import React, { useEffect, useRef, useCallback } from "react";
import { FaTimes, FaCopy } from "react-icons/fa";
import { gsap } from "gsap";
import "../styles/CodeSnippet.css";
import snippets from "../shared/CodeSnippets";

// Snippet data

const CodeSnippet = ({ type, onClose }) => {
  const modalRef = useRef(null);
  const contentRef = useRef(null);

  const snippetData = snippets[type];

  // Copy code to clipboard
  const copyToClipboard = (code) => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        // Show copied notification
        const notification = document.createElement("div");
        notification.className = "copy-notification";
        notification.textContent = "Copied to clipboard!";
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
                  },
                });
              }, 2000);
            },
          }
        );
      })
      .catch((err) => {
        console.error("Could not copy text: ", err);
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
      onComplete: onClose,
    });
  }, [onClose]);

  // Handle escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Entrance animation
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.4 }
    );

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal]);

  if (!snippetData) return null;

  return (
    <div
      className="code-snippet-modal"
      ref={modalRef}
      onClick={handleBackdropClick}
    >
      <div className="code-snippet-content" ref={contentRef}>
        <div className="code-snippet-header">
          <h3>{snippetData.title}</h3>
          <div className="code-snippet-actions">
            <button
              className="close-btn"
              onClick={closeModal}
              aria-label="Close"
            >
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
