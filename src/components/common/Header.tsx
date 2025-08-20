import type { ScrollToSection } from '../../types'

interface HeaderProps {
  scrollToSection: ScrollToSection;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const Header = ({ scrollToSection, isDarkMode, toggleTheme }: HeaderProps) => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo-container">
          <div className="logo-placeholder">
            <span>JHOAN</span>
          </div>
        </div>
        
        <div className="nav-menu">
          <button onClick={() => scrollToSection('inicio')} className="nav-link">
            INICIO
          </button>
          <button onClick={() => scrollToSection('sobre-mi')} className="nav-link">
            SOBRE MÍ
          </button>
          <button onClick={() => scrollToSection('proyectos')} className="nav-link">
            PROYECTOS
          </button>
          <button onClick={() => scrollToSection('habilidades')} className="nav-link">
            HABILIDADES
          </button>
          <button onClick={() => scrollToSection('experiencia')} className="nav-link">
            EXPERIENCIA
          </button>
          <button onClick={() => scrollToSection('contacto')} className="nav-link">
            CONTACTO
          </button>
        </div>

        <div className="nav-actions">
          <button onClick={toggleTheme} className="theme-btn">
            <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
          </button>
          <button className="menu-btn">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </nav>
    </header>
  )
}