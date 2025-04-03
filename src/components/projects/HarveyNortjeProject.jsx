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
    description: "Harvey Nortje Attorneys is a law firm founded in 1908 in Emalahleni, Mpumalanga, RSA. This project is one of my many web upgrades. When I came across the current website this lawfirm uses, i studied the technologies it was running on and found they are pretty much outdated and needed a revamp. The project is an upgrade from Vanilla HTML, CSS and JavaScript to ReactJS and GSAP. now using the much more efficient VDOM Manipulation",
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
        icon: <FaCode />,
        text: "React Components",
        isButton: true,
        onClick: () => handleShowSnippet('portfolioReact', snippets)
      },
      {
        icon: <FaCss3Alt />,
        text: "CSS Snippets",
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
