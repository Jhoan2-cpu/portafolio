import type { SectionRef } from '../../types'

interface HeroProps {
  registerSection: SectionRef;
  scrollProgress: number;
  downloadCV: () => void;
}

export const Hero = ({ registerSection, scrollProgress, downloadCV }: HeroProps) => {
  return (
    <section id="inicio" ref={(el) => registerSection('inicio', el)} className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-title">
            <span className="greeting">Hola, soy</span>
            <span className="name">JHOAN</span>
          </div>
          
          <p className="hero-subtitle">
            Desarrollador Full Stack apasionado por crear experiencias digitales excepcionales
          </p>
          
          <p className="hero-description">
            Especializado en desarrollo web moderno con tecnologías de vanguardia. 
            Transformo ideas en soluciones digitales innovadoras.
          </p>
          
          <div className="hero-actions">
            <button className="btn btn-primary" onClick={downloadCV}>
              <i className="fas fa-download"></i>
              DESCARGAR CV
            </button>
            <button className="btn btn-secondary">
              <i className="fas fa-eye"></i>
              VER PROYECTOS
            </button>
          </div>

          <div className="social-links">
            <a href="#" className="social-link" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="social-link" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className="social-link" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-link" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="social-link" aria-label="Email">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-container">
            <div className="profile-img">
              <div className="img-placeholder">
                <img src="/perfil.webp" alt="Perfil" />
              </div>
            </div>
            
            <div className="floating-elements">
              <div className="floating-element">
                <img src="/ic_code.svg" alt="Code" />
              </div>
              <div className="floating-element">
                <img src="/ic_db.svg" alt="Database" />
              </div>
              <div className="floating-element">
                <img src="/ic_meta.svg" alt="Meta" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>SCROLL</span>
        <div className="scroll-line-container">
          <div className="scroll-line" style={{ height: `${scrollProgress}%` }}></div>
        </div>
      </div>
    </section>
  )
}