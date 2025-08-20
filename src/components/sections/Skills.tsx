import type { SectionRef } from '../../types'

interface SkillsProps {
  registerSection: SectionRef;
  visibleSections: Set<string>;
}

const skillsData = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: '95%' },
      { name: 'TypeScript', level: '90%' },
      { name: 'CSS/Sass', level: '92%' }
    ]
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: '88%' },
      { name: 'Python', level: '85%' },
      { name: 'MongoDB', level: '80%' }
    ]
  },
  {
    category: 'Herramientas',
    skills: [
      { name: 'Git', level: '93%' },
      { name: 'Docker', level: '75%' },
      { name: 'AWS', level: '70%' }
    ]
  }
]

export const Skills = ({ registerSection, visibleSections }: SkillsProps) => {
  return (
    <section 
      id="habilidades" 
      ref={(el) => registerSection('habilidades', el)} 
      className={`section skills-section ${visibleSections.has('habilidades') ? 'visible' : ''}`}
    >
      <div className="section-content">
        <div className="section-header">
          <h2 className="section-title">HABILIDADES</h2>
          <p className="section-subtitle">
            Tecnologías y herramientas que domino
          </p>
        </div>
        
        <div className="skills-grid">
          {skillsData.map((skillGroup, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{skillGroup.category}</h3>
              <div className="skills-list">
                {skillGroup.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: skill.level }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}