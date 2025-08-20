import { useState } from 'react'
import type { SectionRef, Project } from '../../types'

interface ProjectsProps {
  registerSection: SectionRef;
  visibleSections: Set<string>;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Plataforma completa de comercio electrónico con React, Node.js y MongoDB',
    technologies: ['React', 'Node.js', 'MongoDB'],
    icon: 'fas fa-laptop-code'
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Aplicación de gestión de tareas con funcionalidades avanzadas y tiempo real',
    technologies: ['Vue.js', 'Firebase', 'TypeScript'],
    icon: 'fas fa-mobile-alt'
  },
  {
    id: '3',
    title: 'Analytics Dashboard',
    description: 'Dashboard de análisis con visualizaciones interactivas y reportes en tiempo real',
    technologies: ['React', 'D3.js', 'Python'],
    icon: 'fas fa-chart-line'
  },
  {
    id: '4',
    title: 'Social Media App',
    description: 'Red social moderna con chat en tiempo real y compartición de contenido multimedia',
    technologies: ['Next.js', 'Socket.io', 'PostgreSQL'],
    icon: 'fas fa-share-alt'
  },
  {
    id: '5',
    title: 'AI Chat Assistant',
    description: 'Asistente virtual inteligente con procesamiento de lenguaje natural avanzado',
    technologies: ['Python', 'TensorFlow', 'FastAPI'],
    icon: 'fas fa-robot'
  },
  {
    id: '6',
    title: 'Weather App',
    description: 'Aplicación meteorológica con predicciones precisas y mapas interactivos',
    technologies: ['Flutter', 'GraphQL', 'MongoDB'],
    icon: 'fas fa-cloud-sun'
  },
  {
    id: '7',
    title: 'Crypto Tracker',
    description: 'Aplicación para seguimiento y análisis de criptomonedas en tiempo real',
    technologies: ['React Native', 'Chart.js', 'Redis'],
    icon: 'fas fa-coins'
  },
  {
    id: '8',
    title: 'Learning Platform',
    description: 'Plataforma educativa completa con cursos interactivos y seguimiento',
    technologies: ['Django', 'React', 'AWS'],
    icon: 'fas fa-graduation-cap'
  },
  {
    id: '9',
    title: 'Food Delivery App',
    description: 'Aplicación de delivery con geolocalización y pagos en línea',
    technologies: ['React', 'Express', 'Stripe'],
    icon: 'fas fa-utensils'
  }
]

export const Projects = ({ registerSection, visibleSections }: ProjectsProps) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const projectsPerPage = 3
  const totalPages = Math.ceil(projects.length / projectsPerPage)
  
  // Calcular proyectos para la página actual
  const startIndex = (currentPage - 1) * projectsPerPage
  const endIndex = startIndex + projectsPerPage
  const currentProjects = projects.slice(startIndex, endIndex)
  
  const handlePageChange = (page: number) => {
    if (page === currentPage || isTransitioning) return
    
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentPage(page)
      setTimeout(() => setIsTransitioning(false), 50)
    }, 250)
  }
  
  const goToPage = (page: number) => {
    handlePageChange(page)
  }
  
  const nextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1)
    }
  }
  
  const prevPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1)
    }
  }
  return (
    <section 
      id="proyectos" 
      ref={(el) => registerSection('proyectos', el)} 
      className={`section projects-section ${visibleSections.has('proyectos') ? 'visible' : ''}`}
    >
      <div className="section-content">
        <div className="section-header">
          <h2 className="section-title">PROYECTOS</h2>
          <p className="section-subtitle">
            Algunos de mis trabajos más destacados
          </p>
        </div>
        
        <div className="projects-container">
          <button 
            className="pagination-arrow pagination-arrow-left" 
            onClick={prevPage}
            disabled={currentPage === 1}
          >
            &lt;
          </button>
          
          <button 
            className="pagination-arrow pagination-arrow-right" 
            onClick={nextPage}
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
          
          <div className={`projects-grid ${isTransitioning ? 'page-changing' : ''}`}>
            {currentProjects.map((project, index) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <div className="project-img-placeholder">
                    <i className={project.icon}></i>
                  </div>
                </div>
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <button className="project-link">
                      <i className="fas fa-external-link-alt"></i>
                      Demo
                    </button>
                    <button className="project-link">
                      <i className="fab fa-github"></i>
                      Código
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

          <div className="pagination-dots">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                className={`pagination-dot ${currentPage === index + 1 ? 'active' : ''}`}
                onClick={() => goToPage(index + 1)}
              />
            ))}
          </div>
      </div>
    </section>
  )
}