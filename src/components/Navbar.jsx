import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FiHome, FiFolder, FiLogOut, FiUser, FiGithub } from 'react-icons/fi';
import './Navbar.css';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!user) return null;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Diego Rojas
        </Link>
        
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link">
              <FiHome /> Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-link">
              <FiFolder /> Proyectos
            </Link>
          </li>
          <li className="nav-item">
            <a href="https://github.com/diegothxnt" target="_blank" rel="noopener noreferrer" className="nav-link">
              <FiGithub /> GitHub
            </a>
          </li>
          <li className="nav-item">
            <button onClick={handleLogout} className="nav-link logout-btn">
              <FiLogOut /> Cerrar Sesión
            </button>
          </li>
        </ul>
        
        <div className="user-info">
          <FiUser />
          <span>{user?.name || 'Usuario'}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;