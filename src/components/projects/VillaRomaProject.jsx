import React from 'react';
import { 
  FaHtml5, FaCss3Alt, FaJs, 
  FaExternalLinkAlt, FaCode, FaRecycle, FaHotel 
} from 'react-icons/fa';
import ProjectCard from '../ProjectCard';
import villaRomaImage from '../../images/villa-roma-image.jpg';

const VillaRomaProject = ({ addToProjectCardsRef, handleShowSnippet }) => {
  
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
    image: villaRomaImage,
    title: "Villa Roma Waste Management Manual",
    badge: "Hospitality",
    badgeIcon: FaHotel,
    badgeType: "environmental",
    description: "A digital waste management manual for Villa Roma Boutique Hotel. This interactive guide helps hotel staff implement proper waste sorting and disposal practices to improve sustainability.",
    features: [
      "Categorized waste disposal guidelines",
      "Interactive waste sorting reference",
      "Mobile-friendly for staff access anywhere",
      "Searchable waste items database"
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
        url: "https://unclesmol.github.io/waste_management/",
        isButton: false
      },
      {
        icon: <FaCode />,
        text: "CSS Snippet",
        isButton: true,
        onClick: () => handleShowSnippet('villaRomaCSS', snippets)
      },
      {
        icon: <FaRecycle />,
        text: "Interactive Features",
        isButton: true,
        onClick: () => handleShowSnippet('villaRomaJS')
      }
    ]
  };

  return (
    <ProjectCard {...projectData} addToProjectCardsRef={addToProjectCardsRef} />
  );
};

export default VillaRomaProject;
