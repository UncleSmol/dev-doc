import React from "react";
import {
  FaReact,
  FaJs,
  FaCss3Alt,
  FaExternalLinkAlt,
  FaGithub,
  FaCode,
  FaLightbulb,
  FaHospital,
} from "react-icons/fa";
import ProjectCard from "../ProjectCard";
import physioImage from "../../images/physio-image.jpg";

const MyPhysioProject = ({ addToProjectCardsRef, handleShowSnippet }) => {
  const snippets = {
    css: [
      { title: "Grid System", code: ".grid { display: grid }" },
      { title: "Color Variables", code: ":root { --primary: blue }" },
      { title: "Mobile Overrides", code: "@media (max-width: 768px) {...}" },
    ],
    animations: [
      { title: "Card Flip", code: "@keyframes flip {...}" },
      { title: "Loading Spinner", code: "animation: spin 2s linear" },
      { title: "Hover Effects", code: "transition: all 0.3s ease" },
    ],
    react: [
      { title: "State Hook", code: "const [state, setState] = useState()" },
      { title: "Component Template", code: "const Component = () => {...}" },
      { title: "Context API", code: "const Context = createContext()" },
    ],
  };

  const projectData = {
    image: physioImage,
    title: "MyPhysio Management System",
    badge: "Healthcare",
    badgeIcon: FaHospital,
    badgeType: "healthcare",
    description:
      "A comprehensive physiotherapy practice management system with integrated contact functionality, appointment scheduling, and patient management. Features a clean, professional design with intuitive navigation.",
    features: [
      "Responsive mobile-first design",
      "Interactive service showcase",
      "Online booking system",
      "Patient information portal",
      "Practice hours and contact information",
    ],
    technologies: [
      { icon: <FaReact />, name: "React" },
      { icon: <FaJs />, name: "JavaScript" },
      { icon: <FaCss3Alt />, name: "CSS3" },
    ],
    links: [
      {
        icon: <FaExternalLinkAlt />,
        text: "Live Preview",
        url: "https://unclesmol.github.io/myphysio/",
        isButton: false,
      },

      {
        icon: <FaLightbulb />,
        text: "Animation Snippet",
        isButton: true,
        onClick: () => handleShowSnippet("myphysioAnimation"),
      },
      {
        icon: <FaCode />,
        text: "Contact Component",
        isButton: true,
        onClick: () => handleShowSnippet("myphysioContact", snippets),
      },
    ],
  };

  return (
    <ProjectCard {...projectData} addToProjectCardsRef={addToProjectCardsRef} />
  );
};

export default MyPhysioProject;
