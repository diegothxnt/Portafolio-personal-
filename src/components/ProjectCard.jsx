import React, { useState } from 'react';
import ImageModal from './ImageModal';
import './ProjectCard.css';

import lab1 from '../assets/images/lab-1.png';
import lab2 from '../assets/images/lab-2.png';
import lab3 from '../assets/images/lab-3.png';
import recetario1 from '../assets/images/recetario-1.png';
import recetario2 from '../assets/images/recetario-2.png';
import tiempo1 from '../assets/images/tiempo-1.png';
import tiempo2 from '../assets/images/tiempo-2.png';

const ProjectCard = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const getProjectImages = (projectId) => {
    switch(projectId) {
      case 1:
        return [lab1, lab2, lab3];
      case 2:
        return [recetario1, recetario2];
      case 3:
        return [tiempo1, tiempo2];
      default:
        return [lab1];
    }
  };

  const images = getProjectImages(project.id);
  const currentImage = images[currentImageIndex];

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <>
      <div className="project-card">
        <div className="project-image-container">
          <img 
            src={currentImage} 
            alt={project.title} 
            className="project-image"
            onClick={openModal}
            style={{ cursor: 'pointer' }}
          />
          {images.length > 1 && (
            <div className="image-nav">
              <button className="image-nav-btn prev-img" onClick={prevImage}>◀</button>
              <span className="image-counter" onClick={openModal}>{currentImageIndex + 1}/{images.length}</span>
              <button className="image-nav-btn next-img" onClick={nextImage}>▶</button>
            </div>
          )}
          <button className="zoom-icon" onClick={openModal}>🔍</button>
        </div>
        <div className="project-info">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="technologies">
            {project.technologies.map((tech, idx) => (
              <span key={idx} className="tech-tag">{tech}</span>
            ))}
          </div>
          <div className="project-actions">
            {project.code && (
              <a href={project.code} target="_blank" rel="noopener noreferrer" className="btn-code">
                Ver Código en GitHub
              </a>
            )}
          </div>
        </div>
      </div>

      {showModal && (
        <ImageModal 
          image={currentImage} 
          alt={project.title}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default ProjectCard;