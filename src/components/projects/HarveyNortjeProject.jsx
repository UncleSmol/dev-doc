import React from 'react';
import { 
  FaReact, FaJs, FaCss3Alt, 
  FaExternalLinkAlt, FaGithub, FaCode, FaLightbulb, FaPortrait 
} from 'react-icons/fa';
import ProjectCard from '../ProjectCard';
import harveyNortjeImage from '../../images/harvey-nortje-image.jpg';

const HarveyNortjeProject = ({ addToProjectCardsRef, handleShowSnippet }) => {
  
  const snippets = {
    css: [
      { title: "Grid System", code: ".grid { display: grid }" },
      { title: "Color Variables", code: ":root { --primary: blue }" },
      { title: "Mobile Overrides", code: "@media (max-width: 768px) {...}" }
    ],
    animations: [
      { title: "Card Flip", code: "@keyframes flip {...}" },
      { title: "Loading Spinner", code: "animation: spin 2s linear" },
      { title: "Hover Effects", code: "transition: all 0.3s ease" }
    ],
    react: [
      { title: "State Hook", code: "const [state, setState] = useState()" },
      { title: "Component Template", code: "const Component = () => {...}" },
      { title: "Context API", code: "const Context = createContext()" }
    ]
  };
  
  const projectData = {
    image: harveyNortjeImage,
    title: "Harvey Nortje Portfolio",
    badge: "Web Profile for a law firm company",
    badgeIcon: FaPortrait,
    badgeType: "portfolio",
    description: "Harvey Nortje Attorneys, founded in 1908 in Emalahleni, Mpumalanga, is a distinguished law firm known for its commitment to providing high-quality legal services. With a rich history and a strong reputation, the firm focuses on building lasting client relationships rooted in trust, confidentiality, and accessibility. Their team of dedicated professionals, supported by a national network of partners, offers expert legal solutions across various sectors. This project represents a complete revamp of their existing website, aimed at enhancing user experience and addressing outdated technologies. The updated site is built using React, ensuring a mobile-responsive design and a modern, user-friendly interface. The redesign resolves previous issues related to outdated technology, providing a seamless and efficient online experience for clients and visitors.",
    features: [
      "Interactive UI with smooth transitions",
      "Responsive layout for all devices",
      "Project showcase with detailed information",
      "Contact form with validation"
    ],
    technologies: [
      { icon: <FaReact />, name: "React" },
      { icon: <FaJs />, name: "JavaScript" },
      { icon: <FaCss3Alt />, name: "CSS3" }
    ],
    links: [
      {
        icon: <FaExternalLinkAlt />,
        text: "Live Preview",
        url: "https://unclesmol.github.io/harvey-nortje/",
        isButton: false
      },
      {
        icon: <FaGithub />,
        text: "GitHub Repo",
        url: "https://github.com/UncleSmol/harvey-nortje",
        isButton: false
      },
      {
        icon: <FaCode />,
        text: "React Component",
        isButton: true,
        onClick: () => handleShowSnippet('portfolioReact', snippets)
      },
      {
        icon: <FaLightbulb />,
        text: "Animation Snippet",
        isButton: true,
        onClick: () => handleShowSnippet('portfolioAnimation')
      },
      {
        icon: <FaCss3Alt />,
        text: "CSS Snippet",
        isButton: true,
        onClick: () => handleShowSnippet('portfolioCSS')
      }
    ]
  };

  return (
    <ProjectCard {...projectData} addToProjectCardsRef={addToProjectCardsRef} />
  );
};

export default HarveyNortjeProject;
