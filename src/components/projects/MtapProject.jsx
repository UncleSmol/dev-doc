import React from 'react';
import { 
  FaHtml5, FaCss3Alt, FaJs, 
  FaExternalLinkAlt, FaCode, FaLightbulb, FaSolarPanel 
} from 'react-icons/fa';
import ProjectCard from '../ProjectCard';
import mtapImage from '../../images/mtap-image.jpg'; // Import the image

const MtapProject = ({ addToProjectCardsRef, handleShowSnippet }) => {

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
    image: mtapImage,
    title: "MTAP Group Website",
    badge: "Renewable Energy",
    badgeIcon: FaSolarPanel,
    badgeType: "renewable",
    description: "M-TAP Group was formed by a team of 5 specialists in the green-renewable energy sector. I was tasked by the Chief Operations Officer of the company to compile a business solution to help them market their services easier. The website serves as a digital platform to showcase their services and expertise in the renewable energy field. The project focuses on creating a responsive and user-friendly interface that highlights the company's offerings and facilitates easy navigation for users.",
    features: [
      "Responsive layout for all device sizes",
      "Interactive service showcase",
      "Optimized performance for fast loading",
      "Contact form with validation"
    ],
    technologies: [
      { icon: <FaHtml5 />, name: "HTML5" },
      { icon: <FaCss3Alt />, name: "CSS3" },
      { icon: <FaJs />, name: "JavaScript" }
    ],
    links: [
      {
        icon: <FaExternalLinkAlt />,
        text: "Live Preview",
        url: "https://unclesmol.github.io/mtapgroup/",
        isButton: false
      },
      {
        icon: <FaCode />,
        text: "CSS Snippet",
        isButton: true,
        onClick: () => handleShowSnippet('responsive', snippets)
      }
      ,
      {
        icon: <FaLightbulb />,
        text: "Hero Animations Snippet",
        isButton: true,
        onClick: () => handleShowSnippet('animation')
      }
    ]
  };

  return (
    <ProjectCard {...projectData} addToProjectCardsRef={addToProjectCardsRef} />
  );
};

export default MtapProject;
