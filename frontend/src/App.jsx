import { useState } from 'react';
import { PlanProvider, usePlan } from './context/PlanContext';
import { Solicitud } from './components/Solicitud';
import { Antecedentes } from './components/Antecedentes';
import { AnalisisRodal } from './components/AnalisisRodal';
import { InventarioForestal } from './components/InventarioForestal';
import { Diagnostico } from './components/Diagnostico';
import { InformacionCuantitativa } from './components/InformacionCuantitativa';
import { Cartografia } from './components/Cartografia';
import './App.css';

const sections = [
  { id: 'home', label: '🏠 Inicio', component: null },
  { id: 'solicitud', label: '📋 Solicitud', component: Solicitud },
  { id: 'antecedentes', label: '📝 Antecedentes', component: Antecedentes },
  { id: 'rodal', label: '🌲 Análisis Rodal', component: AnalisisRodal },
  { id: 'inventario', label: '📊 Inventario', component: InventarioForestal },
  { id: 'diagnostico', label: '🔍 Diagnóstico', component: Diagnostico },
  { id: 'cuantitativa', label: '📈 Info. Cuantitativa', component: InformacionCuantitativa },
  { id: 'cartografia', label: '🗺️ Cartografía', component: Cartografia },
];

const Home = ({ onNavigate }) => {
  return (
    <div className="home-view">
      <div className="hero-section">
        <h1>Plan de Manejo Forestal 🌲</h1>
        <p className="subtitle">Herramienta para construir planes de manejo de forma simple</p>
      </div>

      <div className="sections-grid">
        {sections.map((section) => {
          if (section.id === 'home') return null;
          return (
            <div
              key={section.id}
              className="section-card"
              onClick={() => onNavigate(section.id)}
            >
              <div className="card-emoji">{section.label.split(' ')[0]}</div>
              <h3>{section.label.split(' ').slice(1).join(' ')}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const AppContent = () => {
  const [activeSection, setActiveSection] = useState('home');
  const { exportarJSON, exportarPDF, limpiarDatos } = usePlan();

  const currentSection = sections.find((s) => s.id === activeSection);
  const CurrentComponent = currentSection?.component;

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-content">
          <h1 className="app-title">📋 Plan de Manejo Forestal</h1>
          <p className="app-description">Ley N° 20.283</p>
        </div>
        <div className="header-actions">
          <button onClick={exportarPDF} className="btn btn-secondary">
            📄 PDF
          </button>
          <button onClick={exportarJSON} className="btn btn-secondary">
            📋 JSON
          </button>
          <button
            onClick={() => {
              if (confirm('¿Deseas limpiar todos los datos?')) {
                limpiarDatos();
                setActiveSection('home');
              }
            }}
            className="btn btn-danger"
          >
            🗑️ Limpiar
          </button>
        </div>
      </header>

      <div className="app-body">
        <nav className="sidebar">
          <div className="nav-section">
            <div className="nav-title">Secciones</div>
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`nav-item ${activeSection === section.id ? 'active' : ''}`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </nav>

        <main className="main-content">
          {activeSection === 'home' ? (
            <Home onNavigate={setActiveSection} />
          ) : (
            CurrentComponent && <CurrentComponent />
          )}
        </main>
      </div>

      <footer className="app-footer">
        <p>Plan de Manejo Forestal © 2025 | CONAF</p>
      </footer>
    </div>
  );
};

function App() {
  return (
    <PlanProvider>
      <AppContent />
    </PlanProvider>
  );
}

export default App;
