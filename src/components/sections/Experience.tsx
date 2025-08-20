import type { SectionRef } from '../../types'

interface ExperienceProps {
  registerSection: SectionRef;
  visibleSections: Set<string>;
}

const experiences = [
  {
    period: '2022 - Presente',
    title: 'Senior Full Stack Developer',
    company: 'Tech Solutions Inc.',
    description: 'Lidero el desarrollo de aplicaciones web complejas, mentorizo desarrolladores junior y optimizo la arquitectura de sistemas para mejorar el rendimiento.',
    technologies: ['React', 'Node.js', 'AWS']
  },
  {
    period: '2020 - 2022',
    title: 'Full Stack Developer',
    company: 'Digital Agency Pro',
    description: 'Desarrollo de aplicaciones web y móviles para diversos clientes, implementación de APIs REST y integración con servicios de terceros.',
    technologies: ['Vue.js', 'Python', 'PostgreSQL']
  },
  {
    period: '2019 - 2020',
    title: 'Frontend Developer',
    company: 'StartupXYZ',
    description: 'Creación de interfaces de usuario responsivas y optimizadas, colaboración estrecha con el equipo de UX/UI para implementar diseños pixel-perfect.',
    technologies: ['JavaScript', 'HTML5', 'CSS3']
  }
]

export const Experience = ({ registerSection, visibleSections }: ExperienceProps) => {
  return (
    <section 
      id="experiencia" 
      ref={(el) => registerSection('experiencia', el)} 
      className={`section experience-section ${visibleSections.has('experiencia') ? 'visible' : ''}`}
    >
      <div className="section-content">
        <div className="section-header">
          <h2 className="section-title">EXPERIENCIA</h2>
          <p className="section-subtitle">
            Mi trayectoria profesional en el desarrollo
          </p>
        </div>
        
        <div className="timeline">
          {experiences.map((experience, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-period">{experience.period}</div>
                <h3 className="timeline-title">{experience.title}</h3>
                <div className="timeline-company">{experience.company}</div>
                <p className="timeline-description">{experience.description}</p>
                <div className="timeline-technologies">
                  {experience.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}