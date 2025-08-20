import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-theme')
    } else {
      document.body.classList.remove('dark-theme')
    }
  }, [isDarkMode])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  const downloadCV = () => {
    console.log('Descargando CV...')
  }

  if (isLoading) {
    return (
      <div className="preloader">
        <div className="loader">
          <div className="loader-inner">
            <div className="loader-line-wrap">
              <div className="loader-line"></div>
            </div>
            <div className="loader-line-wrap">
              <div className="loader-line"></div>
            </div>
            <div className="loader-line-wrap">
              <div className="loader-line"></div>
            </div>
            <div className="loader-line-wrap">
              <div className="loader-line"></div>
            </div>
            <div className="loader-line-wrap">
              <div className="loader-line"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <header className="header">
        <nav className="nav">
          <div className="logo-container">
            <div className="logo-placeholder">
              <span>LOGO</span>
            </div>
          </div>
          <div className="theme-toggle">
            <button onClick={toggleTheme} className="theme-btn">
              <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
            </button>
          </div>
        </nav>
      </header>

      <main className="main">
        <section className="hero">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                <span className="greeting">Hola, soy</span>
                <span className="name">Tu Nombre</span>
              </h1>
              <p className="hero-subtitle">Desarrollador Full Stack apasionado por crear experiencias digitales excepcionales</p>
              <p className="hero-description">
                Especializado en desarrollo web moderno con tecnologías de vanguardia. 
                Transformo ideas en soluciones digitales innovadoras.
              </p>
              
              <div className="hero-actions">
                <button className="btn btn-primary" onClick={downloadCV}>
                  <i className="fas fa-download"></i>
                  Descargar CV
                </button>
                <button className="btn btn-secondary">
                  <i className="fas fa-eye"></i>
                  Ver Proyectos
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
                    <i className="fas fa-user"></i>
                  </div>
                </div>
                <div className="floating-elements">
                  <div className="floating-element"></div>
                  <div className="floating-element"></div>
                  <div className="floating-element"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="scroll-indicator">
            <span>Scroll</span>
            <div className="scroll-line"></div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
