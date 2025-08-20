import type { SectionRef } from '../../types'

interface AboutProps {
  registerSection: SectionRef;
  visibleSections: Set<string>;
}

export const About = ({ registerSection, visibleSections }: AboutProps) => {
  return (
    <section 
      id="sobre-mi" 
      ref={(el) => registerSection('sobre-mi', el)} 
      className={`section about-section ${visibleSections.has('sobre-mi') ? 'visible' : ''}`}
    >
      <div className="section-content">
        <div className="section-header">
          <h2 className="section-title">SOBRE MÍ</h2>
          <p className="section-subtitle">
            Conoce más sobre mi trayectoria profesional
          </p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              Soy un desarrollador Full Stack apasionado por crear experiencias digitales excepcionales. 
              Con más de 5 años de experiencia en el desarrollo web, me especializo en tecnologías modernas 
              como React, Node.js y Python.
            </p>
            <p>
              Mi enfoque se centra en escribir código limpio, escalable y mantenible, siempre buscando 
              las mejores prácticas y las últimas tendencias en desarrollo web.
            </p>
            
            <div className="stats">
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Años de Experiencia</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Proyectos Completados</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">30+</span>
                <span className="stat-label">Clientes Satisfechos</span>
              </div>
            </div>
          </div>

          <div className="about-image">
            <div className="about-img-container">
              <div className="about-img-placeholder">
                <i className="fas fa-user"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}