import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Line, Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { 
  FiCode, 
  FiFolder, 
  FiAward, 
  FiClock, 
  FiTrendingUp, 
  FiUser,
  FiCalendar,
  FiZap,
  FiStar
} from 'react-icons/fi';
import './Dashboard.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const { user } = useAuth();

  const lineData = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    datasets: [
      {
        label: 'Proyectos',
        data: [2, 3, 5, 7, 9, 12, 14, 16, 18, 21, 23, 24],
        borderColor: '#6366f1',
        backgroundColor: 'rgba(99, 102, 241, 0.08)',
        tension: 0.4,
        fill: true,
        pointBackgroundColor: '#6366f1',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
      {
        label: 'Horas de Código',
        data: [45, 68, 92, 120, 145, 178, 210, 245, 280, 310, 345, 380],
        borderColor: '#10b981',
        backgroundColor: 'rgba(16, 185, 129, 0.08)',
        tension: 0.4,
        fill: true,
        pointBackgroundColor: '#10b981',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const barData = {
    labels: ['React', 'Angular', 'Node.js', 'TypeScript', 'Python', 'MongoDB'],
    datasets: [
      {
        label: 'Dominio (%)',
        data: [92, 85, 88, 78, 82, 80],
        backgroundColor: [
          'rgba(99, 102, 241, 0.85)',
          'rgba(139, 92, 246, 0.85)',
          'rgba(16, 185, 129, 0.85)',
          'rgba(245, 158, 11, 0.85)',
          'rgba(239, 68, 68, 0.85)',
          'rgba(6, 182, 212, 0.85)',
        ],
        borderRadius: 10,
        barPercentage: 0.65,
        categoryPercentage: 0.8,
      },
    ],
  };

  const pieData = {
    labels: ['Frontend', 'Backend', 'Bases de Datos', 'DevOps', 'UI/UX'],
    datasets: [
      {
        data: [40, 30, 15, 10, 5],
        backgroundColor: ['#6366f1', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'],
        borderWidth: 0,
        hoverOffset: 10,
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          usePointStyle: true,
          boxWidth: 8,
          font: { size: 11 },
        },
      },
      tooltip: {
        backgroundColor: '#1f2937',
        titleColor: '#f3f4f6',
        bodyColor: '#d1d5db',
        borderColor: '#374151',
        borderWidth: 1,
        padding: 10,
        cornerRadius: 8,
      },
    },
    scales: {
      y: {
        grid: { color: '#f3f4f6', drawBorder: false },
        ticks: { color: '#6b7280', font: { size: 11 } },
      },
      x: {
        grid: { display: false },
        ticks: { color: '#6b7280', font: { size: 11 } },
      },
    },
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#1f2937',
        titleColor: '#f3f4f6',
        bodyColor: '#d1d5db',
        cornerRadius: 8,
      },
    },
    scales: {
      y: {
        grid: { color: '#f3f4f6' },
        ticks: { color: '#6b7280', max: 100 },
      },
      x: {
        grid: { display: false },
        ticks: { color: '#6b7280', font: { size: 11 } },
      },
    },
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          boxWidth: 8,
          font: { size: 11 },
        },
      },
      tooltip: {
        backgroundColor: '#1f2937',
        cornerRadius: 8,
      },
    },
  };

  const stats = [
    { icon: <FiFolder />, label: 'Proyectos', value: '12', change: '+3', color: '#6366f1', bg: '#eef2ff' },
    { icon: <FiCode />, label: 'Repositorios', value: '24', change: '+8', color: '#10b981', bg: '#ecfdf5' },
    { icon: <FiAward />, label: 'Certificaciones', value: '8', change: '+2', color: '#f59e0b', bg: '#fffbeb' },
    { icon: <FiClock />, label: 'Horas de Código', value: '380', change: '+45', color: '#ef4444', bg: '#fef2f2' },
  ];

  const achievements = [
    { icon: <FiZap />, label: 'Proyecto Destacado', value: 'Sistema Laboratorio', color: '#6366f1' },
    { icon: <FiStar />, label: 'Mejor Calificación', value: 'Visualizador Angular', color: '#f59e0b' },
    { icon: <FiAward />, label: 'GitHub Stars', value: '+15 este año', color: '#ef4444' },
  ];

  return (
    <div className="dashboard-beautiful">
      <div className="dashboard-header-beautiful">
        <div>
          <h1 className="greeting-beautiful">
            Hola, {user?.name?.split(' ')[0] || 'Diego'}
          </h1>
          <p className="subtitle-beautiful">Bienvenido a tu espacio profesional</p>
        </div>
        <div className="date-badge">
          <FiCalendar />
          <span>{new Date().toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</span>
        </div>
      </div>

      <div className="stats-beautiful">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card-beautiful" style={{ borderBottomColor: stat.color }}>
            <div className="stat-icon-beautiful" style={{ backgroundColor: stat.bg, color: stat.color }}>
              {stat.icon}
            </div>
            <div className="stat-info-beautiful">
              <span className="stat-value-beautiful">{stat.value}</span>
              <span className="stat-label-beautiful">{stat.label}</span>
              <span className="stat-change-beautiful" style={{ color: stat.color }}>↑ {stat.change}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="profile-card-beautiful">
        <div className="profile-avatar">
          <div className="avatar-gradient">
            <FiUser size={36} />
          </div>
        </div>
        <div className="profile-info">
          <h2>Diego Rojas</h2>
          <p className="profile-title">Desarrollador Full-Stack | 10° Trimestre</p>
          <div className="profile-tags">
            <span className="profile-tag">React</span>
            <span className="profile-tag">Angular</span>
            <span className="profile-tag">Node.js</span>
            <span className="profile-tag">TypeScript</span>
          </div>
          <p className="profile-bio">
            Estudiante de Ingeniería en Computación apasionado por crear soluciones digitales 
            innovadoras. Especializado en frameworks modernos y buenas prácticas de desarrollo.
          </p>
        </div>
      </div>

      <div className="charts-beautiful">
        <div className="chart-card-beautiful full-width">
          <div className="chart-header-beautiful">
            <FiTrendingUp />
            <h3>Evolución 2024</h3>
          </div>
          <Line data={lineData} options={lineOptions} />
        </div>

        <div className="chart-card-beautiful">
          <div className="chart-header-beautiful">
            <FiCode />
            <h3>Habilidades Técnicas</h3>
          </div>
          <Bar data={barData} options={barOptions} />
        </div>

        <div className="chart-card-beautiful">
          <div className="chart-header-beautiful">
            <FiFolder />
            <h3>Distribución</h3>
          </div>
          <Pie data={pieData} options={pieOptions} />
        </div>
      </div>

      <div className="achievements-beautiful">
        <h3 className="section-title">Logros Destacados</h3>
        <div className="achievements-grid">
          {achievements.map((item, index) => (
            <div key={index} className="achievement-card">
              <div className="achievement-icon" style={{ color: item.color }}>{item.icon}</div>
              <div>
                <div className="achievement-label">{item.label}</div>
                <div className="achievement-value">{item.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;