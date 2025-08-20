import type { SectionRef } from '../../types'

interface ContactProps {
  registerSection: SectionRef;
  visibleSections: Set<string>;
}

const contactInfo = [
  {
    icon: 'fas fa-envelope',
    title: 'Email',
    value: 'tu.email@example.com'
  },
  {
    icon: 'fas fa-phone',
    title: 'Teléfono',
    value: '+1 (555) 123-4567'
  },
  {
    icon: 'fas fa-map-marker-alt',
    title: 'Ubicación',
    value: 'Ciudad, País'
  }
]

export const Contact = ({ registerSection, visibleSections }: ContactProps) => {
  return (
    <section 
      id="contacto" 
      ref={(el) => registerSection('contacto', el)}
      className={`section contact-section ${visibleSections.has('contacto') ? 'visible' : ''}`}
    >
      <div className="section-content">
        <div className="section-header">
          <h2 className="section-title">CONTACTO</h2>
          <p className="section-subtitle">
            ¿Tienes un proyecto en mente? ¡Hablemos!
          </p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            {contactInfo.map((item, index) => (
              <div key={index} className="contact-item">
                <div className="contact-icon">
                  <i className={item.icon}></i>
                </div>
                <div className="contact-details">
                  <h4>{item.title}</h4>
                  <p>{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <form className="contact-form">
            <div className="form-group">
              <input type="text" className="form-input" placeholder="Nombre" />
            </div>
            <div className="form-group">
              <input type="email" className="form-input" placeholder="Email" />
            </div>
            <div className="form-group">
              <textarea className="form-textarea" placeholder="Mensaje" rows={5}></textarea>
            </div>
            <button type="submit" className="btn btn-primary form-submit">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}