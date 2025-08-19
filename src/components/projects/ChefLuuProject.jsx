import React from "react";
import {
  FaReact,
  FaCss3Alt,
  FaJs,
  FaExternalLinkAlt,
  FaCode,
  FaLightbulb,
  FaUtensils,
} from "react-icons/fa";
import ProjectCard from "../ProjectCard";
// Using a placeholder image URL since chef-luu-image.jpg doesn't exist
const chefLuuImage = "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const ChefLuuProject = ({ addToProjectCardsRef, handleShowSnippet }) => {
  const projectData = {
    image: chefLuuImage,
    title: "Chef Luu's Portfolio",
    badge: "Cook",
    badgeIcon: FaUtensils, // More appropriate icon for a chef
    badgeType: "hospitality", // Use lowercase to match CSS class
    description:
      "Chef Luu is a Pro Cook in the making, passionate about food preparation, hand-art and content creation, Luyanda aspires to be one of the best Food Technicians in town. Chef Luu had a vision about a portfolio that best describes her personality, a mix of food enthusiasm, fashion, and artistic creativity, this design targets specifically that about Luyanda, a social media-based web portfolio, responsive and highly focused on mobile design to really land that Social Media feel.",
    features: [
      "Responsive layout for all device sizes",
      "Mobile-First design approach",
      "Lazy loading",
      "Skills Showcase",
    ],
    technologies: [
      { icon: <FaReact />, name: "React" },
      { icon: <FaCss3Alt />, name: "CSS3" },
      { icon: <FaJs />, name: "JavaScript" },
    ],
    links: [
      {
        icon: <FaExternalLinkAlt />,
        text: "Live Preview",
        url: "https://unclesmol.github.io/chef-luu",
        isButton: false,
      },
      {
        icon: <FaCode />,
        text: "About Component",
        isButton: true,
        onClick: () => handleShowSnippet("aboutChefLuu"), // Remove snippets parameter
      },
      {
        icon: <FaLightbulb />,
        text: "Hero Animations Snippet",
        isButton: true,
        onClick: () => handleShowSnippet("chefLuuAnimation"), // Use more specific snippet type
      },
    ],
  };

  return (
    <ProjectCard {...projectData} addToProjectCardsRef={addToProjectCardsRef} />
  );
};

export default ChefLuuProject;