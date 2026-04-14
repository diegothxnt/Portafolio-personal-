import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import Carousel from '../components/Carousel';
import Accordion from '../components/Accordion';
import './Projects.css';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('grid');

  const projects = [
    {
      id: 1,
      title: "Sistema de Gestión de Laboratorio",
      description: "Sistema completo para gestionar entrada y salida de equipos y componentes de un laboratorio de electrónica. Permite control de inventario, registro de préstamos, seguimiento de equipos, reportes automatizados y generación de historiales. Desarrollado con Node.js, Express y MongoDB.",
      technologies: ["Node.js", "Express", "MongoDB", "JavaScript", "HTML5", "CSS3"],
      code: "https://github.com/diegothxnt/WEB-2.git"
    },
    {
      id: 2,
      title: "Recetario Digital",
      description: "Aplicación web para gestionar recetas de cocina desarrollada con React. Incluye autenticación con credenciales, CRUD completo (crear, leer, actualizar y eliminar recetas), 4 versiones de tarjetas adaptables, crop automático de texto e imágenes, popup para ver recetas completas y persistencia con localStorage.",
      technologies: ["React", "localStorage", "CSS3", "JavaScript", "HTML5"],
      code: "https://github.com/diegothxnt/recetario-digital"
    },
    {
      id: 3,
      title: "Visualizador de Tiempo - Angular",
      description: "Proyecto Angular que implementa 12 formas diferentes de visualizar el tiempo. Incluye: Reloj Digital, Analógico, Cronómetro, Temporizador, Cuenta Regresiva, Reloj Mundial (8 ciudades), Calendario, Fase Lunar, Línea de Tiempo, Reloj de Arena, Reloj de Agua y Reloj de Sol. Sistema de autenticación completo y slider para alterar el tiempo.",
      technologies: ["Angular", "TypeScript", "RxJS", "HTML5", "CSS3"],
      code: "https://github.com/diegothxnt/Proyecto-2-Frameworks-.git"
    }
  ];

  const faqs = [
    {
      title: "¿Qué tecnologías domino?",
      content: "Tengo experiencia sólida en React, Angular, Node.js, JavaScript, TypeScript, Python y Java. Actualmente estoy profundizando en TypeScript y Docker para expandir mis habilidades."
    },
    {
      title: "¿En qué trimestre de la carrera voy?",
      content: "Actualmente curso el 10° trimestre de Ingeniería en Computación, con materias enfocadas en desarrollo de software, frameworks modernos, arquitectura de aplicaciones web y gestión de proyectos."
    },
    {
      title: "¿Cómo gestiono mis proyectos?",
      content: "Utilizo Git y GitHub para control de versiones. Sigo metodologías ágiles como Scrum, mantengo documentación clara en cada repositorio y realizo pruebas unitarias para garantizar la calidad del código."
    },
    {
      title: "¿Qué busco para mi carrera profesional?",
      content: "Busco oportunidades como desarrollador frontend o full-stack donde pueda aplicar mis conocimientos en React y Angular, contribuir a proyectos desafiantes, aprender de profesionales experimentados y seguir creciendo."
    }
  ];

  return (
    <div className="projects-page">
      <div className="projects-header">
        <h1>Mis Proyectos</h1>
        <p className="subtitle">Proyectos desarrollados durante mi carrera universitaria - 10° Trimestre</p>
        <div className="tab-buttons">
          <button 
            className={`tab-btn ${activeTab === 'grid' ? 'active' : ''}`}
            onClick={() => setActiveTab('grid')}
          >
            Vista Grid
          </button>
          <button 
            className={`tab-btn ${activeTab === 'carousel' ? 'active' : ''}`}
            onClick={() => setActiveTab('carousel')}
          >
            Vista Carrusel
          </button>
        </div>
      </div>

      {activeTab === 'grid' && (
        <div className="projects-grid">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}

      {activeTab === 'carousel' && (
        <Carousel projects={projects} />
      )}

      <div className="faq-section">
        <h2>Preguntas Frecuentes</h2>
        <Accordion items={faqs} />
      </div>
    </div>
  );
};

export default Projects;