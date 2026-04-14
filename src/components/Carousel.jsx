import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Carousel.css';

// IMPORTAR TUS IMÁGENES
import lab1 from '../assets/images/lab-1.png';
import lab2 from '../assets/images/lab-2.png';
import lab3 from '../assets/images/lab-3.png';
import recetario1 from '../assets/images/recetario-1.png';
import recetario2 from '../assets/images/recetario-2.png';
import tiempo1 from '../assets/images/tiempo-1.png';
import tiempo2 from '../assets/images/tiempo-2.png';

const Carousel = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];
  const images = getProjectImages(currentProject.id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-slide">
        <button className="carousel-btn prev" onClick={prevSlide}>
          <FaChevronLeft />
        </button>
        
        <div className="carousel-content">
          <h3>{currentProject.title}</h3>
          <p>{currentProject.description}</p>
          <div className="tech-badges">
            {currentProject.technologies.map((tech, idx) => (
              <span key={idx} className="tech-badge">{tech}</span>
            ))}
          </div>
          <div className="carousel-image-container">
            <img src={images[currentImageIndex]} alt={currentProject.title} className="carousel-image" />
            {images.length > 1 && (
              <div className="carousel-image-nav">
                <button onClick={prevImage} className="carousel-img-btn">◀</button>
                <span>{currentImageIndex + 1}/{images.length}</span>
                <button onClick={nextImage} className="carousel-img-btn">▶</button>
              </div>
            )}
          </div>
          <div className="project-links">
            <a href={currentProject.code} target="_blank" rel="noopener noreferrer">
              📂 Ver Código en GitHub
            </a>
          </div>
        </div>
        
        <button className="carousel-btn next" onClick={nextSlide}>
          <FaChevronRight />
        </button>
      </div>
      
      <div className="carousel-indicators">
        {projects.map((_, idx) => (
          <button
            key={idx}
            className={`indicator ${idx === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;