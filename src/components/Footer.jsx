import React from 'react';
import { FiGithub, FiMail } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-simple">
      <div className="footer-content-simple">
        <p>© 2024 Diego Rojas - Portafolio Profesional</p>
        <div className="footer-links-simple">
          <a href="https://github.com/diegothxnt" target="_blank" rel="noopener noreferrer">
            <FiGithub /> GitHub
          </a>
          <a href="mailto:rojas.diego3011@gmail.com">
            <FiMail /> Contacto
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;