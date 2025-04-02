import React from 'react';
import PropTypes from 'prop-types';

const ProjectCard = ({ 
  image, 
  title, 
  badge, 
  badgeIcon: BadgeIcon, 
  badgeType, 
  description, 
  features, 
  technologies, 
  links, 
  addToProjectCardsRef 
}) => {
  return (
    <div className="project-card" ref={addToProjectCardsRef}>
      <div 
        className="project-image" 
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      <div className="project-content">
        <div className="project-header">
          <h3 className="project-title">{title}</h3>
          <div className={`project-badge ${badgeType}`}>
            <BadgeIcon /> {badge}
          </div>
        </div>
        <p className="project-description">{description}</p>
        <div className="project-features">
          <h4>Key Features:</h4>
          <ul>
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className="project-technologies">
          {technologies.map((tech, index) => (
            <div className="tech-tag" key={index}>
              {tech.icon} {tech.name}
            </div>
          ))}
        </div>
        <div className="project-links">
          {links.map((link, index) => (
            link.isButton ? (
              <div 
                key={index} 
                onClick={link.onClick} 
                className="project-link"
              >
                {link.icon} {link.text}
              </div>
            ) : (
              <a 
                key={index} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link"
              >
                {link.icon} {link.text}
              </a>
            )
          ))}
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  badge: PropTypes.string.isRequired,
  badgeIcon: PropTypes.elementType.isRequired,
  badgeType: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  technologies: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.element.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.element.isRequired,
      text: PropTypes.string.isRequired,
      url: PropTypes.string,
      isButton: PropTypes.bool,
      onClick: PropTypes.func
    })
  ).isRequired,
  addToProjectCardsRef: PropTypes.func.isRequired
};

export default ProjectCard;
