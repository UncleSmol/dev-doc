import React from 'react';
import { 
  FaReact, FaCss3Alt, FaJs, 
  FaExternalLinkAlt, FaCode, FaLightbulb, FaSolarPanel 
} from 'react-icons/fa';
import ProjectCard from '../ProjectCard';
import mtapImage from '../../images/mtap-image.jpg'; // Import the image

const ChefLuuProject = ({ addToProjectCardsRef, handleShowSnippet }) => {

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
    title: "Chef Luu's Portfolio",
    badge: "Cook",
    badgeIcon: FaSolarPanel,
    badgeType: "Hospitality",
    description: "Chef Luu is a Pro Cook in the making, passionate about food preparation, hand-art and content creation, Luyanda aspires to be one of the best Food Technicians in town. Chef Luu had a vision about a portfolio that best describes her personality, a mix of food enthusiasm, fashion, and artistic creativity, this design targets specifically that about Luyanda, a social media-based web portfolio, responsive and highly focused on mobile design to really land that Social Media feel.",
    features: [
      "Responsive layout for all device sizes",
      "Mobile-First design approach",
      "Lazy loading",
      "Skills Showcase",
      
    ],
    technologies: [
      { icon: <FaReact />, name: "React" },
      { icon: <FaCss3Alt />, name: "CSS3" },
      { icon: <FaJs />, name: "JavaScript" }
    ],
    links: [
      {
        icon: <FaExternalLinkAlt />,
        text: "Live Preview",
        url: "https://unclesmol.github.io/chef-luu",
        isButton: false
      },
      {
        icon: <FaCode />,
        text: "About Chef Luu Component",
        isButton: true,
        onClick: () => handleShowSnippet('aboutChefLuu', snippets)
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

export default ChefLuuProject;
